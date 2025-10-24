import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function toBool(v, def = false) {
  if (v === undefined || v === null) return def;
  return String(v).toLowerCase() === "true";
}
function normalizeAddress(v) {
  if (!v) return "";
  const s = String(v).trim();
  const m = s.match(/<([^>]+)>/);
  return (m ? m[1] : s).replace(/[ \t\r\n]+/g, "");
}
function isValidEmail(addr) {
  if (!addr) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(addr));
}
function safeHeader(v) {
  return String(v || "")
    .replace(/[\r\n]+/g, " ")
    .trim();
}
function corsHeaders(origin) {
  const allow = process.env.ALLOW_ORIGIN || origin || "*"; // set to your domain in prod
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}
async function parseBody(request) {
  const ct = (request.headers.get("content-type") || "").toLowerCase();
  if (ct.includes("application/json")) {
    return (await request.json()) || {};
  }
  // support HTML form posts
  const form = await request.formData();
  const get = (k) => form.get(k) || "";
  return {
    name: get("name"),
    lastName: get("lastName"),
    email: get("email"),
    message: get("message"),
    companyName: get("companyName"),
    companyAddress: get("companyAddress"),
    country: get("country"),
  };
}
function createTransport() {
  const host = process.env.EMAIL_HOST || "smtp.hostinger.com";
  const port = Number(process.env.EMAIL_PORT || 587);
  const secure = toBool(process.env.EMAIL_SECURE, port === 465);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const debug = toBool(process.env.EMAIL_DEBUG, false);
  if (!user || !pass) throw new Error("Missing EMAIL_USER/EMAIL_PASS");
  return nodemailer.createTransport({
    host,
    port,
    secure, // 587 => false (STARTTLS), 465 => true (SSL)
    auth: { user, pass },
    pool: false,
    keepAlive: false,
    connectionTimeout: 30000,
    greetingTimeout: 15000,
    socketTimeout: 30000,
    family: 4,
    tls: { minVersion: "TLSv1.2", servername: host },
    logger: debug,
    debug,
  });
}

export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(request.headers.get("origin")),
  });
}

export async function GET(request) {
  return NextResponse.json(
    { ok: true, message: "Use POST /api/send-email" },
    { headers: corsHeaders(request.headers.get("origin")) }
  );
}

export async function POST(request) {
  const origin = request.headers.get("origin");
  try {
    const b = await parseBody(request);
    const {
      name,
      lastName,
      email,
      message,
      companyName,
      companyAddress,
      country,
    } = b || {};
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400, headers: corsHeaders(origin) }
      );
    }

    const TO = normalizeAddress(
      process.env.EMAIL_TO || "info@silverlinetradingcompany.com"
    );
    const FROM = normalizeAddress(
      process.env.EMAIL_FROM || process.env.EMAIL_USER || TO
    );
    const REPLY = normalizeAddress(email);

    if (!isValidEmail(TO) || !isValidEmail(FROM)) {
      return NextResponse.json(
        { error: "EMAIL_TO or EMAIL_FROM invalid" },
        { status: 500, headers: corsHeaders(origin) }
      );
    }

    const fullName = safeHeader(`${name}${lastName ? " " + lastName : ""}`);
    const subjCompany = safeHeader(companyName || "");
    const subject = `Web: ${fullName}${subjCompany ? " from " + subjCompany : ""}`;
    const textBody = `Name: ${fullName}
Email: ${REPLY}
Company: ${companyName || ""}
Address: ${companyAddress || ""}
Country: ${country || ""}
Message:
${message}
`;

    const transporter = createTransport();
    await transporter.verify();

    const info = await transporter.sendMail({
      from: { name: fullName, address: FROM }, // shows user name; address = your mailbox
      sender: FROM,
      to: TO,
      subject,
      text: textBody,
      ...(isValidEmail(REPLY)
        ? { replyTo: { address: REPLY, name: fullName } }
        : {}),
      headers: isValidEmail(REPLY) ? { "Reply-To": REPLY } : undefined,
      envelope: { from: FROM, to: [TO] },
    });

    const res = NextResponse.json(
      {
        message: "Email sent",
        transport: "SMTP",
        messageId: info?.messageId,
        response: info?.response,
        accepted: info?.accepted,
        rejected: info?.rejected,
      },
      { headers: corsHeaders(origin) }
    );
    return res;
  } catch (err) {
    return NextResponse.json(
      { error: "SMTP send failed", details: err?.message || String(err) },
      { status: 500, headers: corsHeaders(origin) }
    );
  }
}

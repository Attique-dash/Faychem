import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export const runtime = "nodejs";

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
  const allow = process.env.ALLOW_ORIGIN || origin || "*";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}
async function parseBody(request) {
  const ct = (request.headers.get("content-type") || "").toLowerCase();
  if (ct.includes("application/json")) return (await request.json()) || {};
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
    const body = await parseBody(request);
    const {
      name,
      lastName,
      email,
      message,
      companyName,
      companyAddress,
      country,
    } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400, headers: corsHeaders(origin) }
      );
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "SENDGRID_API_KEY is not configured" },
        { status: 500, headers: corsHeaders(origin) }
      );
    }
    sgMail.setApiKey(apiKey);

    const TO = normalizeAddress(
      process.env.EMAIL_TO || "info@silverlinetradingcompany.com"
    );
    const FROM = normalizeAddress(process.env.EMAIL_FROM || TO);
    const REPLY = normalizeAddress(email);

    if (!isValidEmail(TO) || !isValidEmail(FROM)) {
      return NextResponse.json(
        { error: "EMAIL_TO or EMAIL_FROM invalid" },
        { status: 500, headers: corsHeaders(origin) }
      );
    }

    const fullName = safeHeader(`${name}${lastName ? " " + lastName : ""}`);
    const subjCompany = safeHeader(companyName || "");
    const subject = `New Inquiry From ${fullName}`;
    const textBody = `NEW INQUIRY RECEIVED
    
Name: ${fullName}
Email: ${REPLY}
Company: ${companyName || ""}
Address: ${companyAddress || ""}
Country: ${country || ""}
Message: ${message}
`;

    const msg = {
      to: TO,
      from: { email: FROM, name: `${fullName}` }, // display shows "Name <email>" but address must be verified
      subject,
      text: textBody,

      ...(isValidEmail(REPLY)
        ? { replyTo: { email: REPLY, name: fullName } }
        : {}),
      mailSettings: {
        sandboxMode: { enable: toBool(process.env.SENDGRID_SANDBOX, false) },
      },
    };

    const [resp] = await sgMail.send(msg);

    return NextResponse.json(
      {
        message: "Email sent",
        transport: "SendGrid",
        statusCode: resp?.statusCode,
        messageId: resp?.headers?.["x-message-id"],
      },
      { headers: corsHeaders(origin) }
    );
  } catch (err) {
    console.error(
      "SendGrid Error:",
      err?.response?.body || err?.message || err
    );
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500, headers: corsHeaders(origin) }
    );
  }
}

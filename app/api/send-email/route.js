import { Red_Rose } from "next/font/google";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function toBool(v, def = false) {
  if (v === undefined || v === null) return def;
  return String(v).toLowerCase() === "true";
}

// Extract a plain email address from strings like "Name <email@domain>"
function normalizeAddress(v) {
  if (!v) return "";
  const s = String(v).trim();
  const m = s.match(/<([^>]+)>/);
  return (m ? m[1] : s).replace(/[ \t\r\n]+/g, "");
}

function isValidEmail(addr) {
  if (!addr) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(addr);
}

// Strip CRLF to avoid header injection
function safeHeader(v) {
  return String(v || "")
    .replace(/[\r\n]+/g, " ")
    .trim();
}

function createSmtpTransport() {
  const host = process.env.EMAIL_HOST || "smtp.hostinger.com";
  const port = Number(process.env.EMAIL_PORT || 587); // prefer 587 STARTTLS
  const secure = toBool(process.env.EMAIL_SECURE, port === 465); // true only for 465
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const debug = toBool(process.env.EMAIL_DEBUG, false);

  if (!user || !pass) throw new Error("Missing EMAIL_USER/EMAIL_PASS");

  return nodemailer.createTransport({
    host,
    port,
    secure, // 587 => false, 465 => true
    auth: { user, pass },
    pool: true,
    maxConnections: 1,
    maxMessages: 5,
    rateDelta: 15000,
    rateLimit: 5,
    connectionTimeout: 30000,
    greetingTimeout: 15000,
    socketTimeout: 30000,
    family: 4,
    tls: {
      minVersion: "TLSv1.2",
      servername: host,
    },
    logger: debug,
    debug,
  });
}

export async function POST(request) {
  try {
    const b = await request.json();
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
        { status: 400 }
      );
    }

    const rawTo = process.env.EMAIL_TO || "info@silverlinetradingcompany.com";
    const rawFrom = process.env.EMAIL_FROM || process.env.EMAIL_USER || rawTo;

    const TO = normalizeAddress(rawTo);
    const FROM = normalizeAddress(rawFrom);
    const REPLY = normalizeAddress(email);

    if (!isValidEmail(FROM)) {
      return NextResponse.json(
        { error: "EMAIL_FROM invalid", details: FROM },
        { status: 500 }
      );
    }
    if (!isValidEmail(TO)) {
      return NextResponse.json(
        { error: "EMAIL_TO invalid", details: TO },
        { status: 500 }
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
Message: ${message}
`;

    const transporter = createSmtpTransport();
    await transporter.verify();

    const mailOptions = {
      from: { name: fullName, address: REPLY },
      sender: FROM, // explicit Sender header
      to: TO,
      subject,
      text: textBody,
      // only set replyTo if valid
      ...(isValidEmail(REPLY)
        ? { replyTo: { address: REPLY, name: fullName } }
        : {}),
      // force SMTP envelope to match real addresses
      envelope: { from: FROM, to: [TO] },
    };

    const info = await transporter.sendMail(mailOptions);

    const accepted = Array.isArray(info?.accepted) ? info.accepted : [];
    const rejected = Array.isArray(info?.rejected) ? info.rejected : [];
    console.log("SMTP result:", {
      messageId: info?.messageId,
      response: info?.response,
      envelope: info?.envelope,
      accepted,
      rejected,
    });

    if (!accepted.includes(TO)) {
      return NextResponse.json(
        {
          error: "SMTP did not accept recipient",
          details: info?.response || "No server response",
          accepted,
          rejected,
          envelope: info?.envelope,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      message: "Email sent",
      transport: "SMTP (Hostinger)",
      messageId: info?.messageId,
      response: info?.response,
    });
  } catch (err) {
    console.error("SMTP send error:", err?.message || err);
    return NextResponse.json(
      { error: "SMTP send failed", details: err?.message || String(err) },
      { status: 500 }
    );
  }
}

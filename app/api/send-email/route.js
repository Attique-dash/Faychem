import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, companyName, companyAddress, country } =
      body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const TO = process.env.EMAIL_TO;
    const FROM = process.env.EMAIL_FROM || TO;

    if (!SENDGRID_API_KEY || !TO) {
      console.error("Missing SendGrid key or recipient in environment");
      return NextResponse.json(
        { error: "Email configuration error" },
        { status: 500 }
      );
    }

    const content = `Name: ${name}\nEmail: ${email}\nCompany: ${companyName || ""}\nAddress: ${companyAddress || ""}\nCountry: ${country || ""}\n\nMessage:\n${message}`;

    const payload = {
      personalizations: [
        { to: [{ email: TO }], subject: `Website contact from ${name}` },
      ],
      from: { email: FROM, name: "Website Contact" },
      reply_to: { email, name },
      content: [{ type: "text/plain", value: content }],
    };

    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("SendGrid error:", res.status, text);
      return NextResponse.json(
        { error: "SendGrid error", details: text },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("send-email error:", err);
    return NextResponse.json(
      { error: "Failed to send email", details: err?.message },
      { status: 500 }
    );
  }
}

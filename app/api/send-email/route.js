import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const raw = await request.text();
    let body;
    try {
      body = raw ? JSON.parse(raw) : null;
    } catch (err) {
      console.error("Invalid JSON body:", err, "raw:", raw);
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    console.log("send-email request body:", body);
    // add debug logs here
    console.log("EMAIL_USER set:", !!process.env.EMAIL_USER);
    console.log("EMAIL_TO:", process.env.EMAIL_TO);

    const { name, email, message, companyName, companyAddress, country } =
      body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email SMTP env vars EMAIL_USER/EMAIL_PASS");
      return NextResponse.json(
        { error: "Email configuration error" },
        { status: 500 }
      );
    }

    const recipient =
      process.env.EMAIL_TO || "info@silverlinetradingcompany.com";

    const transporter = process.env.EMAIL_HOST
      ? nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: Number(process.env.EMAIL_PORT || 587),
          secure: process.env.EMAIL_SECURE === "true",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        })
      : nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

    const emailContent = `
Name: ${name}
Email: ${email}
Company: ${companyName || "Not provided"}
Company Address: ${companyAddress || "Not provided"}
Country: ${country || "Not provided"}

Message:
${message}
    `;

    const mailOptions = {
      // from: process.env.EMAIL_USER,
      from: `${name} <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: recipient,
      subject: `Website contact from ${name}`,
      text: emailContent,
      html: `<pre style="white-space:pre-wrap">${emailContent}</pre>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info?.response || info);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error?.message },
      { status: 500 }
    );
  }
}

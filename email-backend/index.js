const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "Email server is running!" });
});

app.post("/send", (req, res) => {
  const { name, email, message, companyName, companyAddress, country } =
    req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Missing required fields: name, email, message" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: "umershafeeq053@gmail.com",
      pass: "uarf vlrl zmdj frqt",
    },
  });

  // Create a more detailed email content
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
    from: email,
    to: "umershafeeq053@gmail.com",
    subject: `Faychem Salt team ${name}`,
    text: emailContent,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email sending error:", error);
      return res.status(500).json({
        error: "Failed to send email",
        details: error.message,
      });
    }
    console.log("Email sent successfully:", info.response);
    res.status(200).json({
      message: "Email sent successfully",
      response: info.response,
    });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

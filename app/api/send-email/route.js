import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message, companyName, companyAddress, country } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      console.error('Missing email environment variables');
      return Response.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Create email content
    const emailContent = `
Name: ${name}
Email: ${email}
Company: ${companyName || 'Not provided'}
Company Address: ${companyAddress || 'Not provided'}
Country: ${country || 'Not provided'}

Message:
${message}
    `;

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO,
      subject: `Faychem Salt team ${name}`,
      text: emailContent,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.response);
    
    return Response.json({
      message: 'Email sent successfully',
      response: info.response
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return Response.json(
      { 
        error: 'Failed to send email',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

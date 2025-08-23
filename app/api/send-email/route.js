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

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER || 'umershafeeq053@gmail.com',
        pass: process.env.EMAIL_PASS || 'uarf vlrl zmdj frqt',
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
      to: process.env.EMAIL_TO || 'umershafeeq053@gmail.com',
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

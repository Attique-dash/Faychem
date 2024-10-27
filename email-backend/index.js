const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send', (req, res) => {
  const { name, email, message } = req.body;


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: 'umershafeeq053@gmail.com',
      pass: 'uarf vlrl zmdj frqt',
    },
  });

  const mailOptions = {
    from: email,
    to: 'umershafeeq053@gmail.com',
    subject: `Hello ${name}!`,
    text: `${message} from ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

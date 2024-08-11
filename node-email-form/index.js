const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const number = req.body.number;
  const message = req.body.message;

  const transporter = nodemailer.createTransport({
     host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'merkuri_metal_info@mail.ru',
        pass: 'MNHQrQnie0wMfk3fak0u'
    }
  });

  const mailOptions = {
    from: 'Mail from <merkuri_metal_info@mail.ru>',
    to: 'Vladislav290403@gmail.com', // Replace with recipient email address
    subject: 'New Contact Form Submission',
    text: `
      Клиент: ${name} Оставил заявку
      Номер телефона: ${number}
      Почта киента: ${email}
      Клиент оставил следующий коментарий: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
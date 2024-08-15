const dotenv = require('dotenv');
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());




app.post('/send-email', (req, res) => {
    const { fullname, email, phoneNumber, emailSubject, message } = req.body;
    console.log("Request body --> " + JSON.stringify(req.body));

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
        }
    });

    let mailOptions = {
        from: email,
        to: process.env.MAIL_TO,
        subject: emailSubject,
        text: `Name: ${fullname}\nEmail: ${email}\nMobile Number: ${phoneNumber}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({ success: false });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ success: true });
        }
    });
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

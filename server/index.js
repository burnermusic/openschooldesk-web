const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, institution, email, role, message, b_website } = req.body;

  // Honeypot check
  if (b_website) {
    console.warn('Spam detected via honeypot');
    return res.status(200).send('Success'); // Silent fail for bots
  }

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, E-Mail and Message are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Kontaktformular openschooldesk.org" <${process.env.SMTP_USER}>`,
      to: 'info@openschooldesk.org',
      replyTo: email,
      subject: 'Anfrage von Kontaktformular openschooldesk.org',
      text: `Anfrage Details:
----------------
Name: ${name}
Institution: ${institution || 'Nicht angegeben'}
E-Mail: ${email}
Rolle: ${role}

Nachricht:
${message}
`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Anfrage erfolgreich versendet' });
  } catch (error) {
    // Log error internally as requested
    const messagePreview = message.split('\n').slice(0, 5).join('\n');
    console.error('SMTP Error:', {
      user_email: email,
      message_preview: messagePreview,
      error: error.message
    });
    // Respond with 500 but frontend will handle it gracefully according to requirements
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

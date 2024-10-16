const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, send_from, reply_to) => {
  
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // your password or App Password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: send_from,
    to: send_to,  // Ensure this is valid
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  try {
    const info = await transporter.sendMail(options);
    console.log('Email sent: ', info.response);
  } catch (err) {
    console.log('Error sending email: ', err);
  }
};


const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    const send_to = process.env.EMAIL_USER;
    const send_from = email ;
    const reply_to = process.env.EMAIL_USER;
    const subject = "Regarding Mern Portfolio App";
    const message = `
      <h5>Detail Information</h5>
      <ul>
        <li><p>Name : ${name}</p></li>
        <li><p>Email : ${email}</p></li>
        <li><p>Message : ${msg}</p></li>
      </ul>
    `;

    await sendEmail(subject, message, send_to, send_from, reply_to);

    return res.status(200).send({
      success: true,
      message: "Your Message Sent Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };

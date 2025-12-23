import nodemailer from 'nodemailer';

export const sendResetEmail = async (email, link) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,          // ✅ IMPORTANT
    secure: false,      // TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: `"CodingClash" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Reset your CodingClash password',
    html: `
      <h2>Password Reset</h2>
      <p>You requested a password reset for CodingClash.</p>
      <p>
        <a href="${link}">Click here to reset your password</a>
      </p>
      <p>This link is valid for 15 minutes.</p>
    `
  });
};

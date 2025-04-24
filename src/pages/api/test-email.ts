import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Starting test email handler...");

  // Create test SMTP transporter
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: "benkirsh1@gmail.com",
      pass: process.env.SMTP_PASSWORD || "password_placeholder",
    },
  });

  // This is a security-sensitive API that should only be accessible in development mode
  if (process.env.NODE_ENV !== "development") {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    console.log("🔍 Testing transport connection...");
    
    // Verify the connection configuration
    await transport.verify();
    
    console.log("✅ SMTP connection verified, sending test email...");

    // Send test email
    const info = await transport.sendMail({
      from: '"AceHost Website Test" <benkirsh1@gmail.com>',
      to: "benkirsh1@gmail.com",
      subject: "Test Email from AceHost Website",
      text: "This is a test email sent from the AceHost website.",
      html: `
        <h1>Test Email</h1>
        <p>This is a test email sent from the AceHost website at ${new Date().toLocaleString()}</p>
        <p>If you received this, your email settings are working correctly.</p>
        <p>The following is your current email configuration:</p>
        <ul>
          <li>SMTP Host: smtp.gmail.com</li>
          <li>SMTP Port: 465</li>
          <li>Secure: true</li>
          <li>Username: benkirsh1@gmail.com</li>
        </ul>
      `,
    });

    console.log("✅ Test email sent:", info.messageId);
    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("❌ Test email failed:", error);
    return res.status(500).json({ success: false, error: error });
  }
} 
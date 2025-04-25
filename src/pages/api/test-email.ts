import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Testing email configuration...");

  try {
    // Create transport
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "benkirsh1@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Log configuration (without password)
    console.log("Email configuration:", {
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "benkirsh1@gmail.com",
        pass: "[MASKED]"
      }
    });

    // Verify connection
    console.log("Verifying connection...");
    await transport.verify();
    console.log("Connection verified successfully!");

    // Send test email
    console.log("Sending test email...");
    const info = await transport.sendMail({
      from: "benkirsh1@gmail.com",
      to: "benkirsh1@gmail.com",
      subject: "AceHost Website - Test Email",
      text: "This is a test email to verify the email configuration is working.",
      html: `
        <h2>AceHost Website - Test Email</h2>
        <p>This is a test email sent at ${new Date().toLocaleString()}</p>
        <p>If you received this email, the email configuration is working correctly.</p>
      `
    });

    console.log("Test email sent successfully:", info.messageId);

    return res.status(200).json({
      success: true,
      messageId: info.messageId,
      message: "Test email sent successfully"
    });

  } catch (error: any) {
    console.error("Email test failed:", error);
    return res.status(500).json({
      success: false,
      error: {
        message: error.message,
        code: error.code,
        response: error.response
      }
    });
  }
} 
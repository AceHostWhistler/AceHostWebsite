import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Starting test email handler...");
  
  try {
    // Create test transport
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'benkirsh1@gmail.com',
        pass: 'maqc bzts clrx qkul', // Updated app password
      }
    });

    console.log("🔍 Testing transport connection...");
    
    // Verify connection
    await transport.verify();
    console.log("✅ Connection verified!");
    
    // Send test email
    const info = await transport.sendMail({
      from: '"AceHost Test" <benkirsh1@gmail.com>',
      to: "benkirsh1@gmail.com",
      subject: "Test Email from AceHost Website",
      text: "This is a test email to verify that the email sending functionality is working.",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #eee;">
          <h1 style="color: #333;">Test Email</h1>
          <p>This is a test email to verify that the email sending functionality is working.</p>
          <p>Time sent: ${new Date().toISOString()}</p>
          <p style="margin-top: 30px; font-size: 12px; color: #777;">
            This is an automated test email from the AceHost website.
          </p>
        </div>
      `,
    });

    console.log("✅ Test email sent successfully:", info.messageId);
    
    res.status(200).json({ 
      success: true, 
      message: "Test email sent successfully!",
      details: {
        messageId: info.messageId,
        recipient: "benkirsh1@gmail.com",
        timestamp: new Date().toISOString()
      }
    });
  } catch (error: any) {
    console.error("❌ Test email failed:", error);
    res.status(500).json({ 
      success: false, 
      error: error.message || "Unknown error",
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined
    });
  }
} 
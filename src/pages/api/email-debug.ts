import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import fs from 'fs';
import path from 'path';

interface DebugInfo {
  timestamp: string;
  environment: {
    NODE_ENV: string | undefined;
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_SECURE: string;
    SMTP_USER: string;
    SMTP_PASSWORD: string;
    SENDGRID_API_KEY: string;
  };
  headers: NodeJS.Dict<string | string[]>;
  smtpVerification?: string;
  smtpVerificationError?: {
    message: string;
    code: string;
    response: string;
    responseCode: number;
  };
  testEmailResult?: {
    success: boolean;
    messageId?: string;
    error?: any;
  };
  passwordCheck?: {
    isDefined: boolean;
    length?: number;
    containsSpaces?: boolean;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Starting email debugging helper...");
  
  // Check password
  const password = process.env.SMTP_PASSWORD || "";
  const passwordCheck = {
    isDefined: !!process.env.SMTP_PASSWORD,
    length: password.length,
    containsSpaces: password.includes(" ")
  };
  
  console.log("Password check:", {
    isDefined: passwordCheck.isDefined,
    length: passwordCheck.length,
    containsSpaces: passwordCheck.containsSpaces
  });
  
  // Email configuration
  const smtpConfig = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "benkirsh1@gmail.com",
      pass: password
    },
    tls: {
      rejectUnauthorized: true
    }
  };

  // Create debug report
  const debugInfo: DebugInfo = {
    timestamp: new Date().toISOString(),
    environment: {
      NODE_ENV: process.env.NODE_ENV,
      SMTP_HOST: process.env.SMTP_HOST || "Not set",
      SMTP_PORT: process.env.SMTP_PORT || "Not set",
      SMTP_SECURE: process.env.SMTP_SECURE || "Not set",
      SMTP_USER: process.env.SMTP_USER || "Not set",
      SMTP_PASSWORD: process.env.SMTP_PASSWORD ? "Set (masked)" : "Not set",
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY ? "Set (masked)" : "Not set",
    },
    headers: req.headers,
    passwordCheck
  };

  console.log("Email debug info:", JSON.stringify(debugInfo, null, 2));

  try {
    // Save debug info to file
    const dir = path.join(process.cwd(), 'email-debug');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const filename = path.join(dir, `debug-${Date.now()}.json`);
    fs.writeFileSync(filename, JSON.stringify(debugInfo, null, 2));
    
    // Test SMTP connection
    console.log("Testing SMTP connection...");
    const transporter = nodemailer.createTransport(smtpConfig);
    
    try {
      console.log("Verifying connection...");
      await transporter.verify();
      console.log("SMTP connection verified successfully!");
      debugInfo.smtpVerification = "Success";

      // Try sending a test email
      console.log("Sending test email...");
      const info = await transporter.sendMail({
        from: `"AceHost Website Test" <benkirsh1@gmail.com>`,
        to: "benkirsh1@gmail.com",
        subject: "AceHost Website - Email Test",
        text: "This is a test email to verify the email sending functionality is working.",
        html: `
          <h2>AceHost Website - Email Test</h2>
          <p>This is a test email sent at ${new Date().toLocaleString()}</p>
          <p>If you received this email, the email sending functionality is working correctly.</p>
        `
      });

      console.log("Test email sent successfully:", info.messageId);
      debugInfo.testEmailResult = {
        success: true,
        messageId: info.messageId
      };

    } catch (verifyError: any) {
      console.error("SMTP verification failed:", verifyError);
      debugInfo.smtpVerification = "Failed";
      debugInfo.smtpVerificationError = {
        message: verifyError.message,
        code: verifyError.code,
        response: verifyError.response,
        responseCode: verifyError.responseCode
      };
      debugInfo.testEmailResult = {
        success: false,
        error: verifyError
      };
    }
    
    // Update debug file with verification results
    fs.writeFileSync(filename, JSON.stringify(debugInfo, null, 2));
    
    return res.status(200).json({
      message: "Email debug completed",
      debugFile: filename,
      smtpVerification: debugInfo.smtpVerification,
      testEmailResult: debugInfo.testEmailResult,
      passwordCheck
    });
  } catch (error: any) {
    console.error("Email debug error:", error);
    return res.status(500).json({
      error: "Email debug failed",
      message: error.message,
      details: error,
      passwordCheck
    });
  }
} 
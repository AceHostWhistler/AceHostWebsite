import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import smtpTransport from 'nodemailer-smtp-transport';
import fs from 'fs';
import path from 'path';

// For debugging
const DEBUG_MODE = true;

// Add a function to save form submissions to file if email fails
const saveSubmissionToFile = async (data: any) => {
  try {
    // Create a submissions directory if it doesn't exist
    const dir = path.join(process.cwd(), 'contact-submissions');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Create a unique filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = path.join(dir, `submission-${timestamp}.json`);
    
    // Write the submission data to file
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    console.log(`Saved submission to ${filename}`);
    return true;
  } catch (error) {
    console.error("Failed to save submission to file:", error);
    return false;
  }
};

// Function to create a nodemailer transport using environment variables
const createTransport = () => {
  // Log all environment variables for debugging
  if (DEBUG_MODE) {
    console.log("Environment Variables Available:");
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("SMTP_PASSWORD:", process.env.SMTP_PASSWORD ? "Set (length: " + process.env.SMTP_PASSWORD.length + ")" : "Not Set");
    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_PORT:", process.env.SMTP_PORT);
    console.log("SMTP_SECURE:", process.env.SMTP_SECURE);
    console.log("NODE_ENV:", process.env.NODE_ENV);
  }

  // Use explicit Gmail SMTP configuration rather than just 'service: gmail'
  const smtpConfig = {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465,
    secure: process.env.SMTP_SECURE === 'true', // Use SSL
    auth: {
      user: process.env.SMTP_USER || 'benkirsh1@gmail.com',
      pass: process.env.SMTP_PASSWORD || '',
    },
    debug: true, // Enable debug output
    logger: true // Log information to console
  };

  const emailUser = smtpConfig.auth.user;
  const emailPass = smtpConfig.auth.pass;
  
  // Use ben@acehost.ca as the recipient
  const recipientEmail = "ben@acehost.ca";

  if (DEBUG_MODE) {
    console.log("SMTP Configuration:", {
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      user: emailUser,
      pass: emailPass ? "PASSWORD SET (length: " + emailPass.length + ")" : "NOT SET",
      recipient: recipientEmail,
    });
  }

  if (!emailPass) {
    console.error("SMTP_PASSWORD not set in environment variables");
    return null;
  }
  
  try {
    // Create transport with detailed options
    const transport = nodemailer.createTransport(smtpTransport(smtpConfig));
    return {
      transport,
      recipient: recipientEmail,
    };
  } catch (err) {
    console.error("Failed to create transport:", err);
    return null;
  }
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<{ message: string } | { error: string, details?: string }>
) {
  // First, save all form submissions to disk regardless of what happens
  const submissionTimestamp = new Date().toISOString();
  
  if (request.method === "POST") {
    try {
      // Extract form data
      const formData = request.body;
      const {
        name = '',
        email = '',
        phone = '',
        message = '',
        inquiryType = "Website Inquiry",
        dates,
        propertyInterest,
        guests,
      } = formData;

      // Always log the raw request for debugging
      if (DEBUG_MODE) {
        console.log("Request headers:", request.headers);
        console.log("Raw form data:", formData);
      }

      // Validate required fields
      if (!name || !email || !phone || !message) {
        return response.status(400).json({
          error: "Missing required fields",
          details: `Required: name, email, phone, message. Missing: ${!name ? 'name ' : ''}${!email ? 'email ' : ''}${!phone ? 'phone ' : ''}${!message ? 'message' : ''}`
        });
      }

      // Create a data object with all submission information
      const submissionData = {
        name,
        email,
        phone,
        message,
        inquiryType,
        dates,
        propertyInterest,
        guests,
        submittedAt: submissionTimestamp,
      };

      // First, always save to file as backup
      const savedToFile = await saveSubmissionToFile(submissionData);
      if (!savedToFile) {
        console.warn("Failed to save submission to file");
      }
      
      console.log("Form submission received and saved to file:", JSON.stringify(submissionData, null, 2));

      // Try to set up email transport
      const transportInfo = createTransport();
      
      if (!transportInfo) {
        console.log("No email transport available, submission is saved to file only");
        return response.status(200).json({ 
          message: "Your inquiry has been recorded. Our team will review it shortly."
        });
      }
      
      const { transport, recipient } = transportInfo;
      
      // Verify SMTP connection before attempting to send
      try {
        await transport.verify();
        console.log("SMTP connection verified successfully");
      } catch (verifyError: any) {
        console.error("SMTP connection failed:", verifyError);
        console.error("Error details:", verifyError.message);
        console.error("Error code:", verifyError.code);
        console.error("Error command:", verifyError.command);
        
        // Try to save to file as backup
        savedToFile || await saveSubmissionToFile(submissionData);
        
        return response.status(200).json({ 
          message: "Your message has been recorded. We will contact you soon." 
        });
      }
      
      // Configure email
      const mailOptions = {
        from: `"AceHost Website" <${process.env.SMTP_USER || 'benkirsh1@gmail.com'}>`,
        to: recipient,
        subject: `[AceHost Contact] New ${inquiryType} Inquiry from ${name}`,
        html: generateEmail(submissionData),
        replyTo: email,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInquiry: ${inquiryType}\nMessage: ${message}`,
      };

      console.log("Preparing to send email with options:", {
        from: mailOptions.from,
        to: mailOptions.to,
        subject: mailOptions.subject,
        replyTo: mailOptions.replyTo,
      });

      // Send email
      try {
        const info = await transport.sendMail(mailOptions);
        console.log("Email sent successfully:", info.messageId, info.response);
        
        // Return success response
        return response.status(200).json({ 
          message: "Your message has been sent successfully. We'll be in touch soon!" 
        });
      } catch (emailError: any) {
        console.error("Error sending email:", emailError);
        console.error("Error details:", emailError.message);
        console.error("Error code:", emailError.code);
        console.error("Error command:", emailError.command);
        
        // Return success anyway since we saved the submission
        return response.status(200).json({ 
          message: "Your inquiry has been recorded. Our team will review it shortly."
        });
      }
    } catch (error: any) {
      // Log detailed error information
      console.error("Error processing contact form:", error);
      
      // Return error response with details if available
      return response.status(500).json({
        error: "We couldn't process your request at this time",
        details: error.message || "Unknown error occurred"
      });
    }
  } else {
    return response.status(405).json({ error: "Method not allowed" });
  }
}

// Configure API to accept larger request bodies
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

// Function to generate HTML email content
function generateEmail({
  name,
  email,
  phone,
  message,
  inquiryType,
  dates,
  propertyInterest,
  guests,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
  inquiryType: string;
  dates?: string;
  propertyInterest?: string;
  guests?: string;
}) {
  return `
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AceHost Whistler - New Inquiry</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    margin: 0;
                    padding: 0;
                }

                .email-wrapper {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    border: 1px solid #ddd;
                }

                .header {
                    background-color: #000000;
                    padding: 20px;
                    text-align: center;
                }

                .content {
                    padding: 20px;
                }

                .info-section {
                    margin-bottom: 20px;
                    border-left: 4px solid #000;
                    padding-left: 15px;
                }

                .message-content {
                    background-color: #f7f7f7;
                    padding: 15px;
                    border-radius: 5px;
                    margin-top: 10px;
                }

                h1 {
                    margin-top: 0;
                    font-size: 22px;
                    color: #000;
                }

                h2 {
                    font-size: 18px;
                    margin-bottom: 10px;
                    color: #000;
                }

                .footer {
                    text-align: center;
                    padding: 15px;
                    font-size: 12px;
                    background-color: #f7f7f7;
                    color: #666;
                }

                .button {
                    display: inline-block;
                    background-color: #000;
                    color: white;
                    padding: 10px 20px;
                    text-decoration: none;
                    border-radius: 4px;
                    font-weight: bold;
                }

                a {
                    color: #0066cc;
                }
            </style>
        </head>
        <body>
            <div class="email-wrapper">
                <div class="header">
                    <h1 style="color: #ffffff; margin: 0;">AceHost Whistler Inquiry</h1>
                </div>
                
                <div class="content">
                    <h1>New ${inquiryType} Inquiry</h1>
                    <p>You have received a new inquiry from the AceHost website contact form.</p>
                    
                    <div class="info-section">
                        <h2>Contact Information</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
                        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
                    </div>
                    
                    ${propertyInterest ? `
                    <div class="info-section">
                        <h2>Property Interest</h2>
                        <p>${propertyInterest}</p>
                    </div>
                    ` : ''}
                    
                    ${dates || guests ? `
                    <div class="info-section">
                        <h2>Travel Details</h2>
                        ${dates ? `<p><strong>Dates:</strong> ${dates}</p>` : ''}
                        ${guests ? `<p><strong>Guests:</strong> ${guests}</p>` : ''}
                    </div>
                    ` : ''}
                    
                    <div class="info-section">
                        <h2>Message</h2>
                        <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
                    </div>
                    
                    <div style="margin-top: 30px; text-align: center;">
                        <a href="mailto:${email}?subject=RE: Your AceHost Inquiry" style="background-color: #000; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">Reply to ${name}</a>
                    </div>
                </div>
                
                <div class="footer">
                    <p>This email was sent from the AceHost Whistler website contact form.</p>
                    <p>&copy; ${new Date().getFullYear()} AceHost Whistler. All rights reserved.</p>
                </div>
            </div>
        </body>
    </html>
  `;
} 
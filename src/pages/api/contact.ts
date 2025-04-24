import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

// For debugging
const DEBUG_MODE = true;

// Initialize Resend - using a test API key that will work for development
const resend = new Resend('re_123456789'); // Replace with your Resend API key in production

// Define recipients - ensure benkirsh1@gmail.com is included
const PRIMARY_RECIPIENTS = ["ben@acehost.ca", "benkirsh1@gmail.com"];

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

// Function to send email via Resend
const sendWithResend = async (data: any) => {
  try {
    const {
      name,
      email,
      phone,
      message,
      inquiryType = "Website Inquiry",
      dates,
      propertyInterest,
      guests,
    } = data;

    console.log("🚀 Preparing to send email with Resend:", {
      to: PRIMARY_RECIPIENTS,
      from: 'AceHost Website <contact@acehost.ca>',
      subject: `[AceHost Contact] New ${inquiryType} Inquiry from ${name}`,
    });

    const emailHtml = generateEmail(data);

    // In development, just log the email content
    if (process.env.NODE_ENV === 'development') {
      console.log("📧 Email HTML content (development mode):", emailHtml.substring(0, 300) + "...");
      return true;
    }

    // Send with Resend in production
    const { data: resendData, error } = await resend.emails.send({
      from: 'AceHost Website <contact@acehost.ca>',
      to: PRIMARY_RECIPIENTS,
      subject: `[AceHost Contact] New ${inquiryType} Inquiry from ${name}`,
      html: emailHtml,
      replyTo: email,
    });

    if (error) {
      console.error("❌ Resend email sending failed:", error);
      return false;
    }

    console.log("✅ Email sent successfully via Resend:", resendData?.id);
    return true;
  } catch (error: any) {
    console.error("❌ Resend email sending failed:", error.message);
    return false;
  }
};

// Function to send directly using fetch to an SMTP API service
const sendWithEmailApi = async (data: any) => {
  try {
    const {
      name,
      email,
      phone,
      message,
      inquiryType = "Website Inquiry",
      dates,
      propertyInterest,
      guests,
    } = data;

    // Always save submissions in a special folder in the project
    await saveSubmissionToFile(data);

    // Formspree is a simple API that forwards emails
    const formspreeEndpoint = 'https://formspree.io/f/benkirsh1@gmail.com';
    
    console.log("🚀 Sending form data to email API");
    
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        inquiryType,
        dates: dates || 'Not specified',
        propertyInterest: propertyInterest || 'Not specified',
        guests: guests || 'Not specified',
        _subject: `[AceHost Contact] New ${inquiryType} Inquiry from ${name}`,
      })
    });

    if (response.ok) {
      console.log("✅ Email API submission successful");
      return true;
    } else {
      console.error("❌ Email API error:", await response.text());
      return false;
    }
  } catch (error) {
    console.error("❌ Email API sending failed:", error);
    return false;
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
      } else {
        console.log("✅ Form submission saved to file successfully as backup");
      }
      
      console.log("📧 Form submission received:", JSON.stringify(submissionData, null, 2));

      // ----------------------------------------------------------------
      // Send a copy to each developer manually 
      // ----------------------------------------------------------------
      
      // Log the message so they can be retrieved from server logs
      console.log(`⚠️ IMPORTANT - NEW CONTACT FORM SUBMISSION ⚠️`);
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone}`);
      console.log(`Property Interest: ${propertyInterest || 'Not specified'}`);
      console.log(`Dates: ${dates || 'Not specified'}`);
      console.log(`Guests: ${guests || 'Not specified'}`);
      console.log(`Message: ${message}`);
      
      // Try to send email using Resend
      let isEmailSent = false;
      try {
        isEmailSent = await sendWithResend(submissionData);
      } catch (resendError) {
        console.error("Error with Resend attempt:", resendError);
      }
      
      // Try Email API as fallback if Resend fails
      if (!isEmailSent) {
        try {
          console.log("⚠️ Resend failed, trying Email API...");
          isEmailSent = await sendWithEmailApi(submissionData);
        } catch (apiError) {
          console.error("Error with Email API attempt:", apiError);
        }
      }
      
      // Return success response - even if email failed, we saved the data
      return response.status(200).json({ 
        message: isEmailSent 
          ? "Your message has been sent successfully. We'll be in touch soon!" 
          : "Your inquiry has been recorded. Our team will review it shortly."
      });
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
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import fs from 'fs';
import path from 'path';

// Create transporter using environment variables
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER || "benkirsh1@gmail.com",
    pass: process.env.SMTP_PASSWORD,
  },
});

// Add a function to save form submissions to file for backup
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

// Create HTML email content
const createHtmlMessage = (data: any) => {
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

  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #3366cc; color: white; padding: 10px 20px; }
    .content { padding: 20px; border: 1px solid #ddd; }
    .footer { font-size: 12px; color: #666; padding-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Form Submission</h2>
    </div>
    <div class="content">
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
      ${propertyInterest ? `<p><strong>Property Interest:</strong> ${propertyInterest}</p>` : ''}
      ${dates ? `<p><strong>Dates:</strong> ${dates}</p>` : ''}
      ${guests ? `<p><strong>Guests:</strong> ${guests}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    </div>
    <div class="footer">
      <p>This email was sent from the AceHost Website contact form.</p>
    </div>
  </div>
</body>
</html>  
  `;
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<{ message: string } | { error: string, details?: string }>
) {
  console.log("Contact form API handler started");
  
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

      console.log("Request body:", request.body);

      // Validate required fields
      if (!name || !email || !phone || !message) {
        return response.status(400).json({
          error: "Missing required fields",
          details: `Required: name, email, phone, message.`
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
        submittedAt: new Date().toISOString(),
      };

      // Save to file as backup (this always works)
      await saveSubmissionToFile(submissionData);
      
      // Create HTML content
      const htmlMessage = createHtmlMessage(submissionData);

      // Get the recipient email from env var or use default
      const to = process.env.SMTP_USER || "benkirsh1@gmail.com";
        
      // Set email options
      const mailOptions = {
        from: process.env.SMTP_FROM || "benkirsh1@gmail.com",
        to,
        replyTo: email,
        subject: `${inquiryType} from ${name}`,
        html: htmlMessage
      };

      // Log attempt
      console.log("Attempting to send email to:", mailOptions.to);

      // Send email
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
        
      // Return success
        return response.status(200).json({ 
        message: "Your message has been received. Our team will be in touch soon!"
        });
    } catch (error: any) {
      // Log detailed error information
      console.error("Error processing contact form:", error);
      
      // Return error response with details
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
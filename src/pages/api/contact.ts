import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import path from 'path';
import nodemailer from "nodemailer";

// For debugging
const DEBUG_MODE = true;

// Define recipients - ensure benkirsh1@gmail.com is primary
const PRIMARY_RECIPIENTS = ["benkirsh1@gmail.com"];

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

// Create a plain text version of the message for logging
const createPlainTextMessage = (data: any) => {
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
=============================================
NEW CONTACT FORM SUBMISSION
=============================================
Time: ${new Date().toISOString()}
Name: ${name}
Email: ${email}
Phone: ${phone}
Inquiry Type: ${inquiryType}
${propertyInterest ? `Property Interest: ${propertyInterest}\n` : ''}
${dates ? `Dates: ${dates}\n` : ''}
${guests ? `Guests: ${guests}\n` : ''}

MESSAGE:
${message}
=============================================
`;
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<{ message: string } | { error: string, details?: string }>
) {
  console.log("Contact form API handler started");
  
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

      // Log for debugging
      if (DEBUG_MODE) {
        console.log("Request body:", request.body);
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
      await saveSubmissionToFile(submissionData);
      
      // Create and log a plain text version of the message
      const plainTextMessage = createPlainTextMessage(submissionData);
      console.log(plainTextMessage);
      
      // Return success
      return response.status(200).json({ 
        message: "Your message has been received. Our team will be in touch soon!"
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
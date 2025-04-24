import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Running test email handler...");
  
  // Test data
  const testData = {
    name: "Test User",
    email: "benkirsh1@gmail.com",
    phone: "555-123-4567",
    message: "This is a test message from the contact form.",
    inquiryType: "Test Inquiry",
    submittedAt: new Date().toISOString()
  };

  try {
    // Save to file for testing
    const dir = path.join(process.cwd(), 'contact-submissions');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Create a unique filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = path.join(dir, `test-submission-${timestamp}.json`);
    
    // Write the submission data to file
    fs.writeFileSync(filename, JSON.stringify(testData, null, 2));
    
    // Log test message in a format that's easy to find
    console.log(`
=============================================
TEST CONTACT FORM SUBMISSION
=============================================
Time: ${new Date().toISOString()}
Name: ${testData.name}
Email: ${testData.email}
Phone: ${testData.phone}
Inquiry Type: ${testData.inquiryType}

MESSAGE:
${testData.message}
=============================================
`);

    return res.status(200).json({ 
      success: true, 
      message: "Test successful! Check server logs and contact-submissions folder." 
    });
  } catch (error) {
    console.error("Test failed:", error);
    return res.status(500).json({ success: false, error: error });
  }
} 
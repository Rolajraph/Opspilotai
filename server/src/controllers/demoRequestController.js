import DemoRequest from "../models/DemoRequest.js";
import { sendDemoConfirmationEmail, sendAdminNotificationEmail } from "../config/email.js";

export async function createDemoRequest(req, res) {
  try {
    const { name, phone, email, companyName, companySize, primaryFocus } =
      req.body;

    if (!name || !phone || !email || !companyName) {
      return res.status(400).json({
        message: "Name, phone, email, and company name are required.",
      });
    }

    const demoRequest = await DemoRequest.create({
      name,
      phone,
      email,
      companyName,
      companySize,
      primaryFocus,
    });

    try {
      await sendDemoConfirmationEmail(demoRequest);
      await sendAdminNotificationEmail(demoRequest);
    } catch (emailError) {
      console.error("Email sending failed:", emailError.message);
      // Don't fail the whole request just because email failed —
      // the lead is already saved in the database.
    }

    res.status(201).json({
      message: "Demo request received successfully.",
      demoRequest,
    });
  } catch (error) {
    console.error("Error creating demo request:", error.message);
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
}
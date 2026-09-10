import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendDemoConfirmationEmail(demoRequest) {
  await resend.emails.send({
    from: "OpsPilot AI <onboarding@resend.dev>",
    to: demoRequest.email,
    subject: "We've received your demo request",
    html: `
      <p>Hi ${demoRequest.name},</p>
      <p>Thanks for requesting a personalized demo of OpsPilot AI. Our team has received your request and will reach out to you shortly to schedule your 30-minute walkthrough.</p>
      <p><strong>What you shared with us:</strong></p>
      <ul>
        <li>Company: ${demoRequest.companyName}</li>
        <li>Company Size: ${demoRequest.companySize}</li>
        <li>Primary Focus: ${demoRequest.primaryFocus}</li>
      </ul>
      <p>Talk soon,<br/>The OpsPilot AI Team</p>
    `,
  });
}

export async function sendAdminNotificationEmail(demoRequest) {
  await resend.emails.send({
    from: "OpsPilot AI <onboarding@resend.dev>",
    to: process.env.ADMIN_EMAIL,
    subject: `New Demo Request: ${demoRequest.companyName}`,
    html: `
      <p>New demo request received:</p>
      <ul>
        <li>Name: ${demoRequest.name}</li>
        <li>Email: ${demoRequest.email}</li>
        <li>Phone: ${demoRequest.phone}</li>
        <li>Company: ${demoRequest.companyName}</li>
        <li>Company Size: ${demoRequest.companySize}</li>
        <li>Primary Focus: ${demoRequest.primaryFocus}</li>
      </ul>
    `,
  });
}
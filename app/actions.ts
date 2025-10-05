"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: { name: string; email: string; message: string }) {
  try {
    const { name, email, message } = formData

    // Validate input
    if (!name || !email || !message) {
      return { success: false, error: "Missing required fields" }
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // This is Resend's test email
      to: "goelr668@gmail.com", // Your email where you want to receive messages
      replyTo: email, // Reply to the person who submitted the form
      subject: `New contact form submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4a9d9c; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="color: #555; margin: 5px 0;">
              <strong style="color: #333;">From:</strong> ${name}
            </p>
            <p style="color: #555; margin: 5px 0;">
              <strong style="color: #333;">Email:</strong> ${email}
            </p>
          </div>
          
          <div style="margin: 20px 0;">
            <p style="color: #333; margin-bottom: 10px;">
              <strong>Message:</strong>
            </p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 4px solid #4a9d9c;">
              <p style="color: #333; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;" />
          
          <p style="color: #999; font-size: 12px; text-align: center;">
            This email was sent from your portfolio contact form
          </p>
        </div>
      `,
    })

    return { success: true, data }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Failed to send email" }
  }
}


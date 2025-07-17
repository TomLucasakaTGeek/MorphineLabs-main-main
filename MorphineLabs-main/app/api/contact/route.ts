import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = 'force-dynamic'; // Important for handling request.json()

export async function POST(req: Request) {
  try {
    // Parse JSON data
    const formData = await req.json();
    console.log("Form data received:", formData);
    
    const {
      first_name,
      last_name,
      email,
      company_name,
      info,
    } = formData;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER || "morphinelabsweb3@gmail.com",
        pass: process.env.EMAIL_PASS || "dfps oenc yogm uxix",
      },
    });

    // Setup email data
    const mailOptions = {
      from: process.env.EMAIL_USER || "morphinelabsweb3@gmail.com",
      to: process.env.EMAIL_USER || "morphinelabsweb3@gmail.com",
      replyTo: email,
      subject: "Contact Form Submission from " + first_name + " " + last_name,
      html: `
        <h1>Contact Form</h1>
        <p>First Name: ${first_name}</p>
        <p>Last Name: ${last_name}</p>
        <p>Work Email: ${email}</p>
        <p>Company Name: ${company_name || 'Not provided'}</p>
        <p>Info: ${info || 'Not provided'}</p>
      `,
    };

    // Send email
    const emailInfo = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", emailInfo.messageId);

    // Return success response
    return new NextResponse(
      JSON.stringify({ 
        message: "Email has been sent successfully", 
        success: true 
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  } catch (error) {
    console.error("Error in API route:", error);
    
    // Return error response
    return new NextResponse(
      JSON.stringify({ 
        message: "Failed to send email", 
        error: error instanceof Error ? error.message : String(error),
        success: false 
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}

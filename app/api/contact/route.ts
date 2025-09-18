import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// TODO: Remove logs after the from and to fields are updated – Dillon.
export async function POST(request: Request) {
  console.log("Contact API route called");

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { message: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const { name, email, subject, message } = await request.json();
    console.log("Form data received:", { name, email, subject });

    console.log("Sending email via Resend...");
    console.log(
      "Using API key:",
      process.env.RESEND_API_KEY ? "API key exists" : "API key missing"
    );

    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "me@dilloncleaver.com",
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    });

    console.log("Resend API response:", result);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

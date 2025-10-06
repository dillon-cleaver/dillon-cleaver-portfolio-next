import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { message: 'Server configuration error' },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, subject, message } = await request.json();

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'me@dilloncleaver.com',
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

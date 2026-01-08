import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, vehicle, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !vehicle || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Email content
    const emailContent = {
      to: 'service@germanwerks.in',
      subject: `New Service Request from ${name}`,
      html: `
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1f2937; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f9fafb; padding: 20px; margin-top: 20px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #1f2937; }
              .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #1f2937; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>German Werks</h1>
                <h2>New Service Request</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Customer Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                <div class="field">
                  <div class="label">Vehicle Details:</div>
                  <div class="value">${vehicle}</div>
                </div>
                <div class="field">
                  <div class="label">Service Required:</div>
                  <div class="value">${service}</div>
                </div>
                ${message ? `
                <div class="field">
                  <div class="label">Additional Details:</div>
                  <div class="value">${message}</div>
                </div>
                ` : ''}
              </div>
              <div style="margin-top: 20px; padding: 15px; background-color: #e5e7eb; text-align: center; font-size: 12px; color: #6b7280;">
                <p>This email was sent from the German Werks contact form.</p>
                <p>Please respond to the customer at: ${email}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Service Request from German Werks Website

Customer Name: ${name}
Email: ${email}
Phone: ${phone}
Vehicle Details: ${vehicle}
Service Required: ${service}
${message ? `Additional Details: ${message}` : ''}

Please respond to the customer at: ${email}
      `,
    };

    // Configure Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    const info = await transporter.sendMail({
      from: `"German Werks Contact Form" <${process.env.SMTP_USER}>`,
      to: 'service@germanwerks.in',
      replyTo: email, // Customer's email for easy reply
      subject: emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
    });

    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your service request has been submitted successfully. We will contact you within 24 hours.',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}

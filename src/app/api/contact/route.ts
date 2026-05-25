import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, project_type, budget, message } = body;

    if (!name || !email || !project_type || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ── Email to YOU (owner notification) ──────────────────
    await transporter.sendMail({
      from: `"NeonX Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `🔮 New Project Inquiry — ${project_type} from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="UTF-8"/></head>
        <body style="margin:0;padding:0;background:#040408;font-family:'Segoe UI',sans-serif;">
          <div style="max-width:600px;margin:0 auto;padding:40px 20px;">

            <!-- Header -->
            <div style="background:linear-gradient(135deg,#7c3aed,#9333ea);border-radius:16px 16px 0 0;padding:32px 36px;text-align:center;">
              <div style="display:inline-block;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);border-radius:12px;padding:10px 20px;margin-bottom:12px;">
                <span style="color:#fff;font-size:20px;font-weight:800;letter-spacing:3px;">NX</span>
              </div>
              <h1 style="color:#fff;margin:0;font-size:24px;font-weight:700;letter-spacing:1px;">New Project Inquiry</h1>
              <p style="color:rgba(255,255,255,0.7);margin:8px 0 0;font-size:14px;">Someone wants to work with you!</p>
            </div>

            <!-- Body -->
            <div style="background:#0d0d1a;border:1px solid rgba(139,92,246,0.2);border-top:none;border-radius:0 0 16px 16px;padding:36px;">

              <!-- Fields -->
              ${[
                ['👤 Name',         name],
                ['📧 Email',        email],
                ['🎨 Project Type', project_type],
                ['💰 Budget',       budget || 'Not specified'],
              ].map(([label, value]) => `
                <div style="margin-bottom:18px;">
                  <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:2px;color:rgba(167,139,250,0.7);">${label}</p>
                  <p style="margin:0;font-size:15px;color:#f0e6ff;background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:12px 16px;">${value}</p>
                </div>
              `).join('')}

              <!-- Message -->
              <div style="margin-bottom:24px;">
                <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:2px;color:rgba(167,139,250,0.7);">💬 Message</p>
                <p style="margin:0;font-size:15px;color:#f0e6ff;background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.15);border-radius:8px;padding:16px;line-height:1.6;white-space:pre-wrap;">${message}</p>
              </div>

              <!-- Reply CTA -->
              <div style="text-align:center;padding-top:8px;">
                <a href="mailto:${email}?subject=Re: Your NeonX Inquiry"
                  style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#9333ea);color:#fff;text-decoration:none;padding:14px 36px;border-radius:8px;font-size:14px;font-weight:600;letter-spacing:1px;">
                  Reply to ${name}
                </a>
              </div>

            </div>

            <!-- Footer -->
            <p style="text-align:center;color:rgba(240,230,255,0.2);font-size:12px;margin-top:24px;">
              NeonX Studio · This email was sent via your contact form
            </p>
          </div>
        </body>
        </html>
      `,
    });

    // ── Auto-reply to the sender ────────────────────────────
    await transporter.sendMail({
      from: `"NeonX Studio" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We received your inquiry, ${name.split(' ')[0]}! 🔮`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="UTF-8"/></head>
        <body style="margin:0;padding:0;background:#040408;font-family:'Segoe UI',sans-serif;">
          <div style="max-width:600px;margin:0 auto;padding:40px 20px;">

            <div style="background:linear-gradient(135deg,#7c3aed,#9333ea);border-radius:16px 16px 0 0;padding:32px 36px;text-align:center;">
              <div style="display:inline-block;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);border-radius:12px;padding:10px 20px;margin-bottom:12px;">
                <span style="color:#fff;font-size:20px;font-weight:800;letter-spacing:3px;">NX</span>
              </div>
              <h1 style="color:#fff;margin:0;font-size:24px;font-weight:700;">Thanks for reaching out!</h1>
            </div>

            <div style="background:#0d0d1a;border:1px solid rgba(139,92,246,0.2);border-top:none;border-radius:0 0 16px 16px;padding:36px;">
              <p style="color:#f0e6ff;font-size:16px;line-height:1.6;margin:0 0 16px;">
                Hey <strong style="color:#a78bfa;">${name.split(' ')[0]}</strong>,
              </p>
              <p style="color:rgba(240,230,255,0.65);font-size:15px;line-height:1.7;margin:0 0 16px;">
                We've received your inquiry about <strong style="color:#c084fc;">${project_type}</strong> and we're excited to learn more about your project!
              </p>
              <p style="color:rgba(240,230,255,0.65);font-size:15px;line-height:1.7;margin:0 0 28px;">
                Our team will review your message and get back to you within <strong style="color:#a78bfa;">24 hours</strong>. In the meantime, feel free to check out our latest work.
              </p>

              <div style="background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.2);border-radius:12px;padding:20px;margin-bottom:28px;">
                <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:2px;color:rgba(167,139,250,0.6);">Your submission</p>
                <p style="margin:0;color:#f0e6ff;font-size:14px;">Project: <span style="color:#c084fc;">${project_type}</span></p>
                ${budget ? `<p style="margin:4px 0 0;color:#f0e6ff;font-size:14px;">Budget: <span style="color:#c084fc;">${budget}</span></p>` : ''}
              </div>

              <p style="color:rgba(240,230,255,0.4);font-size:13px;margin:0;">
                — The NeonX Team 🔮
              </p>
            </div>

            <p style="text-align:center;color:rgba(240,230,255,0.2);font-size:12px;margin-top:24px;">
              NeonX Studio · hello@neonx.studio
            </p>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
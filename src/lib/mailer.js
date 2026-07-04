import nodemailer from "nodemailer";

let transporter;

function getTransporter() {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error("Missing SMTP environment variables");
  }

  const port = Number(SMTP_PORT);

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // true for 465, false for 587/others
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  return transporter;
}

const esc = (str = "") =>
  String(str).replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c])
  );

export async function sendContactEmail({ name, email, message }) {
  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;
  // The From address must be the authenticated SMTP account so SPF/DKIM
  // align with the sending domain — a mismatched From is the #1 reason
  // these land in spam. The visitor's address goes in replyTo instead.
  const authenticatedAddress = process.env.SMTP_USER;
  const displayName = process.env.CONTACT_FROM_NAME || "Portfolio";

  await getTransporter().sendMail({
    from: `"${displayName}" <${authenticatedAddress}>`,
    to,
    replyTo: `"${name}" <${email}>`,
    envelope: { from: authenticatedAddress, to },
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;font-size:15px;color:#111;line-height:1.6">
        <h2 style="margin:0 0 16px">New portfolio message</h2>
        <p style="margin:0 0 4px"><strong>Name:</strong> ${esc(name)}</p>
        <p style="margin:0 0 16px"><strong>Email:</strong>
          <a href="mailto:${esc(email)}">${esc(email)}</a>
        </p>
        <div style="padding:16px;background:#f6f6f6;border-radius:8px;white-space:pre-wrap">${esc(
          message
        )}</div>
      </div>
    `,
  });
}

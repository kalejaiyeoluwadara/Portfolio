import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import clientPromise from "@/lib/mongodb";
import { sendContactEmail } from "@/lib/mailer";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (!token || token !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const client = await clientPromise;
  const db = client.db();

  const messages = await db
    .collection("messages")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return NextResponse.json({ messages });
}

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();

    await db.collection("messages").insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    // Notify by email. Don't fail the request if the mail send errors —
    // the message is already saved to the database.
    try {
      await sendContactEmail({ name, email, message });
    } catch (mailError) {
      console.error("Error sending notification email:", mailError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error saving contact message:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

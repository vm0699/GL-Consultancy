import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, phone, studentClass, interest, message } = body || {};

  if (!name || !phone) {
    return NextResponse.json(
      { success: false, error: "Name and phone are required" },
      { status: 400 }
    );
  }

  // For now we just log it. Later you can integrate email / DB / WhatsApp.
  console.log("New appointment request:", {
    name,
    phone,
    studentClass,
    interest,
    message,
  });

  return NextResponse.json({ success: true });
}

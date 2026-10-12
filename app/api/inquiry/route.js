import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    
    // In production, send email, Telegram alert, webhook, or store in database
    console.log("New CSI Admission Inquiry Received:", data);

    return NextResponse.json({
      success: true,
      message: "Inquiry received successfully. Our counselor will contact you shortly."
    });
  } catch (error) {
    console.error("Inquiry Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}

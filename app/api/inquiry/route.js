import { NextResponse } from "next/server";
import { normalizeMobile } from "@/lib/phone";

/*
 * Enquiry delivery.
 * Leads are forwarded as JSON to LEAD_WEBHOOK_URL (set it in the hosting environment).
 * Simplest setup: a Google Apps Script web app that appends a row to a Google Sheet and
 * emails the counsellor, or a Make/Zapier/Pabbly webhook that sends a WhatsApp/email alert.
 *
 * If the webhook is missing or fails, the API returns an error instead of pretending it worked,
 * and the form shows the phone and WhatsApp options so the enquiry is never silently lost.
 */

const clean = (v, max = 300) => String(v ?? "").replace(/[\u0000-\u001f]/g, " ").trim().slice(0, max);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Could not read the form. Please try again." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field
  if (body.website) return NextResponse.json({ success: true });

  const lead = {
    name: clean(body.name, 80),
    phone: clean(body.phone, 20).replace(/[^\d+]/g, ""),
    course: clean(body.course, 60),
    studentClass: clean(body.studentClass ?? body.class, 40),
    message: clean(body.message, 1000),
    page: clean(body.page ?? request.headers.get("referer"), 300),
    receivedAt: new Date().toISOString(),
  };

  lead.phone = normalizeMobile(lead.phone);
  if (!lead.name || !lead.phone) {
    return NextResponse.json(
      { success: false, message: "Please enter your name and a 10-digit mobile number." },
      { status: 422 },
    );
  }

  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) {
    console.error("LEAD_WEBHOOK_URL is not set; enquiry NOT delivered:", lead);
    return NextResponse.json(
      { success: false, message: "We couldn't send your enquiry online. Please call or WhatsApp us on 94224 75665." },
      { status: 503 },
    );
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: "centuryscienceinstitute.in", ...lead }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (error) {
    console.error("Enquiry delivery failed:", error, lead);
    return NextResponse.json(
      { success: false, message: "We couldn't send your enquiry online. Please call or WhatsApp us on 94224 75665." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true, message: "Thank you. Our counsellor will call you shortly." });
}

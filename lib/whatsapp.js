import { contact } from "@/data/site";

/**
 * Click-to-chat link to the institute's WhatsApp with the enquiry already typed in.
 * No WhatsApp API: the student sends it from their own WhatsApp, so the institute gets
 * the lead in its normal WhatsApp and the student has the chat open to continue.
 * `fields` is a list of [label, value]; empty values are skipped.
 */
export function enquiryWhatsAppUrl(fields) {
  const lines = fields.filter(([, v]) => v && String(v).trim()).map(([k, v]) => `${k}: ${String(v).trim()}`);
  const text = ["Hello Century Science Institute, I would like admission details.", "", ...lines].join("\n");
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** Opens WhatsApp after a short pause so the thank-you message is seen first. */
export function pushToWhatsApp(url, delay = 1200) {
  // shortcut: same-tab navigation, because a new tab opened after the fetch await is blocked by popup blockers
  setTimeout(() => { window.location.href = url; }, delay);
}

"use client";

import { contact } from "@/data/site";

export default function MobileDock({ onOpenAdmission }) {
  return (
    <nav className="x-dock" aria-label="Quick actions">
      <a href={`tel:${contact.phonePrimaryRaw}`}>Call</a>
      <a href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Hello CSI, I want details about admissions.")}`} target="_blank" rel="noopener">WhatsApp</a>
      <button type="button" className="g" onClick={onOpenAdmission}>Free counselling</button>
    </nav>
  );
}

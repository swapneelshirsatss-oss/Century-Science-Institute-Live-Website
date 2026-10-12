"use client";

import { Phone, MessageCircle, FileText } from "lucide-react";
import { instituteInfo } from "@/data/instituteData";

export default function StickyCTA({ onOpenAdmission }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Call CTA */}
        <a
          href={`tel:${instituteInfo.contact.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0b1e3d] text-xs font-bold transition active:scale-95 border border-slate-200"
        >
          <Phone className="w-4 h-4 text-blue-700" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/${instituteInfo.contact.whatsappNumber}?text=Hello%20Century%20Science%20Institute,%20I%20want%20to%20inquire%20about%20admissions`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition active:scale-95 shadow-md shadow-emerald-700/20"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* Admission Enquiry Modal Trigger */}
        <button
          onClick={onOpenAdmission}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#0b1e3d] hover:bg-blue-900 text-amber-400 text-xs font-bold transition active:scale-95 shadow-md"
        >
          <FileText className="w-4 h-4" />
          <span>Inquire</span>
        </button>
      </div>
    </div>
  );
}

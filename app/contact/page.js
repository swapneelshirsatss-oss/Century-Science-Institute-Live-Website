import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { instituteInfo } from "@/data/instituteData";

export const metadata = {
  title: "Contact Century Science Institute – Hudkeshwar Road Nagpur",
  description: "Contact Century Science Institute Nagpur. Center address: 124, Rukhmini Nagar, Ashirwad Nagar Square, Hudkeshwar Road, Nagpur. Phone: +91 9422475665.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/contact/"
  }
};

export default function ContactPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Contact Us", href: "/contact/" }
      ]} />

      <section className="bg-gradient-to-b from-[#16303F] via-[#0E1D27] to-[#0E1D27] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
            <MapPin className="w-3.5 h-3.5" />
            <span>Nagpur Academic Center</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact Century Science Institute
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            We invite parents and students to visit our campus building on Hudkeshwar Road for personal counselling with Director Mrs. Meghna Marchatwar.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Center Information */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
                  Direct Contact Information
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16303F]">
                  Century Science Institute Center
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Located right near Ashirwad Nagar Square on Hudkeshwar Road, easily accessible from all parts of South and Central Nagpur.
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Campus Address</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      {instituteInfo.address.street}, {instituteInfo.address.city}, {instituteInfo.address.state} - {instituteInfo.address.postalCode}
                    </p>
                    <a
                      href={instituteInfo.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 mt-2"
                    >
                      <span>Open Location on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <Phone className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Admission Office Lines</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Primary: <a href={`tel:${instituteInfo.contact.phoneRaw}`} className="font-semibold text-blue-700">{instituteInfo.contact.phonePrimary}</a>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Secondary: <a href="tel:9371922368" className="font-semibold text-blue-700">{instituteInfo.contact.phoneSecondary}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <Clock className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Working Hours</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      {instituteInfo.contact.workingHours}
                    </p>
                    <span className="text-[11px] text-emerald-600 font-semibold block mt-1">
                      ✓ Open 7 days a week for parent visits and student counselling
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${instituteInfo.contact.whatsappNumber}?text=Hello%20Century%20Science%20Institute,%20I%20would%20like%20to%20visit%20the%20center`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition flex items-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <Link
                  href="/admission-form/"
                  className="px-6 py-3.5 rounded-xl bg-[#16303F] hover:bg-blue-900 text-white font-bold text-sm transition"
                >
                  Online Admission Form
                </Link>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="bg-slate-50 rounded-3xl p-4 border border-slate-200 shadow-lg space-y-3">
              <div className="w-full h-[420px] rounded-2xl overflow-hidden bg-slate-200 border border-slate-300">
                <iframe
                  title="Century Science Institute Location Map Nagpur"
                  src="https://maps.google.com/maps?q=21.10956917,79.11702919&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-center text-xs text-slate-500">
                📍 Landmark: Near Hanuman Mandir, Ashirwad Nagar Square, Hudkeshwar Road, Nagpur - 440034.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

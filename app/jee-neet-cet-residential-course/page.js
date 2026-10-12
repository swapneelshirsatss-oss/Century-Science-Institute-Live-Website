import Link from "next/link";
import { Sparkles, Phone, ArrowRight, CheckCircle2, Home, Building2, Utensils, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import { instituteInfo } from "@/data/instituteData";

export const metadata = {
  title: "JEE / NEET / CET Residential Coaching in Nagpur – CSI",
  description: "2-Year integrated residential coaching with hostel, mess, library, and 24x7 faculty mentoring in Nagpur for JEE, NEET, and MHT-CET aspirants.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/jee-neet-cet-residential-course/"
  }
};

const faqs = [
  {
    q: "What facilities are provided in the residential program?",
    a: "Air-conditioned/spacious hostel rooms, nutritious dining, reference library access till late hours, supervised study hours, and 24/7 faculty mentoring."
  },
  {
    q: "Is the residential campus safe for outstation students?",
    a: "Yes, our private campus features 24/7 CCTV surveillance, biometric security, dedicated wardens, and strict zero-gadget study disciplines."
  }
];

export default function ResidentialCoachingPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Residential Course", href: "/jee-neet-cet-residential-course/" }
      ]} />

      <section className="bg-gradient-to-b from-[#16303F] via-[#0E1D27] to-[#0E1D27] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Home className="w-3.5 h-3.5" />
              <span>All-Inclusive Campus & Hostel Program</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              JEE, NEET & CET Residential Course in Nagpur
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              2-Year integrated residential coaching with hostel, hygienic mess, quiet library, and round-the-clock teacher availability in Nagpur.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/admission-form/"
                className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition shadow-lg shadow-amber-500/20"
              >
                Apply for Residential Seat
              </Link>
              <a
                href={`tel:${instituteInfo.contact.phoneRaw}`}
                className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call: {instituteInfo.contact.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16303F]">
            Total Academic Immersion with Zero Daily Distractions
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            For students seeking absolute concentration away from smartphone addictions, social media, and daily commute exhaustion, our residential campus in Nagpur provides a disciplined gurukul-like learning environment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <Building2 className="w-8 h-8 text-blue-600 mx-auto" />
              <h4 className="font-bold text-slate-800">Spacious Hostel</h4>
              <p className="text-xs text-slate-500">Comfortable bedding, peaceful study tables, and regular housekeeping.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <Utensils className="w-8 h-8 text-amber-600 mx-auto" />
              <h4 className="font-bold text-slate-800">Nutritious Dining</h4>
              <p className="text-xs text-slate-500">Hygienic vegetarian meals, breakfast, evening snacks, and milk.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-slate-800">24/7 Mentoring</h4>
              <p className="text-xs text-slate-500">Resident teachers supervise nightly self-study sessions.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Frequently Asked Questions: Residential Coaching" />
    </div>
  );
}

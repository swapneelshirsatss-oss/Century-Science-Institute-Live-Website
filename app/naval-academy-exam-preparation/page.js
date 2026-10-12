import Link from "next/link";
import { Sparkles, Phone, ArrowRight, CheckCircle2, Award } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import { instituteInfo } from "@/data/instituteData";

export const metadata = {
  title: "Naval Academy Exam Preparation in Nagpur – Century Science Institute",
  description: "Expert Naval Academy exam coaching in Nagpur with disciplined training, JEE score enhancement, and SSB interview guidance.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/naval-academy-exam-preparation/"
  }
};

const faqs = [
  {
    q: "How does CSI prepare students for the Naval Academy Cadet Entry Scheme?",
    a: "Cadet entry for INA requires high JEE Mains percentiles and high Class 12 PCM marks. We train students to excel in JEE Mains physics, math, and chemistry while grooming them for SSB interviews."
  }
];

export default function NavalAcademyPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Naval Academy Prep", href: "/naval-academy-exam-preparation/" }
      ]} />

      <section className="bg-gradient-to-b from-[#0b1e3d] via-[#091832] to-[#061224] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Naval Academy (10+2 B.Tech Cadet Entry) Preparation
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Specialized coaching for Indian Naval Academy 10+2 Cadet Entry Scheme. Maximize your JEE Mains score and Class 12 PCM marks with expert coaching in Nagpur.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/admission-form/"
                className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition shadow-lg shadow-amber-500/20"
              >
                Enroll Now
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1e3d]">
            Strategic Training for Commissioned Officer Selection
          </h2>
          <p className="text-slate-600 leading-relaxed">
            The Indian Naval Academy 10+2 B.Tech Entry requires candidates to clear high JEE Main cutoffs, followed by 5-day SSB interviews. Century Science Institute ensures your PCM scores meet the cutoff while building mental agility, communication clarity, and problem-solving speed.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Frequently Asked Questions: Naval Academy Preparation" />
    </div>
  );
}

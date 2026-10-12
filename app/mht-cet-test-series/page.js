import Link from "next/link";
import { Sparkles, Phone, ArrowRight, CheckCircle2, Laptop } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import { instituteInfo } from "@/data/instituteData";

export const metadata = {
  title: "MHT-CET Test Series in Nagpur – Century Science Institute",
  description: "Enroll in the premier MHT-CET Test Series in Nagpur with real exam interface, performance ranking, and detailed video solutions.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/mht-cet-test-series/"
  }
};

const faqs = [
  {
    q: "Is the test series conducted on computers?",
    a: "Yes, students practice in our computer-based testing lab in Nagpur using the exact interface mandated by the Maharashtra State CET Cell."
  },
  {
    q: "Do students receive chapter-wise analysis?",
    a: "Yes, after every mock test, students receive detailed question-by-question analytics identifying weak topics, speed bottlenecks, and accuracy ratios."
  }
];

export default function MhtCetTestSeriesPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "MHT-CET Coaching", href: "/mht-cet-coaching/" },
        { label: "Test Series", href: "/mht-cet-test-series/" }
      ]} />

      <section className="bg-gradient-to-b from-[#16303F] via-[#0E1D27] to-[#0E1D27] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Laptop className="w-3.5 h-3.5" />
              <span>State-of-the-Art CBT Exam Simulation</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              MHT-CET Test Series Program in Nagpur
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Real computer-based exam simulation, chapter-wise unit tests, semi-grand tests, and full-syllabus mock tests with detailed performance feedback.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/admission-form/"
                className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition shadow-lg shadow-amber-500/20"
              >
                Join Test Series Batch
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
            Turn Preparation into High Exam Percentile with Rigorous Mock Drills
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            The difference between a 90 percentile and a 99 percentile student in MHT-CET is pure test temperament. Our full-scale computer testing lab allows students to conquer exam anxiety and master 180-minute time management.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "30 Unit Tests (Class 11 & Class 12 Chapters)",
              "10 Semi-Grand Tests (Combined Modules)",
              "20 Full-Length MHT-CET CBT Mock Examinations",
              "Immediate In-Depth Performance & Percentile Ranking",
              "Doubt Redressal Sessions Following Every Test",
              "Available for both PCM & PCB Aspirants"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Frequently Asked Questions: MHT-CET Test Series" />
    </div>
  );
}

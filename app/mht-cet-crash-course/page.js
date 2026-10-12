import Link from "next/link";
import { Sparkles, Phone, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import { instituteInfo } from "@/data/instituteData";

export const metadata = {
  title: "MHT-CET Crash Course in Nagpur – Century Science Institute",
  description: "Join our intensive MHT-CET Crash Course in Nagpur. Rapid syllabus revision, 50+ mock tests, shortcut tricks, and assured score boosts.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/mht-cet-crash-course/"
  }
};

const faqs = [
  {
    q: "How many hours of daily coaching in the Crash Course?",
    a: "The crash course features 6 to 8 hours of daily rigorous teaching, problem-solving workshops, and mock tests."
  },
  {
    q: "Is study material included in the Crash Course fee?",
    a: "Yes, students receive specialized formula handbooks, high-yield chapter mind maps, and past 10 years of solved CET questions."
  }
];

export default function MhtCetCrashCoursePage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "MHT-CET Coaching", href: "/mht-cet-coaching/" },
        { label: "Crash Course", href: "/mht-cet-crash-course/" }
      ]} />

      <section className="bg-gradient-to-b from-[#0b1e3d] via-[#091832] to-[#061224] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Zap className="w-3.5 h-3.5" />
              <span>Intensive 45-Day High-Impact Sprint</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              MHT-CET Crash Course in Nagpur (PCM & PCB)
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Rapid revision, speed calculation shortcuts, formula drills, and daily computer-based mock tests engineered to maximize your MHT-CET percentile in the final weeks.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/admission-form/"
                className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition shadow-lg shadow-amber-500/20"
              >
                Enroll for Crash Course
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
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1e3d]">
            Accelerate Your Score with Daily Intensive Exam Conditioning
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            The MHT-CET Crash Course at Century Science Institute is designed for 12th board appearing and dropper students who want to rapidly revise the entire Class 11 & 12 syllabus, eliminate calculation bottlenecks, and gain test-taking confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {[
              "Complete High-Yield Chapter Revision in 45 Days",
              "50+ Computer-Based Tests on Official CET Interface",
              "Special Math Shortcut Techniques for 2-Minute Question Solving",
              "Line-by-Line Biology & Organic Chemistry Rapid Fire Drills",
              "Micro-Level Negative Mark Elimination Strategy",
              "Direct Mentorship by Senior Subject Faculty"
            ].map((pt, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-800">{pt}</span>
              </div>
            ))}
          </div>

          <div className="pt-8 text-center">
            <Link
              href="/admission-form/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-base transition shadow-md"
            >
              <span>Book Your Crash Course Seat Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Frequently Asked Questions: MHT-CET Crash Course" />
    </div>
  );
}

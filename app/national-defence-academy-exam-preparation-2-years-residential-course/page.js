import Link from "next/link";
import { Sparkles, Phone, ArrowRight, CheckCircle2, Shield, Award } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import { instituteInfo } from "@/data/instituteData";

export const metadata = {
  title: "NDA Exam Preparation 2-Year Residential Course in Nagpur – CSI",
  description: "Comprehensive 2-Year NDA Residential Course in Nagpur with integrated 11th-12th Science, physical drills, SSB mentoring & mock tests.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/national-defence-academy-exam-preparation-2-years-residential-course/"
  }
};

const faqs = [
  {
    q: "Who is eligible for the 2-Year NDA Residential Course?",
    a: "Class 10th passed students (Boys and Girls) aspiring to join the Armed Forces as commissioned officers through NDA."
  },
  {
    q: "Is 11th and 12th Board coaching covered alongside NDA preparation?",
    a: "Yes, the course seamlessly covers the full 11th and 12th Science (PCM) board curriculum alongside UPSC NDA written exam syllabus and SSB foundation."
  }
];

export default function NdaResidentialPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "NDA 2-Year Residential", href: "/national-defence-academy-exam-preparation-2-years-residential-course/" }
      ]} />

      <section className="bg-gradient-to-b from-[#0b1e3d] via-[#091832] to-[#061224] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Officer Training Pathway</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              National Defence Academy (NDA) 2-Year Residential Course
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Integrated 11th & 12th Science coaching with UPSC NDA written exam preparation, SSB interview fundamentals, personality development, and residential boarding in Nagpur.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/admission-form/"
                className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition shadow-lg shadow-amber-500/20"
              >
                Apply for NDA Batch
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
            Disciplined Officer Cadet Preparation from Class 11th
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            The NDA written exam conducted by UPSC tests Mathematics and General Ability (English, Physics, Chemistry, General Science, History, Geography, and Current Affairs). Our integrated residential course prepares students comprehensively while ensuring top marks in 12th board exams.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Mathematics (Algebra, Trig, Calculus & Stats)",
              "General Ability Test (English & General Science)",
              "Physical Fitness Drills & Morning Conditioning",
              "SSB Interview Fundamentals & Public Speaking",
              "11th & 12th Science State / CBSE Board Scoring",
              "Hostel, Supervised Evening Prep & Nutritious Mess"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Frequently Asked Questions: NDA Residential Course" />
    </div>
  );
}

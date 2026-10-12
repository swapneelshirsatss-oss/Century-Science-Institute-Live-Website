import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Phone, 
  ArrowRight,
  GraduationCap
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import DoubleTeachingSection from "@/components/DoubleTeachingSection";
import { instituteInfo } from "@/data/instituteData";

export const metadata = {
  title: "11th & 12th Science Coaching Classes in Nagpur",
  description: "Join CSI Nagpur for 11th & 12th Science coaching for State Board / CBSE. Expert faculty, strong fundamentals, and personal guidance for exam success.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/11-12-th-science-coaching/"
  },
  openGraph: {
    title: "11th & 12th Science Coaching Classes in Nagpur",
    description: "Join CSI Nagpur for 11th & 12th Science coaching for State Board / CBSE. Expert faculty and strong fundamentals.",
    url: "https://centuryscienceinstitute.in/11-12-th-science-coaching/"
  }
};

const boardFaqs = [
  {
    q: "Do you cover both CBSE and Maharashtra State Board syllabus?",
    a: "Yes, our faculty conducts dedicated curriculum tracks aligned with both Maharashtra State Board and CBSE Class 11 and 12 textbooks."
  },
  {
    q: "How does the Double Teaching Concept help 11th & 12th students?",
    a: "Students do not have to juggle two different tuitions. Hour 1 guarantees top board theory marks and answer-writing skills; Hour 2 equips them for JEE, NEET, or MHT-CET success."
  },
  {
    q: "What subjects are taught for 11th and 12th Science?",
    a: "We provide complete coaching for Physics, Chemistry, Mathematics, and Biology (PCMB) along with board practical guidance."
  }
];

export default function Class1112CoachingPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "11th & 12th Science Coaching", href: "/11-12-th-science-coaching/" }
      ]} />

      <section className="bg-gradient-to-b from-[#16303F] via-[#0E1D27] to-[#0E1D27] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Board & Concept Foundation</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              11th & 12th Science Coaching Classes in Nagpur
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Comprehensive Class 11 & 12 Science coaching for State Board and CBSE. Build unshakable concepts in Physics, Chemistry, Mathematics, and Biology with personalized mentor attention.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/admission-form/"
                className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition shadow-lg shadow-amber-500/20"
              >
                Enroll for 11th / 12th Science
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16303F]">
                  Build Strong Foundation for Board Distinction & Competitive Exams
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Class 11 and 12 form the bedrock of a student&apos;s academic journey. Without disciplined concept building in these crucial years, attempting competitive entrance exams leads to anxiety and underperformance.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Century Science Institute provides an all-in-one ecosystem where board syllabus and competitive fundamentals are taught together harmoniously by dedicated senior subject teachers.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Physics Fundamentals",
                    desc: "Mastering formulas, SI units, derivations, and board diagrams alongside numerical problems."
                  },
                  {
                    title: "Chemistry Mastery",
                    desc: "Balanced equations, organic reaction conversions, named reactions, and inorganic charts."
                  },
                  {
                    title: "Mathematics & Calculus",
                    desc: "Step-by-step theorem proofs, step-marking practice, and rapid calculation methods."
                  },
                  {
                    title: "Biology Diagrams & Theory",
                    desc: "High-scoring diagram labeling and descriptive answer presentation led by Meghna Ma'am."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                    <h3 className="font-bold text-base text-slate-800">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900 text-white rounded-3xl p-7 border border-blue-900/50 shadow-xl space-y-6">
                <h3 className="text-xl font-extrabold text-white">Class 11 & 12 Science Admissions</h3>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>Boards:</span>
                    <strong className="text-white">State Board & CBSE</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>Subjects:</span>
                    <strong className="text-white">Physics, Chem, Math, Bio</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>Batch Size:</span>
                    <strong className="text-white">30–40 Students</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <strong className="text-white">Hudkeshwar Road, Nagpur</strong>
                  </div>
                </div>

                <Link
                  href="/admission-form/"
                  className="block w-full py-3.5 rounded-xl font-bold text-center text-sm bg-amber-500 text-slate-950 hover:bg-amber-600 transition"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DoubleTeachingSection />
      <FAQSection faqs={boardFaqs} title="Frequently Asked Questions: 11th & 12th Science Coaching" />
    </div>
  );
}

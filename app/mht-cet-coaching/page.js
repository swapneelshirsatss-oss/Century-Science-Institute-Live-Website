import Link from "next/link";
import { 
  Sparkles, 
  Target, 
  CheckCircle2, 
  BookOpen, 
  Award, 
  Phone, 
  ArrowRight
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import TopperGrid from "@/components/TopperGrid";
import { instituteInfo } from "@/data/instituteData";

export const metadata = {
  title: "MHT-CET Coaching in Nagpur – Century Science Institute",
  description: "Century Science Institute offers the most trusted MHT-CET Coaching in Nagpur. Experienced mentors, focused batches, and success-driven strategies.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/mht-cet-coaching/"
  },
  openGraph: {
    title: "MHT-CET Coaching in Nagpur – Century Science Institute",
    description: "Century Science Institute offers the most trusted MHT-CET Coaching in Nagpur.",
    url: "https://centuryscienceinstitute.in/mht-cet-coaching/"
  }
};

const courseSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "MHT-CET Coaching in Nagpur (Engineering & Pharmacy)",
      "description": "Comprehensive MHT-CET Coaching at Century Science Institute Nagpur with experienced faculty, state board concept alignment, and computer-based mock tests.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Century Science Institute",
        "url": "https://centuryscienceinstitute.in"
      },
      "url": "https://centuryscienceinstitute.in/mht-cet-coaching/"
    }
  ]
};

const cetFaqs = [
  {
    q: "How does CSI prepare students for MHT-CET 99+ percentile?",
    a: "We focus on Maharashtra State Board textbooks with advanced shortcut methods, formula drills, and over 50+ timed computer-based mock tests replicating the official CET Cell format."
  },
  {
    q: "Are separate batches available for PCM and PCB?",
    a: "Yes, CSI provides specialized dedicated batches for Engineering aspirants (PCM) and Pharmacy aspirants (PCB)."
  },
  {
    q: "Do you offer crash courses and test series for MHT-CET?",
    a: "Yes, we run intensive 45-day crash courses and a full-length CBT test series starting every January and February."
  }
];

export default function MhtCetCoachingPage() {
  return (
    <div className="space-y-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "MHT-CET Coaching", href: "/mht-cet-coaching/" }
      ]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#0b1e3d] via-[#091832] to-[#061224] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Target className="w-3.5 h-3.5" />
              <span>Maharashtra State Entrance Toppers</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              MHT-CET Coaching Classes in Nagpur (PCM & PCB)
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Target 99+ percentile for top engineering (COEP, VJTI, ICT, VNIT) and government pharmacy colleges with Nagpur&apos;s most proven state entrance specialists.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/admission-form/"
                className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition shadow-lg shadow-amber-500/20"
              >
                Enroll for MHT-CET Batch
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

      {/* Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1e3d]">
                  Master the Maharashtra CET Exam with Proven Methodology
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  MHT-CET questions are heavily derived from the Maharashtra State Board syllabus, but success hinges on calculation speed and shortcut execution. A student with strong textbook grasp and rigorous speed training can effortlessly cross the 99 percentile threshold.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  At Century Science Institute, our students like <strong>Ruchi Ambatkar (99.42 %ile)</strong> and <strong>Shreya Thakre (99.18 %ile)</strong> prove that structured daily drills and CBT test simulation provide an insurmountable advantage.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "PCM Engineering Focus",
                    desc: "High-speed Math shortcut techniques and conceptual Physics & Chemistry problem sets."
                  },
                  {
                    title: "PCB Pharmacy Focus",
                    desc: "Comprehensive State Board Biology lines + rapid Chemistry calculations."
                  },
                  {
                    title: "Official CET Exam Interface",
                    desc: "Practice on the real computer interface used by the Maharashtra State CET Cell."
                  },
                  {
                    title: "Board Exam Synced",
                    desc: "Simultaneous 12th Board theory coverage so students score high in boards as well."
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
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                  Quick Details
                </span>
                <h3 className="text-xl font-extrabold text-white">MHT-CET 2026–27</h3>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>Eligibility:</span>
                    <strong className="text-white">Class 11 & 12 / Droppers</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>Streams:</span>
                    <strong className="text-white">PCM & PCB Batches</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>Batch Cap:</span>
                    <strong className="text-white">35 Students</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Campus:</span>
                    <strong className="text-white">Hudkeshwar Rd, Nagpur</strong>
                  </div>
                </div>

                <Link
                  href="/admission-form/"
                  className="block w-full py-3.5 rounded-xl font-bold text-center text-sm bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 transition"
                >
                  Inquire for CET Seat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toppers */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1e3d]">
              Our MHT-CET State Top Rankers
            </h2>
          </div>
          <TopperGrid limit={4} showFilter={false} />
        </div>
      </section>

      <FAQSection faqs={cetFaqs} title="Frequently Asked Questions: MHT-CET Coaching" />
    </div>
  );
}

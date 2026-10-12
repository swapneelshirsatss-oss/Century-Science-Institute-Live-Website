import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Award, 
  Phone, 
  ArrowRight,
  ShieldCheck,
  HeartPulse
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import TopperGrid from "@/components/TopperGrid";
import { instituteInfo } from "@/data/instituteData";

export const metadata = {
  title: "Best NEET Coaching in Nagpur – Century Science Institute",
  description: "Join CSI Nagpur for expert NEET coaching in Nagpur with daily tests, Double teaching, and experienced faculty. Build confidence for medical entrance success.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/neet-coaching/"
  },
  openGraph: {
    title: "Best NEET Coaching in Nagpur – Century Science Institute",
    description: "Join CSI Nagpur for expert NEET coaching in Nagpur with daily tests, Double teaching, and experienced faculty.",
    url: "https://centuryscienceinstitute.in/neet-coaching/"
  }
};

const courseSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "NEET Medical Entrance Coaching in Nagpur",
      "description": "NEET Coaching at Century Science Institute (CSI), Nagpur — expert faculty, structured syllabus, mock tests, and proven toppers’ results.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Century Science Institute",
        "url": "https://centuryscienceinstitute.in"
      },
      "url": "https://centuryscienceinstitute.in/neet-coaching/"
    }
  ]
};

const neetFaqs = [
  {
    q: "What is the NEET batch size at CSI?",
    a: "Each batch is strictly limited to 30–40 students to ensure individual attention, regular parent updates, and personal mentoring for every medical aspirant."
  },
  {
    q: "Do you provide mock tests for NEET?",
    a: "Yes, CSI conducts weekly sectional tests and 720-mark full-syllabus OMR mock tests simulating the exact NTA NEET examination environment."
  },
  {
    q: "Does CSI provide study material for NEET?",
    a: "Yes, CSI provides updated NEET study material, NCERT-based question banks, assertion-reason practice sheets, and diagrams curated by senior faculties."
  },
  {
    q: "Who teaches Biology at CSI Nagpur?",
    a: "Director Mrs. Meghna Marchatwar (M.Sc. in Biology, B.Ed., A.D.I.D. with 15+ years experience) directly heads the Biology department, ensuring line-by-line NCERT mastery."
  }
];

export default function NeetCoachingPage() {
  return (
    <div className="space-y-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "NEET Coaching", href: "/neet-coaching/" }
      ]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#0b1e3d] via-[#091832] to-[#061224] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
              <span>Medical Entrance Flagship</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Best NEET Coaching in Nagpur – Medical Entrance Classes
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Achieve 650+ in NEET-UG with Nagpur&apos;s leading medical coaching. Direct NCERT line-by-line mastery, high-yield Physics numerical tactics, and weekly 720-mark OMR simulation test series.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/admission-form/"
                className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition shadow-lg shadow-amber-500/20"
              >
                Enroll for NEET 2026–27
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

      {/* Content Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1e3d]">
                  Why Medical Aspirants Choose CSI for NEET in Nagpur
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  NEET is an examination of precision, speed, and deep conceptual clarity. Scoring 650+ requires zero error in NCERT Biology and rapid calculation in Physics and Chemistry.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Under the direct academic stewardship of <strong>Mrs. Meghna Marchatwar</strong> (M.Sc. in Biology, 15+ years experience), CSI students learn every single diagram, summary point, and assertion-reason variation from NCERT textbooks while training in timed OMR examination conditions.
                </p>
              </div>

              {/* Special Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "NCERT Line-by-Line Biology",
                    desc: "Targeting 350+ out of 360 in Biology with detailed chapter decoding and diagram revision."
                  },
                  {
                    title: "Physics Problem Clinics",
                    desc: "Breaking down complex mechanics and electromagnetism into simple formula patterns and shortcut tricks."
                  },
                  {
                    title: "Chemistry High-Yield Charts",
                    desc: "Dedicated daily practice for Organic reaction pathways, inorganic memory charts, and physical chemistry calculations."
                  },
                  {
                    title: "720-Mark OMR Test Series",
                    desc: "Simulated exam conditions replicating NTA pressure, negative marking control, and speed optimization."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                      ✓
                    </div>
                    <h3 className="font-bold text-base text-slate-800">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Sticky Card */}
            <div className="space-y-6">
              <div className="bg-slate-900 text-white rounded-3xl p-7 border border-blue-900/50 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                    Course Factsheet
                  </span>
                  <h3 className="text-xl font-extrabold text-white mt-1">
                    NEET-UG Medical 2026–27
                  </h3>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span>Batch Size:</span>
                    <strong className="text-white">30–40 Students Only</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span>Duration:</span>
                    <strong className="text-white">1 Year / 2 Years</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span>Target Score:</span>
                    <strong className="text-white">650+ / 720 Marks</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span>Lead Mentor:</span>
                    <strong className="text-white">Mrs. Meghna Marchatwar</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Facility:</span>
                    <strong className="text-white">Dedicated Campus + Hostel</strong>
                  </div>
                </div>

                <Link
                  href="/admission-form/"
                  className="block w-full py-3.5 rounded-xl font-bold text-center text-sm bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20 hover:from-amber-600 hover:to-amber-700 transition"
                >
                  Apply for NEET Batch
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
              Our Medical College Admissions (GMC & AIIMS)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Century Science Institute alumni currently studying in premier government medical colleges.
            </p>
          </div>
          <TopperGrid limit={4} showFilter={false} />
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={neetFaqs} title="Frequently Asked Questions: NEET Classes in Nagpur" />
    </div>
  );
}

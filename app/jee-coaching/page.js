import Link from "next/link";
import { 
  CheckCircle2, 
  BookOpen, 
  Target, 
  Clock, 
  Users, 
  Award, 
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Phone
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import TopperGrid from "@/components/TopperGrid";
import { instituteInfo } from "@/data/instituteData";

export const metadata = {
  title: "Best JEE Coaching in Nagpur – Century Science Institute",
  description: "Looking for the best JEE Coaching in Nagpur? CSI offers IIT/NIT faculty, study material, mock tests & proven results for JEE Main & Advanced.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/jee-coaching/"
  },
  openGraph: {
    title: "Best JEE Coaching in Nagpur – Century Science Institute",
    description: "Looking for the best JEE Coaching in Nagpur? CSI offers IIT/NIT faculty, study material, mock tests & proven results for JEE Main & Advanced.",
    url: "https://centuryscienceinstitute.in/jee-coaching/",
  }
};

const courseSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "JEE Coaching in Nagpur (Main & Advanced)",
      "description": "Looking for the best JEE Coaching in Nagpur? Century Science Institute offers IIT/NIT faculty, structured study material, mock tests, and proven results for JEE Main & Advanced.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Century Science Institute",
        "url": "https://centuryscienceinstitute.in"
      },
      "url": "https://centuryscienceinstitute.in/jee-coaching/"
    }
  ]
};

const jeeFaqs = [
  {
    q: "What is the batch size for JEE coaching at CSI?",
    a: "Batch sizes are strictly kept limited to 30–40 students to ensure focused personal mentoring, close observation, and individualized doubt clearing."
  },
  {
    q: "Do you provide mock tests for JEE Mains & Advanced?",
    a: "Yes, CSI conducts weekly mock tests and full-syllabus tests simulating the exact NTA computer-based test interface with comprehensive accuracy and percentile analytics."
  },
  {
    q: "Does CSI provide study material for JEE?",
    a: "Yes, CSI provides updated JEE study material, chapter-wise theory booklets, formula handbooks, and over 15 years of solved past questions curated by senior IIT/NIT mentors."
  },
  {
    q: "Is there a crash course available for JEE?",
    a: "Yes, CSI offers intensive crash courses and rapid test series for JEE aspirants prior to the January and April attempts to solidify exam readiness."
  }
];

export default function JeeCoachingPage() {
  return (
    <div className="space-y-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "JEE Coaching", href: "/jee-coaching/" }
      ]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#0b1e3d] via-[#091832] to-[#061224] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering Entrance Excellence</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Best JEE Coaching in Nagpur – Mains & Advanced
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Crack IIT-JEE Mains and Advanced with Nagpur&apos;s most disciplined engineering entrance coaching. Featuring our signature Double Teaching formula, small batches, and top IIT/NIT educators.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/admission-form/"
                className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition shadow-lg shadow-amber-500/20"
              >
                Enroll for JEE 2026–27
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

      {/* Program Details */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1e3d]">
                  Why CSI is Ranked Nagpur&apos;s Top JEE Coaching Institute
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Cracking JEE Mains and Advanced demands deep conceptual clarity, mathematical rigor, and lightning-fast analytical instincts. At Century Science Institute, we bypass generic rote memorization and cultivate fundamental problem-solving principles.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Our students benefit from our unique <strong>Double Teaching Concept</strong>: 1 hour dedicated to Class 11th & 12th Board descriptive derivation practice, followed immediately by 1 hour of rigorous JEE-level multi-concept numerical challenges.
                </p>
              </div>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "Advanced Problem-Solving",
                    desc: "Weekly discussions covering HC Verma, IE Irodov, SL Loney, and MS Chouhan problem frameworks."
                  },
                  {
                    title: "NTA CBT Mock Interface",
                    desc: "Simulated computer-based test lab replicating the actual JEE exam screen, timer, and question pallette."
                  },
                  {
                    title: "Personal Doubt Clinic",
                    desc: "Direct access to senior educators every day after class for one-on-one difficulty resolution."
                  },
                  {
                    title: "Board + JEE Integration",
                    desc: "Students consistently achieve 90%+ in 12th Board examinations alongside top JEE percentiles."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs">
                      ✓
                    </div>
                    <h3 className="font-bold text-base text-slate-800">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Syllabus Overview */}
              <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 space-y-4">
                <h3 className="text-xl font-extrabold text-[#0b1e3d]">
                  Subject-Wise Preparation Blueprint
                </h3>
                <div className="space-y-3 text-sm text-slate-700">
                  <div className="border-l-4 border-blue-600 pl-4 py-1">
                    <strong className="block text-slate-900">Physics:</strong> Mechanics, Electrodynamics, Optics, Modern Physics, and Thermodynamics with deep calculus-based problem solving.
                  </div>
                  <div className="border-l-4 border-amber-500 pl-4 py-1">
                    <strong className="block text-slate-900">Chemistry:</strong> Physical Chemistry numericals, Organic reaction mechanisms with electron pushing, and Inorganic memory charts.
                  </div>
                  <div className="border-l-4 border-emerald-600 pl-4 py-1">
                    <strong className="block text-slate-900">Mathematics:</strong> Coordinate Geometry, Differential & Integral Calculus, Vectors, 3D Geometry, and Algebra problem mastery.
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Sticky Card */}
            <div className="space-y-6">
              <div className="bg-slate-900 text-white rounded-3xl p-7 border border-blue-900/50 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                    Quick Batch Overview
                  </span>
                  <h3 className="text-xl font-extrabold text-white mt-1">
                    JEE Main + Advanced 2026–27
                  </h3>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span>Batch Size:</span>
                    <strong className="text-white">30–40 Students</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span>Course Duration:</span>
                    <strong className="text-white">1 Year / 2 Years</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span>Testing Frequency:</span>
                    <strong className="text-white">Weekly CBT Mocks</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span>Study Material:</span>
                    <strong className="text-white">Printed Modules + Past Papers</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Center:</span>
                    <strong className="text-white">Hudkeshwar Road, Nagpur</strong>
                  </div>
                </div>

                <Link
                  href="/admission-form/"
                  className="block w-full py-3.5 rounded-xl font-bold text-center text-sm bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20 hover:from-amber-600 hover:to-amber-700 transition"
                >
                  Apply for JEE Admission
                </Link>
              </div>

              {/* Location Mini Box */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-xs text-slate-600 space-y-2">
                <strong className="text-slate-800 block text-sm">Nagpur Campus Address</strong>
                <p>124, Rukhmini Nagar, Ashirwad Nagar Square, Hudkeshwar Road, Nagpur - 440034.</p>
                <a 
                  href={instituteInfo.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-bold hover:underline block pt-1"
                >
                  Get Directions on Google Maps →
                </a>
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
              Our Engineering Entrance Rankers
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Students from Nagpur who cracked IITs, NITs, and premier engineering institutes with CSI.
            </p>
          </div>
          <TopperGrid limit={4} showFilter={false} />
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={jeeFaqs} title="Frequently Asked Questions: JEE Coaching in Nagpur" />
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Sparkles, 
  Users, 
  BookOpen, 
  Building2, 
  Phone, 
  Calendar,
  ShieldCheck,
  MapPin,
  Laptop
} from "lucide-react";
import { 
  instituteInfo, 
  coursesList, 
  testimonialsList, 
  campusFeatures 
} from "@/data/instituteData";
import TopperGrid from "@/components/TopperGrid";
import InteractiveCalculator from "@/components/InteractiveCalculator";
import DoubleTeachingSection from "@/components/DoubleTeachingSection";
import FAQSection from "@/components/FAQSection";
import AdmissionModal from "@/components/AdmissionModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const homeFaqs = [
    {
      q: "Where is Century Science Institute located in Nagpur?",
      a: "Century Science Institute is located at 124, Rukhmini Nagar, Ashirwad Nagar Square, Near Hanuman Mandir, Hudkeshwar Road, Nagpur - 440034. It is housed in our own private, dedicated academic building."
    },
    {
      q: "What is the Double Teaching Concept at CSI Nagpur?",
      a: "Our signature Double Teaching Concept pairs 1 hour of descriptive Board/CBSE theory with 1 hour of competitive entrance application and testing every single day, guaranteeing both high 12th board marks and top NEET/JEE/CET percentiles."
    },
    {
      q: "What courses are offered at Century Science Institute?",
      a: "We offer comprehensive 1-year and 2-year programs for NEET Medical, IIT-JEE (Mains & Advanced), MHT-CET (PCM & PCB), Class 11 & 12 Science coaching, MHT-CET Crash Courses, Test Series, and 2-Year Integrated Residential Courses with hostel facilities."
    },
    {
      q: "Who leads the academic teaching at CSI?",
      a: "Under our 'Directors are Tutors' methodology, senior educators including Director Mrs. Meghna Marchatwar (M.Sc. in Biology, B.Ed., A.D.I.D. with 15+ years experience) directly teach and personally mentor each batch."
    },
    {
      q: "What is the student batch size?",
      a: "Batches are strictly capped at 30 to 40 students to ensure zero crowd neglect, individual concept tracking, and direct one-on-one doubt resolution."
    }
  ];

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0b1e3d] via-[#091832] to-[#061224] text-white pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Core Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold tracking-wide">
                <Sparkles className="w-4 h-4" />
                <span>Nagpur&apos;s Most Trusted Science & Entrance Academy</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Top NEET, JEE & MHT-CET Coaching in Nagpur
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Master 11th & 12th Board examinations and competitive entrance tests through our signature <strong className="text-white">Double Teaching Concept</strong>. Taught directly by experienced subject directors with 15+ years of proven top ranks.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/admission-form/"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-base bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 shadow-xl shadow-amber-500/25 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enroll for 2026–27 Batch</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Request Callback</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">Double Teaching</span>
                    <span className="text-[11px] text-slate-400">Board + Entrance</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">Small Batches</span>
                    <span className="text-[11px] text-slate-400">30–40 Students Max</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">Own Campus</span>
                    <span className="text-[11px] text-slate-400">Private Building</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Highlight Card & Stats */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-5">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                      Academic Highlights
                    </span>
                    <h3 className="text-lg font-bold text-white">Century Science Institute</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    ⭐ 5.0 Rating
                  </span>
                </div>

                {/* Stats 2x2 Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {instituteInfo.stats.slice(0, 4).map((st, i) => (
                    <div key={i} className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                      <span className="block text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">
                        {st.value}
                      </span>
                      <span className="text-xs font-semibold text-slate-300 mt-1 block">
                        {st.label}
                      </span>
                      <span className="text-[10px] text-slate-500 block">
                        {st.suffix}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Director Quick Profile Banner */}
                <div className="mt-5 pt-4 border-t border-slate-700/80 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-amber-400 shrink-0 border border-amber-400/30">
                    <img
                      src="https://centuryscienceinstitute.in/wp-content/uploads/2025/07/Meghna-Maam-214x300.jpeg"
                      alt="Director Mrs Meghna Marchatwar"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block">
                      Under Direct Guidance of Mrs. Meghna Marchatwar
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      M.Sc. Biology, B.Ed. • 15+ Years Entrance Mentorship
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLAGSHIP COURSES SHOWCASE */}
      <section className="py-20 sm:py-24 bg-white" id="courses">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Target-Oriented Programs</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1e3d] tracking-tight">
              Comprehensive Entrance & Board Coaching
            </h2>
            <p className="text-base text-slate-600">
              Structured courses engineered with deep concept lectures, daily testing, and tailored printed study materials for guaranteed rank acceleration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesList.slice(0, 6).map((c) => (
              <div
                key={c.slug}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-blue-700 border border-blue-200">
                      {c.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {c.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition">
                      {c.title}
                    </h3>
                    <p className="text-xs font-medium text-amber-700 mt-1">
                      Eligibility: {c.eligibility}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {c.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/${c.slug}/`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-900 group/link"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-4 h-4 group-link-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/jee-neet-cet-residential-course/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0b1e3d] text-amber-400 font-bold text-sm hover:bg-blue-900 transition shadow-md"
            >
              <span>Explore 2-Year Residential Hostel Programs & Defence NDA Courses →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. DOUBLE TEACHING CONCEPT & DIRECTORS SECTION */}
      <DoubleTeachingSection onOpenAdmission={() => setModalOpen(true)} />

      {/* 4. INTERACTIVE PATHWAY FINDER */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveCalculator onOpenAdmission={() => setModalOpen(true)} />
        </div>
      </section>

      {/* 5. TOPPERS & HALL OF FAME */}
      <section className="py-20 sm:py-24 bg-white" id="toppers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>Hall of Fame & Top Ranks</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1e3d] tracking-tight">
              Real Nagpur Students, Proven High Percentiles
            </h2>
            <p className="text-base text-slate-600">
              Every year, Century Science Institute students achieve top percentiles and secure seats in premier medical (GMC), engineering (IIT, NIT, COEP, VJTI), and pharmacy colleges.
            </p>
          </div>

          <TopperGrid limit={8} showFilter={true} />

          <div className="mt-12 text-center">
            <Link
              href="/topper-jee-neet-cet-12th-sci/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-[#0b1e3d] text-[#0b1e3d] hover:bg-[#0b1e3d] hover:text-white font-bold text-sm transition"
            >
              <span>View Full Toppers Gallery & College Allocations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CAMPUS INFRASTRUCTURE & FACILITIES */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-900 to-[#071329] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
              <Building2 className="w-3.5 h-3.5" />
              <span>World-Class Academic Infrastructure</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Dedicated Academic Building & Modern Facilities
            </h2>
            <p className="text-base text-slate-300">
              Century Science Institute operates out of an independent, self-owned campus building designed strictly for uninterrupted learning, test practice, and student safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusFeatures.map((f, i) => (
              <div
                key={i}
                className="bg-slate-800/60 rounded-3xl p-6 sm:p-7 border border-slate-700/80 hover:border-blue-500/60 transition shadow-lg space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-lg text-white">
                  {f.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Location & Map Strip */}
          <div className="mt-14 bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Nagpur Center Location</span>
              </div>
              <h4 className="text-xl font-extrabold text-white">
                Visit Our Campus on Hudkeshwar Road
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                124, Rukhmini Nagar, Ashirwad Nagar Square, Near Hanuman Mandir, Hudkeshwar Road, Nagpur - 440034.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={instituteInfo.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition shadow-md"
              >
                Open in Google Maps
              </a>
              <a
                href={`tel:${instituteInfo.contact.phoneRaw}`}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm transition shadow-md"
              >
                Call: {instituteInfo.contact.phonePrimary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PARENT & STUDENT TESTIMONIALS */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Parent & Alumni Reviews</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1e3d] tracking-tight">
              What Families Say About Century Science Institute
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsList.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <h4 className="font-extrabold text-sm text-slate-900">{t.name}</h4>
                  <span className="text-xs text-blue-700 font-semibold block">{t.relation}</span>
                  <span className="text-[11px] text-slate-500">{t.exam}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SCHEMA FAQS */}
      <FAQSection
        faqs={homeFaqs}
        title="Frequently Asked Questions About CSI Nagpur"
        subtitle="Get all details about batch timings, admission procedures, and study materials."
      />

      {/* 9. BOTTOM CONVERSION CTA BANNER */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#0b1e3d] via-blue-900 to-[#0b1e3d] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950">
            Admissions 2026–27 Closing Soon
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Secure Your Seat in Nagpur&apos;s High-Yield Entrance Batches
          </h2>
          <p className="text-base text-blue-200 max-w-2xl mx-auto">
            Limited seats per batch (30–40 students) to preserve personalized director attention. Book a free diagnostic session today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/admission-form/"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm transition shadow-lg shadow-amber-500/20"
            >
              Fill Online Admission Form
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition"
            >
              Speak with Senior Academic Advisor
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AdmissionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

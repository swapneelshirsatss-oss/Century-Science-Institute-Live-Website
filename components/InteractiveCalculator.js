"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Target, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  GraduationCap
} from "lucide-react";

export default function InteractiveCalculator({ onOpenAdmission }) {
  const [stream, setStream] = useState("medical"); // medical | engineering | mhtcet | residential
  const [currentClass, setCurrentClass] = useState("10th"); // 10th | 11th | 12th | dropper

  const roadmaps = {
    "medical_10th": {
      title: "2-Year Integrated NEET Foundation & Advanced",
      batch: "Nurture NEET 2028 Batch",
      duration: "2 Academic Years (Class 11 & 12)",
      focus: "Double Teaching: 1 Hr Board Theory + 1 Hr NCERT Medical Concepts daily",
      tests: "120+ Chapter Tests + 30 Full OMR Mock Tests (720 Marks)",
      link: "/neet-coaching/"
    },
    "medical_11th": {
      title: "1-Year Target NEET Intensive",
      batch: "Enthusiast NEET 2027 Batch",
      duration: "1 Academic Year (Class 12)",
      focus: "Comprehensive 12th syllabus + 11th fast-track revision with doubt clinic",
      tests: "Weekly sectional test series + AI-backed error analysis",
      link: "/neet-coaching/"
    },
    "medical_12th": {
      title: "NEET Final Lap & Grand Mock Test Series",
      batch: "Rank Booster Batch",
      duration: "6 Months Crash & Test Series",
      focus: "High-yield NCERT Biology drills, Physics numerical shortcuts, Chemistry charts",
      tests: "Daily 720-mark simulated tests with ranking",
      link: "/neet-coaching/"
    },
    "medical_dropper": {
      title: "NEET Droppers / Repeaters Exclusive Batch",
      batch: "Achiever NEET Batch",
      duration: "1 Year Dedicated Repeaters Track",
      focus: "Zero-base concept rebuilding, rigorous 8-hour daily supervised learning",
      tests: "Daily mock practice with direct mentor feedback",
      link: "/neet-coaching/"
    },
    "engineering_10th": {
      title: "2-Year Integrated IIT-JEE Mains & Advanced",
      batch: "Zenith JEE 2028 Batch",
      duration: "2 Academic Years (Class 11 & 12)",
      focus: "Deep mathematical rigor, advanced problem-solving, HC Verma & Irodov discussions",
      tests: "NTA Computer-Based Test (CBT) interface simulation weekly",
      link: "/jee-coaching/"
    },
    "engineering_11th": {
      title: "1-Year Target JEE Mains & Advanced",
      batch: "Pinnacle JEE 2027 Batch",
      duration: "1 Academic Year (Class 12)",
      focus: "Advanced problem patterns, multi-concept physics and calculus mastery",
      tests: "Weekly full JEE Mains & Advanced pattern mock drills",
      link: "/jee-coaching/"
    },
    "engineering_12th": {
      title: "JEE Mains Fast-Track Crash Course",
      batch: "Sprint JEE Batch",
      duration: "3 to 4 Months Intensive",
      focus: "Chapter-wise formula masterclasses, 15-year past paper dissection",
      tests: "40+ full syllabus computer-based mock tests",
      link: "/jee-coaching/"
    },
    "engineering_dropper": {
      title: "JEE Repeaters Comprehensive Program",
      batch: "Leader JEE Batch",
      duration: "1 Year Rigorous Droppers Batch",
      focus: "Advanced problem solving, test strategy, accuracy & negative-mark reduction",
      tests: "Daily timed tests + percentile predictions",
      link: "/jee-coaching/"
    },
    "mhtcet_10th": {
      title: "2-Year State Board + MHT-CET Toppers Program",
      batch: "Excel CET 2028 Batch",
      duration: "2 Academic Years",
      focus: "Complete Maharashtra State textbook mastery with speed-solving shortcuts",
      tests: "50+ chapter tests + state-level percentile ranking",
      link: "/mht-cet-coaching/"
    },
    "mhtcet_11th": {
      title: "Target MHT-CET 99+ Percentile Track",
      batch: "CET Rankers 2027 Batch",
      duration: "1 Academic Year",
      focus: "Speed-accuracy formulas, PCB / PCM specialized streams",
      tests: "Weekly CBT mock tests on actual CET interface",
      link: "/mht-cet-coaching/"
    },
    "mhtcet_12th": {
      title: "MHT-CET Crash Course & Rapid Revision",
      batch: "CET 45-Day Sprint",
      duration: "45 Days / 60 Days",
      focus: "High-yield formulas, short tricks, daily timed mock papers",
      tests: "Daily CBT mocks simulating official CET Cell",
      link: "/mht-cet-crash-course/"
    },
    "mhtcet_dropper": {
      title: "MHT-CET Improvement & Repeaters Batch",
      batch: "CET Achievers",
      duration: "6 Months",
      focus: "Score enhancement for top COEP / VJTI / ICT / Govt Pharmacy seats",
      tests: "Full length mock tests and doubt clinics",
      link: "/mht-cet-test-series/"
    },
    "residential_10th": {
      title: "2-Year Integrated Residential Campus & Hostel Program",
      batch: "Gurukul Residential Batch",
      duration: "2 Academic Years (Full Boarding)",
      focus: "Integrated 11th & 12th + JEE/NEET/NDA coaching, supervised evening self-study, dining & hostel",
      tests: "24/7 faculty access, zero distraction, daily night testing",
      link: "/jee-neet-cet-residential-course/"
    },
    "residential_11th": {
      title: "1-Year Residential Hostel Intensive",
      batch: "Residential Class 12 Batch",
      duration: "1 Academic Year (Full Boarding)",
      focus: "Hostel stay, dedicated quiet library, daily test routines",
      tests: "Full simulation tests + mentor guidance",
      link: "/jee-neet-cet-residential-course/"
    },
    "residential_12th": {
      title: "Residential Crash & Mock Test Camp",
      batch: "Residential Boot Camp",
      duration: "3 Months (Pre-Exam)",
      focus: "Distraction-free campus stay, 12-hour structured daily study schedule",
      tests: "Daily full-length mock tests",
      link: "/jee-neet-cet-residential-course/"
    },
    "residential_dropper": {
      title: "Dropper Residential Dedicated Academy",
      batch: "Achiever Residential Batch",
      duration: "1 Year Full Boarding",
      focus: "Complete immersion in studies without home or travel distractions",
      tests: "Daily testing and one-on-one review",
      link: "/jee-neet-cet-residential-course/"
    }
  };

  const key = `${stream}_${currentClass}`;
  const result = roadmaps[key] || roadmaps["medical_10th"];

  return (
    <div className="bg-gradient-to-br from-[#0b1e3d] via-slate-900 to-[#071329] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-blue-900/40 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center space-y-2 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Course & Pathway Finder</span>
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Find Your Ideal Academic Roadmap & Batch Timing
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Select your target career exam and current academic stage to view your customized preparation curriculum and batch structure.
          </p>
        </div>

        {/* Step 1: Target Stream */}
        <div className="space-y-3 mb-6">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Target className="w-4 h-4 text-amber-400" />
            <span>1. Choose Your Target Exam</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { id: "medical", label: "NEET (Medical)", icon: "🩺" },
              { id: "engineering", label: "IIT-JEE (Engg)", icon: "⚙️" },
              { id: "mhtcet", label: "MHT-CET (State)", icon: "🎯" },
              { id: "residential", label: "Residential + Hostel", icon: "🏢" }
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setStream(item.id)}
                className={`py-3 px-3 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 border ${
                  stream === item.id
                    ? "bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/30 scale-102"
                    : "bg-slate-800/60 text-slate-300 border-slate-700/60 hover:bg-slate-800"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Current Class */}
        <div className="space-y-3 mb-8">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>2. Select Current Academic Standing</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { id: "10th", label: "10th Moving to 11th" },
              { id: "11th", label: "11th Moving to 12th" },
              { id: "12th", label: "Class 12th Appearing" },
              { id: "dropper", label: "12th Passed / Dropper" }
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentClass(item.id)}
                className={`py-3 px-3 rounded-2xl text-xs sm:text-sm font-semibold transition border ${
                  currentClass === item.id
                    ? "bg-amber-500 text-slate-950 font-bold border-amber-300 shadow-lg shadow-amber-500/20 scale-102"
                    : "bg-slate-800/60 text-slate-300 border-slate-700/60 hover:bg-slate-800"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Result Card */}
        <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-xl space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/80 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Recommended CSI Program
              </span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                {result.title}
              </h4>
            </div>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
              {result.batch}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Program Duration</strong>
                <span className="text-slate-300 text-xs sm:text-sm">{result.duration}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Core Pedagogy Focus</strong>
                <span className="text-slate-300 text-xs sm:text-sm">{result.focus}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 md:col-span-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block">Testing & Evaluation Framework</strong>
                <span className="text-slate-300 text-xs sm:text-sm">{result.tests}</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href={result.link}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition flex items-center justify-center gap-2 shadow-md shadow-blue-600/30"
            >
              <span>Explore Detailed Syllabus & Highlights</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={onOpenAdmission}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition flex items-center justify-center gap-2 shadow-md shadow-amber-500/20"
            >
              <span>Check Seat Availability & Fees</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

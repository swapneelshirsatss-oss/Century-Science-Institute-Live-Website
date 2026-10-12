import Link from "next/link";
import { Calendar, User, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { instituteInfo } from "@/data/instituteData";

export const metadata = {
  title: "JEE Main Registration Updates & Strategy Guide – CSI Nagpur",
  description: "Get essential updates on JEE Main registration dates, high-weightage chapters in Physics, Chemistry, Math, and expert tips from Century Science Institute.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/jee-main-2026-registration-updates/"
  }
};

export default function JeeBlogPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "JEE Main Registration Updates", href: "/jee-main-2026-registration-updates/" }
      ]} />

      <article className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
              Engineering Exam Strategy
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b1e3d] leading-tight">
              JEE Main Registration Updates & High-Yield Preparation Strategy
            </h1>
            <div className="flex items-center gap-4 text-xs text-slate-500 font-semibold border-b border-slate-200 pb-4">
              <span>Updated: November 11, 2025</span>
              <span>•</span>
              <span>By IIT/NIT Faculty Advisory, CSI Nagpur</span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            <img
              src="https://centuryscienceinstitute.in/wp-content/uploads/2025/11/Get-More-Information-about-IIT-JEE-Strategy-Guide-1024x536.png"
              alt="JEE Main Strategy Guide CSI Nagpur"
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-5 leading-relaxed text-sm sm:text-base">
            <p>
              Preparing for JEE Main requires a balanced combination of rigorous mathematical problem solving, conceptual clarity in Physics, and thorough precision in Chemistry. As the National Testing Agency (NTA) continues to emphasize application-based analytical questions, aspirants must adopt an agile revision roadmap.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 pt-4">
              1. Key Subject-Wise Priority Areas
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Physics:</strong> Modern Physics, Semiconductors, Current Electricity, Kinematics, and Thermodynamics carry consistent high-yield question weightage.</li>
              <li><strong>Chemistry:</strong> Coordination Compounds, Chemical Bonding, GOC (General Organic Chemistry), and Physical Chemistry stoichiometry require daily numerical drills.</li>
              <li><strong>Mathematics:</strong> Vector & 3D Geometry, Matrices & Determinants, Coordinate Geometry, and Differential Calculus are indispensable high-scoring sections.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 pt-4">
              2. How the Double Teaching Concept Prevents Board Anxiety
            </h2>
            <p>
              Many students struggle to maintain 75% in their 12th board examinations while chasing JEE cutoffs. At Century Science Institute, our <strong>Double Teaching Concept</strong> ensures 1 hour of descriptive derivation practice every single day, keeping board mastery synchronized with competitive problem solving.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-slate-900">Need Guidance from IIT/NIT Mentors?</h4>
              <p className="text-xs text-slate-500 mt-0.5">Schedule a diagnostic meeting at our Hudkeshwar Road campus in Nagpur.</p>
            </div>
            <Link
              href="/admission-form/"
              className="px-6 py-3 rounded-xl bg-[#0b1e3d] text-amber-400 font-bold text-xs hover:bg-blue-900 transition shrink-0"
            >
              Book Free Counselling →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

import Link from "next/link";
import { 
  Building2, 
  UserCheck, 
  Sparkles, 
  Phone, 
  Award, 
  CheckCircle2, 
  Target,
  ArrowRight
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import DoubleTeachingSection from "@/components/DoubleTeachingSection";
import { instituteInfo, campusFeatures } from "@/data/instituteData";

export const metadata = {
  /* Title and description restored to the live page's wording (SEO continuity). */
  title: "About Century Science Institute – Nagpur's Trusted Coaching",
  description: "Discover why CSI is Nagpur's most trusted institute for JEE, NEET & CET. Proven results & experienced faculty.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/toppers-jee-neet-mht-cet/"
  }
};

export default function AboutUsPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "About Us", href: "/toppers-jee-neet-mht-cet/" }
      ]} />

      <section className="bg-gradient-to-b from-[#16303F] via-[#0E1D27] to-[#0E1D27] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
            <Building2 className="w-3.5 h-3.5" />
            <span>15+ Years of Academic Excellence</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Century Science Institute, Nagpur
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Founded with a steadfast mission to provide personalized, high-yield coaching for NEET, IIT-JEE, and MHT-CET without commercial crowding or junior tutor outsourcing.
          </p>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl max-w-md mx-auto">
                <img
                  src="https://centuryscienceinstitute.in/wp-content/uploads/2025/07/Meghna-Maam-768x1076.jpeg"
                  alt="Director Mrs Meghna Marchatwar Century Science Institute"
                  className="w-full h-auto object-cover"
                />
                <div className="p-6 bg-slate-900 text-white">
                  <p className="text-xl font-bold">Mrs. Meghna Marchatwar</p>
                  <p className="text-xs text-amber-400 font-semibold mt-0.5">
                    M.Sc. in Biology, B.Ed., A.D.I.D. (15+ Years Experience)
                  </p>
                  <p className="text-xs text-slate-300 mt-2">
                    Director & Senior Academic Head, Century Science Institute
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
                  Our Educational Philosophy
                </span>
                <h2 className="text-3xl font-extrabold text-[#16303F]">
                  Directors are Tutors: True Mentorship Over Commercial Scale
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Century Science Institute was established to counter the biggest problem in contemporary entrance coaching: mass-market factory batches where students are reduced to roll numbers and foundational board preparation is completely neglected.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                At CSI, the leadership directly teaches in the classrooms. With a strict limit of 30–40 students per batch, Mrs. Meghna Marchatwar and our senior IIT/NIT faculties personally monitor each student’s weekly attendance, test scores, homework completion, and psychological readiness.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm">Self-Owned Campus</h3>
                  <p className="text-xs text-slate-500 mt-1">Dedicated institutional building on Hudkeshwar Road with zero commercial distractions.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm">Residential Facility</h3>
                  <p className="text-xs text-slate-500 mt-1">Safe and supervised on-campus hostel and dining for outstation students.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DoubleTeachingSection />
    </div>
  );
}

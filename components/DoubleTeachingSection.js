import Link from "next/link";
import { 
  Layers, 
  UserCheck, 
  Building2, 
  BookOpenCheck, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { instituteInfo } from "@/data/instituteData";

export default function DoubleTeachingSection({ onOpenAdmission }) {
  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Proprietary CSI Academic Methodology</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16303F] tracking-tight">
            The Unique Double Teaching Concept & Director Mentorship
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Unlike commercial coaching factories where junior tutors rotate and board preparation is neglected, Century Science Institute operates on a proven dual-focus formula led by seasoned director-educators.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Card 1: Double Teaching Concept */}
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-blue-200/80 shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-[#16303F] flex items-center justify-center text-amber-400 shadow-md shadow-blue-950/20">
                <Layers className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-extrabold text-blue-700 uppercase tracking-widest">
                  Daily Structured Formula
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  Double Teaching Concept (1 Hr + 1 Hr)
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Most students struggle when competitive entrance prep ignores board descriptive writing, or board coaching fails to build entrance aptitude. CSI solves this permanently:
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="w-7 h-7 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">
                      Hour 1: Board & CBSE Descriptive Theory
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Strict adherence to State Board & CBSE textbooks, derivation writing, definitions, and board exam scoring techniques.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">
                      Hour 2: Competitive Entrance Application
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Immediate high-level numerical drills, MCQs, shortcut methods, and speed application for NEET, JEE & MHT-CET.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">
                      Daily Doubt Clearing & Micro Testing
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Same-day doubt redressal so backlogs never build up before weekend mock examinations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/11-12-th-science-coaching/"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 group"
              >
                <span>Read more about Board + Entrance integration</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2: Directors are Tutors & Direct Accountability */}
          <div className="bg-gradient-to-br from-slate-900 via-[#16303F] to-[#0B1820] text-white rounded-3xl p-8 sm:p-10 border border-blue-900/40 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20">
                <UserCheck className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest">
                  Direct Subject Accountability
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  Directors are Tutors: Led by Mrs. Meghna Marchatwar
                </h3>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-amber-400 p-0.5">
                    <img
                      src="https://centuryscienceinstitute.in/wp-content/uploads/2025/07/Meghna-Maam-768x1076.jpeg"
                      alt="Director Mrs. Meghna Marchatwar Century Science Institute Nagpur"
                      className="w-full h-full object-cover object-top rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-white">Mrs. Meghna Marchatwar</h4>
                    <p className="text-xs text-amber-300">M.Sc. in Biology, B.Ed., A.D.I.D. (15+ Years Experience)</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  &ldquo;We believe students thrive when the leadership is directly engaged in the classroom. At CSI, we know every student by name, track their weekly progress, and mentor them like family.&rdquo;
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Personal mentoring with small batch sizes (30–40 students max)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero faculty turnover during the academic year</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent parent-teacher interactive performance sessions</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Self-owned private campus on Hudkeshwar Road with library & labs</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenAdmission}
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-600 text-slate-950 transition shadow-lg shadow-amber-500/20"
              >
                Schedule Personal Counselling with Directors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

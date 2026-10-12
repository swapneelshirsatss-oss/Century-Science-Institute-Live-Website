import Link from "next/link";
import { Award, Trophy, Star, Phone, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TopperGrid from "@/components/TopperGrid";
import { instituteInfo } from "@/data/instituteData";

export const metadata = {
  title: "CSI NEET, JEE, CET Top Rankers from Nagpur",
  description: "CSI Toppers – NEET, JEE, CET Top Rankers from Nagpur Meet the NEET, JEE & CET toppers from Century Science Institute, Nagpur. Consistent top ranks, 100% success stories.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/topper-jee-neet-cet-12th-sci/"
  }
};

export default function ToppersPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Toppers & Results", href: "/topper-jee-neet-cet-12th-sci/" }
      ]} />

      <section className="bg-gradient-to-b from-[#16303F] via-[#0E1D27] to-[#0E1D27] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Proven Student Achievements</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Century Science Institute Hall of Fame
          </h1>
          <p className="text-base sm:text-lg text-slate-300">
            Celebrate our toppers in NEET, IIT-JEE, MHT-CET, and Class 12 Science Board examinations who transformed their hard work into top ranks.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <TopperGrid showFilter={true} />

          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 text-center space-y-4 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-[#16303F]">
              Want to be in next year&apos;s Hall of Fame?
            </h3>
            <p className="text-sm text-slate-600">
              Join Nagpur&apos;s most disciplined and focused entrance coaching. Early admission benefits and scholarship diagnostics are now open for 2026–27.
            </p>
            <div className="pt-2">
              <Link
                href="/admission-form/"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition shadow-md"
              >
                <span>Enroll Online Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

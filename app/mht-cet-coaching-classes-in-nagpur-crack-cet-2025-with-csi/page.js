import Link from "next/link";
import { Calendar, User, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { instituteInfo } from "@/data/instituteData";

export const metadata = {
  title: "MHT-CET Coaching Classes in Nagpur: Crack CET with CSI",
  description: "Learn how the Double Teaching Concept and 50+ computer-based mock tests enable Nagpur students to score 99+ percentile in MHT-CET with Century Science Institute.",
  alternates: {
    canonical: "https://centuryscienceinstitute.in/mht-cet-coaching-classes-in-nagpur-crack-cet-2025-with-csi/"
  }
};

export default function CetBlogPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "Crack MHT-CET with CSI", href: "/mht-cet-coaching-classes-in-nagpur-crack-cet-2025-with-csi/" }
      ]} />

      <article className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">
              State Entrance Strategy
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#16303F] leading-tight">
              MHT-CET Coaching Classes in Nagpur: Crack CET with Century Science Institute
            </h1>
            <div className="flex items-center gap-4 text-xs text-slate-500 font-semibold border-b border-slate-200 pb-4">
              <span>Published: September 28, 2025</span>
              <span>•</span>
              <span>By CSI Academic Advisory Team</span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            <img
              src="https://centuryscienceinstitute.in/wp-content/uploads/2025/09/2f496abb-550e-4955-a5ae-ceae5b14abf8.png"
              alt="MHT-CET Coaching Classes in Nagpur CSI"
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-5 leading-relaxed text-sm sm:text-base">
            <p>
              MHT-CET serves as the gateway to Maharashtra’s premier state engineering and pharmacy colleges, including COEP Technological University, VJTI Mumbai, and ICT Mumbai. While based on the State Board curriculum, the examination tests intense calculation speed and rapid question discrimination.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 pt-4">
              Proven Path to the 99+ Percentile Club
            </h2>
            <p>
              Students who score in the top 1 percentile of MHT-CET follow a strict 3-tier preparation model:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mastering State Board Textbooks:</strong> Unlike JEE which references NCERT, CET questions directly quote State Board lines and definitions.</li>
              <li><strong>Shortcut Formula Drills:</strong> With 150 questions to solve in 180 minutes, questions must be answered in under 70 seconds.</li>
              <li><strong>CBT Lab Simulation:</strong> Simulating real exam anxiety with over 50 full-length computer-based tests.</li>
            </ul>

            <p>
              At Century Science Institute, our top rankers like Ruchi Ambatkar (99.42 %ile) achieved their dream engineering seats through our structured test series and daily doubt clinics.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-slate-900">Admissions Open for MHT-CET Batches</h4>
              <p className="text-xs text-slate-500 mt-0.5">Separate PCM and PCB batches with limited capacity.</p>
            </div>
            <Link
              href="/admission-form/"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition shrink-0"
            >
              Enroll for MHT-CET →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

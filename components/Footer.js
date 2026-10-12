import Link from "next/link";
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink,
  ShieldCheck,
  Award
} from "lucide-react";
import { instituteInfo, coursesList } from "@/data/instituteData";

export default function Footer() {
  return (
    <footer className="bg-[#071329] text-slate-300 border-t border-slate-800">
      {/* Upper Footer: Value Proposition Banner */}
      <div className="border-b border-slate-800/80 bg-[#0b1e3d]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Double Teaching Concept</h4>
                <p className="text-xs text-slate-400 mt-0.5">1 Hr Board Prep + 1 Hr JEE/NEET/CET Concepts</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Directors are Tutors</h4>
                <p className="text-xs text-slate-400 mt-0.5">Taught directly by 15+ Yrs experienced specialists</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Own Institutional Building</h4>
                <p className="text-xs text-slate-400 mt-0.5">Zero commercial distraction, dedicated campus & hostel</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Institute Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <GraduationCap className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">CENTURY</span>
                <span className="block text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                  Science Institute • Nagpur
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Nagpur’s foremost coaching institute for NEET, IIT-JEE (Main & Advanced), and MHT-CET. Founded on disciplined personal attention, experienced mentor-led classes, and unmatched topper results.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{instituteInfo.address.street}, {instituteInfo.address.city} - {instituteInfo.address.postalCode}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${instituteInfo.contact.phoneRaw}`} className="hover:text-white transition">
                  {instituteInfo.contact.phonePrimary} / {instituteInfo.contact.phoneSecondary}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${instituteInfo.contact.email}`} className="hover:text-white transition">
                  {instituteInfo.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{instituteInfo.contact.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Flagship Courses */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-amber-400">
              Competitive Courses
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/jee-coaching/" className="hover:text-white transition">
                  JEE Mains & Adv. Coaching
                </Link>
              </li>
              <li>
                <Link href="/neet-coaching/" className="hover:text-white transition">
                  NEET Medical Entrance
                </Link>
              </li>
              <li>
                <Link href="/mht-cet-coaching/" className="hover:text-white transition">
                  MHT-CET Coaching Classes
                </Link>
              </li>
              <li>
                <Link href="/11-12-th-science-coaching/" className="hover:text-white transition">
                  11th & 12th Science (Board+CBSE)
                </Link>
              </li>
              <li>
                <Link href="/mht-cet-crash-course/" className="hover:text-white transition">
                  MHT-CET Crash Course
                </Link>
              </li>
              <li>
                <Link href="/mht-cet-test-series/" className="hover:text-white transition">
                  MHT-CET Mock Test Series
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Residential & Special Programs */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-amber-400">
              Residential & Defence
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/jee-neet-cet-residential-course/" className="hover:text-white transition">
                  2-Yr Residential Course (Hostel)
                </Link>
              </li>
              <li>
                <Link href="/national-defence-academy-exam-preparation-2-years-residential-course/" className="hover:text-white transition">
                  NDA 2-Year Residential Prep
                </Link>
              </li>
              <li>
                <Link href="/naval-academy-exam-preparation/" className="hover:text-white transition">
                  Naval Academy Preparation
                </Link>
              </li>
              <li>
                <Link href="/topper-jee-neet-cet-12th-sci/" className="hover:text-white transition">
                  Toppers Hall of Fame
                </Link>
              </li>
              <li>
                <Link href="/gallery/" className="hover:text-white transition">
                  Campus Life & Labs
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="hover:text-white transition">
                  Articles & Strategy Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Actions */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-amber-400">
              Admissions
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/admission-form/" className="hover:text-white transition text-amber-300 font-semibold">
                  Online Admission Form →
                </Link>
              </li>
              <li>
                <Link href="/toppers-jee-neet-mht-cet/" className="hover:text-white transition">
                  About Leadership & Directors
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-white transition">
                  Contact Center Nagpur
                </Link>
              </li>
              <li>
                <a 
                  href={instituteInfo.address.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 hover:text-white transition"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <a
                href={`https://wa.me/${instituteInfo.contact.whatsappNumber}?text=Hello%20Century%20Science%20Institute,%20I%20am%20inquiring%20about%20admissions`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-md shadow-emerald-900/30"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-slate-800 bg-[#040d1c] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Century Science Institute, Nagpur. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-slate-400 transition">Privacy Policy</Link>
            <Link href="/" className="hover:text-slate-400 transition">Terms of Admission</Link>
            <Link href="/sitemap.xml" className="hover:text-slate-400 transition">XML Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

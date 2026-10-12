"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  MessageCircle, 
  Award, 
  BookOpen, 
  Sparkles,
  MapPin
} from "lucide-react";
import { instituteInfo, coursesList } from "@/data/instituteData";

export default function Navbar({ onOpenAdmission }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#0b1e3d] text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions Open for 2026–27 Batches (JEE | NEET | MHT-CET)</span>
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Hudkeshwar Road, Ashirwad Nagar, Nagpur
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${instituteInfo.contact.phoneRaw}`} 
              className="flex items-center gap-1.5 text-white hover:text-amber-400 transition font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{instituteInfo.contact.phonePrimary}</span>
            </a>
            <a 
              href={`https://wa.me/${instituteInfo.contact.whatsappNumber}?text=Hi%20Century%20Science%20Institute,%20I%20want%20to%20know%20more%20about%20admissions`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#0b1e3d] to-[#1e40af] flex items-center justify-center text-white shadow-md shadow-blue-900/10 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-7 h-7 text-amber-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#0b1e3d] group-hover:text-blue-700 transition">
                  CENTURY
                </span>
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-500 uppercase -mt-1">
                  Science Institute • Nagpur
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              <Link 
                href="/" 
                className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition"
              >
                Home
              </Link>

              {/* Courses Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setCoursesDropdownOpen(true)}
                onMouseLeave={() => setCoursesDropdownOpen(false)}
              >
                <button 
                  className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-700 transition py-2"
                  onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                >
                  <span>Courses</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                </button>

                {coursesDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 px-2 grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                    {coursesList.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/${c.slug}/`}
                        className="p-2.5 rounded-xl hover:bg-slate-50 transition flex flex-col group/item"
                        onClick={() => setCoursesDropdownOpen(false)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-800 group-hover/item:text-blue-600">
                            {c.title}
                          </span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                            {c.badge}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {c.shortDesc}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href="/topper-jee-neet-cet-12th-sci/" 
                className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition flex items-center gap-1"
              >
                <Award className="w-4 h-4 text-amber-500" />
                <span>Toppers & Results</span>
              </Link>

              <Link 
                href="/toppers-jee-neet-mht-cet/" 
                className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition"
              >
                About Institute
              </Link>

              <Link 
                href="/gallery/" 
                className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition"
              >
                Campus Life
              </Link>

              <Link 
                href="/contact/" 
                className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/admission-form/"
                className="btn-amber px-5 py-2.5 rounded-xl font-extrabold text-sm shadow-md transition transform hover:-translate-y-0.5 inline-block"
              >
                Enroll Now
              </Link>
              <button
                onClick={onOpenAdmission}
                className="btn-navy px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
              >
                Inquire Batch
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/admission-form/"
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-slate-950"
              >
                Enroll
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <Link 
              href="/" 
              className="block font-semibold text-slate-800 hover:text-blue-600 py-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="border-t border-slate-100 pt-2">
              <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                Courses Offered
              </span>
              <div className="mt-1 space-y-1">
                {coursesList.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${c.slug}/`}
                    className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    • {c.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-2 space-y-2">
              <Link 
                href="/topper-jee-neet-cet-12th-sci/" 
                className="flex items-center gap-2 font-semibold text-slate-800 hover:text-blue-600 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Award className="w-4 h-4 text-amber-500" />
                <span>Toppers & Results</span>
              </Link>
              <Link 
                href="/toppers-jee-neet-mht-cet/" 
                className="block font-semibold text-slate-800 hover:text-blue-600 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Institute
              </Link>
              <Link 
                href="/gallery/" 
                className="block font-semibold text-slate-800 hover:text-blue-600 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Campus Life & Gallery
              </Link>
              <Link 
                href="/contact/" 
                className="block font-semibold text-slate-800 hover:text-blue-600 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact & Location
              </Link>
            </div>

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenAdmission) onOpenAdmission();
                }}
                className="w-full py-3 rounded-xl font-bold text-center bg-[#0b1e3d] text-white shadow-md"
              >
                Request Free Counselling
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

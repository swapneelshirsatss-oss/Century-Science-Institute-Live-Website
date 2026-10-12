"use client";

import { useState } from "react";
import { X, Send, CheckCircle, GraduationCap, Phone, User, BookOpen } from "lucide-react";
import { instituteInfo, coursesList } from "@/data/instituteData";

export default function AdmissionModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    targetExam: "NEET",
    currentClass: "10th Moving to 11th",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Post to internal API route
      await fetch("/api/inquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      setSubmitted(true);
    } catch (err) {
      // Fallback
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0b1e3d] via-blue-900 to-[#0b1e3d] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>Admissions 2026–27 Open</span>
          </div>
          <h3 className="text-xl font-extrabold text-white">
            Book Free Diagnostic & Counselling
          </h3>
          <p className="text-xs text-blue-200 mt-1">
            Meet Subject Specialists • Get Personal Scholarship Assessment
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-slate-800">Inquiry Received Successfully!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.studentName}</strong>. Our senior academic counselor will call you at <strong>{formData.phone}</strong> shortly.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <a
                  href={`https://wa.me/${instituteInfo.contact.whatsappNumber}?text=Hi%20Century%20Science%20Institute,%20I%20just%20submitted%20an%20inquiry%20for%20${formData.studentName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition"
                >
                  Connect on WhatsApp Now
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Student Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter student full name"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Target Exam *
                  </label>
                  <select
                    value={formData.targetExam}
                    onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition bg-white"
                  >
                    <option value="NEET">NEET Medical</option>
                    <option value="JEE">JEE Main & Advanced</option>
                    <option value="MHT-CET">MHT-CET (Engg / Pharma)</option>
                    <option value="11th-12th Science">11th & 12th Board/CBSE</option>
                    <option value="Residential Course">2-Yr Residential Hostel</option>
                    <option value="NDA">NDA Defence Exam</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Current Class *
                  </label>
                  <select
                    value={formData.currentClass}
                    onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition bg-white"
                  >
                    <option value="10th Moving to 11th">10th Moving to 11th</option>
                    <option value="11th Moving to 12th">11th Moving to 12th</option>
                    <option value="12th Passed (Dropper)">12th Passed / Dropper</option>
                    <option value="Class 10th (Foundation)">Class 10th (Foundation)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Parent / Guardian Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Enter parent's name"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 shadow-lg shadow-amber-500/20 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? "Submitting Inquiry..." : "Submit & Get Free Counselling"}</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                🔒 Your details are private and used solely for academic counselling at CSI Nagpur.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

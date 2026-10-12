"use client";

import { useState } from "react";
import { Send, CheckCircle, GraduationCap, Phone, User, BookOpen, Clock, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { instituteInfo, coursesList } from "@/data/instituteData";

export default function AdmissionFormPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    gender: "Male",
    currentSchool: "",
    targetExam: "NEET Medical",
    currentClass: "10th Moving to 11th",
    board: "State Board (Maharashtra)",
    residentialRequired: "No",
    address: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState("");

  // Map this form's fields to the enquiry API and only show success when delivery is confirmed.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/inquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.studentName,
          phone: formData.phone,
          course: formData.targetExam,
          studentClass: formData.currentClass,
          message: [
            formData.parentName && `Parent: ${formData.parentName}`,
            formData.email && `Email: ${formData.email}`,
            formData.currentSchool && `School: ${formData.currentSchool}`,
            `Board: ${formData.board}`,
            `Hostel needed: ${formData.residentialRequired}`,
            formData.address && `Address: ${formData.address}`,
          ].filter(Boolean).join(" | "),
          page: "/admission-form/",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || "We couldn't send your form online.");
      setSubmitted(true);
    } catch (err) {
      setError(`${err.message} Please call or WhatsApp us on 94224 75665.`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-0">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Admission Form", href: "/admission-form/" }
      ]} />

      <section className="bg-gradient-to-b from-[#16303F] via-[#0E1D27] to-[#0E1D27] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Session 2026–27</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Online Admission & Diagnostic Test Registration
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Fill the form below to secure your seat at Century Science Institute Nagpur. Our academic counselors will schedule your diagnostic assessment and personal meeting.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-5">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Application Submitted Successfully!
                </h2>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.studentName}</strong>. Your admission inquiry has been logged in our system. Director Mrs. Meghna Marchatwar&apos;s team will contact you at <strong>{formData.phone}</strong> shortly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${instituteInfo.contact.whatsappNumber}?text=Hi%20Century%20Science%20Institute,%20I%20have%20submitted%20admission%20form%20for%20${formData.studentName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition"
                  >
                    Confirm via WhatsApp
                  </a>
                  <a
                    href={`tel:${instituteInfo.contact.phoneRaw}`}
                    className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition"
                  >
                    Call Center Office
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-lg font-bold text-[#16303F]">Student & Academic Information</h2>
                  <p className="text-xs text-slate-500">Please provide accurate contact details for batch scheduling.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="af-student" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Student Full Name *
                    </label>
                    <input
                      id="af-student"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="af-parent" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      id="af-parent"
                      type="text"
                      required
                      placeholder="Parent's name"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="af-phone" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Contact Mobile Number *
                    </label>
                    <input
                      id="af-phone"
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="af-email" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      id="af-email"
                      type="email"
                      placeholder="your.email@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="af-exam" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Target Exam *
                    </label>
                    <select
                      id="af-exam"
                      value={formData.targetExam}
                      onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 text-sm outline-none bg-white"
                    >
                      <option value="NEET Medical">NEET Medical</option>
                      <option value="IIT-JEE Main & Advanced">IIT-JEE (Mains+Adv)</option>
                      <option value="MHT-CET (PCM/PCB)">MHT-CET (State)</option>
                      <option value="11th & 12th Board">11th & 12th Board</option>
                      <option value="Residential 2-Year">Residential Hostel</option>
                      <option value="NDA Officer Entry">NDA Defence Entry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="af-class" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Current Class *
                    </label>
                    <select
                      id="af-class"
                      value={formData.currentClass}
                      onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 text-sm outline-none bg-white"
                    >
                      <option value="10th Moving to 11th">10th Moving to 11th</option>
                      <option value="11th Moving to 12th">11th Moving to 12th</option>
                      <option value="12th Passed / Dropper">12th Passed (Dropper)</option>
                      <option value="Class 10th Foundation">Class 10th Foundation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="af-hostel" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Residential Hostel?
                    </label>
                    <select
                      id="af-hostel"
                      value={formData.residentialRequired}
                      onChange={(e) => setFormData({ ...formData, residentialRequired: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 text-sm outline-none bg-white"
                    >
                      <option value="No">No (Day Scholar)</option>
                      <option value="Yes">Yes (Hostel & Mess)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="af-address" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Current Residential Address in Nagpur or District
                  </label>
                  <textarea
                    id="af-address"
                    rows={2}
                    placeholder="Enter city / area"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 text-sm outline-none"
                  />
                </div>

                <div className="pt-2">
                  {error && (<p role="alert" className="text-sm font-semibold text-red-700 bg-red-50 border-l-4 border-red-600 px-4 py-3">{error}</p>)}
                <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 shadow-lg shadow-amber-500/20 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? "Submitting Application..." : "Submit Admission Application"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import DocPage from "@/components/site/DocPage";
import { instituteInfo } from "@/data/instituteData";
import { normalizeMobile, PHONE_ERROR } from "@/lib/phone";

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
  const [fieldErr, setFieldErr] = useState({});
  // Field errors are shown under the field, linked with aria-describedby (WCAG 3.3.1)
  const errProps = (k) => fieldErr[k] ? { "aria-invalid": "true", "aria-describedby": `${k}-err` } : {};
  const errText = (k) => fieldErr[k] ? <p id={`${k}-err`} className="x-field-err">{fieldErr[k]}</p> : null;
  const set = (key) => (e) => setFormData({ ...formData, [key]: e.target.value });

  // Map this form's fields to the enquiry API and only show success when delivery is confirmed.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!formData.studentName.trim()) errs["af-student"] = "Enter the student's full name.";
    if (!formData.parentName.trim()) errs["af-parent"] = "Enter the parent or guardian's name.";
    const phone = normalizeMobile(formData.phone);
    if (!phone) errs["af-phone"] = PHONE_ERROR;
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs["af-email"] = "Enter a valid email, or leave it empty.";
    setFieldErr(errs);
    const first = Object.keys(errs)[0];
    if (first) { document.getElementById(first)?.focus(); return; }
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/inquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.studentName,
          phone,
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

  const c = instituteInfo.contact;
  const process = [
    ["1. Submit this form", "Takes about two minutes."],
    ["2. Counsellor call", "Our academic counselors call you to schedule your diagnostic assessment and personal meeting."],
    ["3. Diagnostic test and meeting", "On campus at Hudkeshwar Road, with the director's team."],
  ];

  return (
    <DocPage
      crumbs={[{ label: "Home", href: "/" }, { label: "Admission Form", href: "/admission-form/" }]}
      pill="Academic Session 2027–28"
      title="Online Admission & Diagnostic Test Registration"
      lead="Fill the form below to secure your seat at Century Science Institute Nagpur. Our academic counselors will schedule your diagnostic assessment and personal meeting."
      tabs={false}
      about={process}
      aboutTitle="What happens next"
      cta={false}
      sections={[
        submitted
          ? {
              id: "form",
              label: "Application received",
              body: (
                <div role="status">
                  <h2 style={{ margin: "0 0 8px", fontSize: 24 }}>Application Submitted Successfully!</h2>
                  <p>
                    Thank you, <strong>{formData.studentName}</strong>. Your admission inquiry has been logged in our system. Director Mrs. Meghna Marchatwar&apos;s team will contact you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <div className="x-ctas" style={{ marginTop: 16 }}>
                    <a className="x-btn x-btn-ink x-btn-sm" href={`https://wa.me/${c.whatsappNumber}?text=Hi%20Century%20Science%20Institute,%20I%20have%20submitted%20admission%20form%20for%20${encodeURIComponent(formData.studentName)}`} target="_blank" rel="noopener noreferrer">Confirm via WhatsApp</a>
                    <a className="x-btn x-btn-line-ink x-btn-sm" href={`tel:${c.phoneRaw}`}>Call Center Office</a>
                  </div>
                </div>
              ),
            }
          : {
              id: "form",
              label: "Student & Academic Information",
              body: (
                <form onSubmit={handleSubmit} className="x-form" noValidate>
                  <p style={{ margin: 0 }}>Please provide accurate contact details for batch scheduling.</p>
                  <div className="x-form-row">
                    <div className="x-field">
                      <label htmlFor="af-student">Student Full Name *</label>
                      <input id="af-student" {...errProps("af-student")} type="text" required autoComplete="name" placeholder="e.g. Rahul Sharma" value={formData.studentName} onChange={set("studentName")} />
                      {errText("af-student")}
                    </div>
                    <div className="x-field">
                      <label htmlFor="af-parent">Parent / Guardian Name *</label>
                      <input id="af-parent" {...errProps("af-parent")} type="text" required placeholder="Parent's name" value={formData.parentName} onChange={set("parentName")} />
                      {errText("af-parent")}
                    </div>
                  </div>
                  <div className="x-form-row">
                    <div className="x-field">
                      <label htmlFor="af-phone">Contact Mobile Number *</label>
                      <input id="af-phone" {...errProps("af-phone")} type="tel" required inputMode="tel" autoComplete="tel" placeholder="10-digit number" value={formData.phone} onChange={set("phone")} />
                      {errText("af-phone")}
                    </div>
                    <div className="x-field">
                      <label htmlFor="af-email">Email Address (Optional)</label>
                      <input id="af-email" {...errProps("af-email")} type="email" autoComplete="email" placeholder="your.email@gmail.com" value={formData.email} onChange={set("email")} />
                      {errText("af-email")}
                    </div>
                  </div>
                  <div className="x-form-row x-form-row-3">
                    <div className="x-field">
                      <label htmlFor="af-exam">Target Exam *</label>
                      <select id="af-exam" value={formData.targetExam} onChange={set("targetExam")}>
                        <option value="NEET Medical">NEET Medical</option>
                        <option value="IIT-JEE Main & Advanced">IIT-JEE (Mains+Adv)</option>
                        <option value="MHT-CET (PCM/PCB)">MHT-CET (State)</option>
                        <option value="11th & 12th Board">11th & 12th Board</option>
                        <option value="Residential 2-Year">Residential Hostel</option>
                        <option value="NDA Officer Entry">NDA Defence Entry</option>
                      </select>
                    </div>
                    <div className="x-field">
                      <label htmlFor="af-class">Current Class *</label>
                      <select id="af-class" value={formData.currentClass} onChange={set("currentClass")}>
                        <option value="10th Moving to 11th">10th Moving to 11th</option>
                        <option value="11th Moving to 12th">11th Moving to 12th</option>
                        <option value="12th Passed / Dropper">12th Passed (Dropper)</option>
                        <option value="Class 10th Foundation">Class 10th Foundation</option>
                      </select>
                    </div>
                    <div className="x-field">
                      <label htmlFor="af-hostel">Residential Hostel?</label>
                      <select id="af-hostel" value={formData.residentialRequired} onChange={set("residentialRequired")}>
                        <option value="No">No (Day Scholar)</option>
                        <option value="Yes">Yes (Hostel & Mess)</option>
                      </select>
                    </div>
                  </div>
                  <div className="x-field">
                    <label htmlFor="af-address">Current Residential Address in Nagpur or District</label>
                    <textarea id="af-address" rows={2} placeholder="Enter city / area" value={formData.address} onChange={set("address")} />
                  </div>
                  {error && <p role="alert" className="x-modal-err" style={{ margin: 0 }}>{error}</p>}
                  <button type="submit" className="x-btn x-btn-gold" disabled={submitting} style={{ width: "100%" }}>
                    {submitting ? "Submitting Application..." : "Submit Admission Application"}
                  </button>
                </form>
              ),
            },
      ]}
    />
  );
}

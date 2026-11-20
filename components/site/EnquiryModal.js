"use client";

import { useEffect, useRef, useState } from "react";
import { normalizeMobile, PHONE_ERROR } from "@/lib/phone";
import { enquiryWhatsAppUrl, pushToWhatsApp } from "@/lib/whatsapp";

const EXAMS = ["JEE", "NEET", "MHT-CET", "11th & 12th Science", "10th test series", "Residential course", "NDA / Naval Academy"];
const CLASSES = ["Class 10", "Class 11", "Class 12", "12th pass (repeater)"];

/**
 * Site-wide "Book free counselling" form.
 * On submit it opens the institute's WhatsApp with the details typed in; the student presses Send.
 * The lead is also posted to /api/inquiry for the sheet/webhook when one is configured.
 */
export default function EnquiryModal({ isOpen, onClose }) {
  const [state, setState] = useState("idle"); // idle | sent
  const [waUrl, setWaUrl] = useState("");
  const [fieldErr, setFieldErr] = useState({}); // { name?: string, phone?: string }
  const [form, setForm] = useState({ name: "", phone: "", course: "JEE", studentClass: "Class 11", parentName: "", website: "" });
  const dialogRef = useRef(null);
  const firstField = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.activeElement;
    firstField.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") { onClose(); return; }
      // Keep Tab / Shift+Tab inside the dialog while it is open
      if (e.key !== "Tab" || !dialogRef.current) return;
      const f = [...dialogRef.current.querySelectorAll('a[href],button:not([disabled]),input:not([tabindex="-1"]),select,textarea')]
        .filter((el) => el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      else if (!dialogRef.current.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus?.();
    };
  }, [isOpen, onClose]);

  useEffect(() => { if (!isOpen) { setState("idle"); setFieldErr({}); } }, [isOpen]);

  if (!isOpen) return null;

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (fieldErr[k]) setFieldErr((x) => ({ ...x, [k]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    // Check fields first; say what is wrong next to the field and move focus there (WCAG 3.3.1)
    const errs = {};
    if (!form.name.trim()) errs.name = "Enter the student's name.";
    const phone = normalizeMobile(form.phone);
    if (!phone) errs.phone = PHONE_ERROR;
    setFieldErr(errs);
    if (errs.name || errs.phone) {
      dialogRef.current?.querySelector(errs.name ? "#enq-name" : "#enq-phone")?.focus();
      return;
    }
    const url = enquiryWhatsAppUrl([
      ["Student", form.name], ["Mobile", phone], ["Exam", form.course], ["Class", form.studentClass],
      ["Parent", form.parentName], ["Page", window.location.pathname],
    ]);
    setWaUrl(url);
    // Also record the lead (sheet/webhook) when the host has one; WhatsApp is the main channel, so a failure here is ignored.
    // keepalive lets the request finish while the page navigates to WhatsApp.
    fetch("/api/inquiry/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({ ...form, phone, message: form.parentName ? `Parent: ${form.parentName}` : "", page: window.location.pathname }),
    }).catch(() => {});
    setState("sent");
    pushToWhatsApp(url);
  };

  return (
    <div className="x-modal-back" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="x-modal" role="dialog" aria-modal="true" aria-labelledby="enq-title" ref={dialogRef}>
        <div className="x-modal-head">
          <p className="x-kicker">Admissions open for 2027-28</p>
          <h2 id="enq-title" className="x-big">Book free counselling</h2>
          <button type="button" className="x-modal-x" onClick={onClose} aria-label="Close">Close</button>
        </div>

        {state === "sent" ? (
          <div className="x-modal-body">
            <p className="x-modal-ok" role="status">Thank you, {form.name}. Opening WhatsApp: press Send there and our counsellor will reply.</p>
            <div className="x-ctas" style={{ marginTop: 20 }}>
              <a className="x-btn x-btn-gold" href={waUrl}>Open WhatsApp</a>
              <button type="button" className="x-btn x-btn-ink" onClick={onClose}>Close</button>
            </div>
          </div>
        ) : (
          <form className="x-modal-body x-form" onSubmit={submit} noValidate>
            <div className="x-field">
            <label htmlFor="enq-name">Student name</label>
            <input id="enq-name" ref={firstField} required autoComplete="name" value={form.name} onChange={set("name")}
              aria-invalid={fieldErr.name ? "true" : undefined} aria-describedby={fieldErr.name ? "enq-name-err" : undefined} />
            {fieldErr.name && <p id="enq-name-err" className="x-field-err">{fieldErr.name}</p>}
            </div>
            <div className="x-field">
            <label htmlFor="enq-phone">Mobile or WhatsApp number</label>
            <input id="enq-phone" required type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={set("phone")}
              aria-invalid={fieldErr.phone ? "true" : undefined} aria-describedby={fieldErr.phone ? "enq-phone-err" : undefined} />
            {fieldErr.phone && <p id="enq-phone-err" className="x-field-err">{fieldErr.phone}</p>}
            </div>
            <div className="x-form-row">
              <label>Exam
                <select value={form.course} onChange={set("course")}>{EXAMS.map((x) => <option key={x}>{x}</option>)}</select>
              </label>
              <label>Class
                <select value={form.studentClass} onChange={set("studentClass")}>{CLASSES.map((x) => <option key={x}>{x}</option>)}</select>
              </label>
            </div>
            <label>Parent&apos;s name (optional)
              <input autoComplete="off" value={form.parentName} onChange={set("parentName")} />
            </label>
            {/* Honeypot for spam bots: hidden from people and screen readers */}
            <input className="x-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={set("website")} />

            <button type="submit" className="x-btn x-btn-gold" style={{ width: "100%", marginTop: 8 }}>
              Book free counselling
            </button>
            <p className="x-modal-note">Opens WhatsApp with your details filled in. We use your number only about admission.</p>
          </form>
        )}
      </div>
    </div>
  );
}

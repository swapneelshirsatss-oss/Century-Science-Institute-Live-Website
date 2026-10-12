"use client";

import { useEffect, useRef, useState } from "react";
import { contact } from "@/data/site";
import { normalizeMobile, PHONE_ERROR } from "@/lib/phone";

const EXAMS = ["JEE", "NEET", "MHT-CET", "11th & 12th Science", "10th test series", "Residential course", "NDA / Naval Academy"];
const CLASSES = ["Class 10", "Class 11", "Class 12", "12th pass (repeater)"];

/**
 * Site-wide "Book a free demo class" form.
 * Shows a real result: success only when the API confirms delivery; otherwise the error
 * plus call and WhatsApp options, so an enquiry is never silently lost.
 */
export default function EnquiryModal({ isOpen, onClose }) {
  const [state, setState] = useState("idle"); // idle | sending | sent | failed
  const [error, setError] = useState("");
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

  useEffect(() => { if (!isOpen) { setState("idle"); setError(""); setFieldErr({}); } }, [isOpen]);

  if (!isOpen) return null;

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (fieldErr[k]) setFieldErr((x) => ({ ...x, [k]: undefined }));
  };

  const submit = async (e) => {
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
    setState("sending"); setError("");
    try {
      const res = await fetch("/api/inquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          phone,
          message: form.parentName ? `Parent: ${form.parentName}` : "",
          page: window.location.pathname,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || "We couldn't send your enquiry online.");
      setState("sent");
    } catch (err) {
      setError(err.message);
      setState("failed");
    }
  };

  const waText = encodeURIComponent(`Hello CSI, I'd like a free demo class. Name: ${form.name}. Exam: ${form.course}. Class: ${form.studentClass}.`);

  return (
    <div className="x-modal-back" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="x-modal" role="dialog" aria-modal="true" aria-labelledby="enq-title" ref={dialogRef}>
        <div className="x-modal-head">
          <p className="x-kicker"><i aria-hidden="true" />Admissions open for 2027–28</p>
          <h2 id="enq-title" className="x-big">Book a free demo class</h2>
          <button type="button" className="x-modal-x" onClick={onClose} aria-label="Close">Close</button>
        </div>

        {state === "sent" ? (
          <div className="x-modal-body">
            <p className="x-modal-ok">Thank you, {form.name}. Our counsellor will call you on {form.phone} shortly.</p>
            <div className="x-ctas" style={{ marginTop: 20 }}>
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

            {state === "failed" && (
              <div className="x-modal-err" role="alert">
                <p>{error}</p>
                <p>
                  <a href={`tel:${contact.phonePrimaryRaw}`}>Call {contact.phonePrimary}</a>
                  {" or "}
                  <a href={`https://wa.me/${contact.whatsapp}?text=${waText}`} target="_blank" rel="noopener">send it on WhatsApp</a>.
                </p>
              </div>
            )}

            <button type="submit" className="x-btn x-btn-gold" disabled={state === "sending"} style={{ width: "100%", marginTop: 8 }}>
              {state === "sending" ? "Sending…" : "Book a free demo class"}
            </button>
            <p className="x-modal-note">We use your number only to call you about admission.</p>
          </form>
        )}
      </div>
    </div>
  );
}

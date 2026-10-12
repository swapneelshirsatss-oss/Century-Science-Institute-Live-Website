"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { courses, programs, nav, contact } from "@/data/site";

export default function SiteHeader({ onOpenAdmission }) {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const dropBtn = useRef(null);
  const pathname = usePathname();

  // Close menus after navigating
  useEffect(() => { setOpen(false); setCoursesOpen(false); }, [pathname]);

  // Courses menu: Escape closes it and returns focus to the button (keyboard users)
  const onDropKey = (e) => {
    if (e.key === "Escape" && coursesOpen) { setCoursesOpen(false); dropBtn.current?.focus(); }
  };
  // Close when focus moves outside the menu
  const onDropBlur = (e) => { if (!e.currentTarget.contains(e.relatedTarget)) setCoursesOpen(false); };

  const current = (href) => (pathname === href || pathname === href.replace(/\/$/, "") ? "page" : undefined);

  return (
    <header className="x-header">
      <a href="#main" className="x-skip">Skip to content</a>
      <div className="x-wrap x-header-in">
        <Link href="/" className="x-brand">
          <span className="x-brand-mark">
            <Image src="/brand/csi-mark.webp" alt="" width={42} height={38} priority />
          </span>
          <span className="x-brand-txt">
            Century Science Institute
            <small>Hudkeshwar Road, Nagpur</small>
          </span>
        </Link>

        <nav className="x-nav" aria-label="Main">
          <div className="x-drop" data-open={coursesOpen} onKeyDown={onDropKey} onBlur={onDropBlur}>
            <button type="button" ref={dropBtn} aria-expanded={coursesOpen} aria-controls="courses-menu" onClick={() => setCoursesOpen((v) => !v)}>Courses</button>
            <div className="x-drop-menu" id="courses-menu">
              {courses.map((c) => (
                <Link key={c.href} href={c.href} aria-current={current(c.href)}>{c.name === "11th & 12th" ? "11th & 12th Science" : `${c.name} coaching`}</Link>
              ))}
              {programs.map((p) => (
                <Link key={p.href} href={p.href} aria-current={current(p.href)}>{p.name}</Link>
              ))}
              <Link href="/coaching/">All courses</Link>
            </div>
          </div>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={current(n.href)}>{n.label}</Link>
          ))}
          <a className="x-tel" href={`tel:${contact.phonePrimaryRaw}`}>{contact.phonePrimary.replace("+91 ", "")}</a>
        </nav>

        <button type="button" className="x-btn x-btn-gold x-btn-sm x-cta" onClick={onOpenAdmission}>
          Book free demo
        </button>
        <button type="button" className="x-burger" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="x-mobile-menu" aria-label="Mobile">
          <p className="x-group">Courses</p>
          {courses.map((c) => <Link key={c.href} href={c.href}>{c.name === "11th & 12th" ? "11th & 12th Science" : `${c.name} coaching`}</Link>)}
          <p className="x-group">Programs</p>
          {programs.map((p) => <Link key={p.href} href={p.href}>{p.name}</Link>)}
          <p className="x-group">Institute</p>
          {nav.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
          <Link href="/admission-form/">Admission form</Link>
        </nav>
      )}
    </header>
  );
}

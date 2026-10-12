"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * One motion language for the whole site: fade-up on scroll, staggered in reading order.
 *
 * - Only elements that start BELOW the fold are hidden and revealed, so nothing on screen
 *   at load ever blinks out, and the hero stays the first thing seen.
 * - All text is in the HTML from the server; this only adds classes (no effect on SEO).
 * - Does nothing for prefers-reduced-motion, and nothing without JavaScript.
 */
const SINGLE = [
  ".x-sec .x-eyebrow", ".x-sec .x-h2", ".x-sec .x-sub", ".x-more",
  ".x-board", ".x-waves", ".tc", ".x-dir > *", ".x-visit-grid > *",
  ".gh-box", ".gh-side > *", ".x-footer .x-fcols > *",
];
// Children of these appear one after another (100 ms apart).
const STAGGER = [".x-wall", ".x-hours", ".x-facts", ".x-courses", ".x-creds"];
const STEP = 100;   // ms between siblings
const MAX_STEP = 6; // cap, so long lists don't drag

export default function MotionLayer() {
  const path = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const fold = window.innerHeight * 0.92;
    const pending = [];
    const mark = (el, delay = 0) => {
      if (el.dataset.rv) return;
      el.dataset.rv = "1";
      if (el.getBoundingClientRect().top < fold) return; // already visible: leave it alone
      el.style.setProperty("--rv-delay", `${delay}ms`);
      el.classList.add("rv-pending");
      pending.push(el);
    };

    document.querySelectorAll(SINGLE.join(",")).forEach((el) => mark(el));
    document.querySelectorAll(STAGGER.join(",")).forEach((group) => {
      // Stagger restarts on each visual row, so a second row of cards never waits on the first.
      const kids = Array.from(group.children);
      const tops = kids.map((k) => Math.round(k.getBoundingClientRect().top));
      kids.forEach((child, i) => {
        let col = 0;
        for (let j = 0; j < i; j++) if (Math.abs(tops[j] - tops[i]) < 4) col++;
        mark(child, Math.min(col, MAX_STEP) * STEP);
      });
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.classList.add("rv-in");
          io.unobserve(en.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    pending.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [path]);

  return null;
}

"use client";

import { useEffect, useRef } from "react";

/**
 * Renders the final value in the HTML (complete with no JS, no layout shift),
 * then counts up once with easeOutExpo when 60% of it is on screen.
 */
export default function CountUp({ value, className, as: Tag = "p", duration = 1500 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const to = parseFloat(value);
    const dec = (String(value).split(".")[1] || "").length;
    let raf = 0;
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return;
      io.disconnect();
      const s = performance.now();
      const step = (n) => {
        const p = Math.min((n - s) / duration, 1);
        const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
        el.textContent = (to * e).toFixed(dec);
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value, duration]);

  return <Tag ref={ref} className={className}>{value}</Tag>;
}

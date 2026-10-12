"use client";

import { useEffect, useState } from "react";

/**
 * GitHub-style tab bar. Each tab is a plain anchor link to a section on the same page,
 * so every word stays visible to readers and search engines; JS only highlights the
 * tab of the section currently in view.
 */
export default function CourseTabs({ tabs }) {
  const [active, setActive] = useState(tabs[0]?.id);

  useEffect(() => {
    const els = tabs.map((t) => document.getElementById(t.id)).filter(Boolean);
    let raf = 0;
    // Active = the last section whose top has passed just below the sticky bars.
    // At the very bottom of the page, the last section wins (short sections never reach the top).
    const update = () => {
      raf = 0;
      const line = 150;
      let cur = els[0]?.id;
      for (const el of els) if (el.getBoundingClientRect().top <= line) cur = el.id;
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) cur = els[els.length - 1]?.id;
      setActive(cur);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, [tabs]);

  return (
    <nav className="gh-tabs" aria-label="On this page">
      <div className="x-wrap gh-tabs-in">
        {tabs.map((t) => (
          <a key={t.id} href={`#${t.id}`} aria-current={active === t.id ? "location" : undefined} onClick={() => setActive(t.id)}>
            {t.label}
            {t.count != null && <span className="gh-count">{t.count}</span>}
          </a>
        ))}
      </div>
    </nav>
  );
}

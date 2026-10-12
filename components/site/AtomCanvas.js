"use client";

import { useEffect, useRef } from "react";

/**
 * The CSI logo atom, animated.
 * - Three orbits at 0°, 60° and 120°, as in the logo.
 * - Positions and trails are computed from elapsed time (not stored points), so motion stays
 *   smooth when the frame rate dips; tilt easing is frame-rate independent.
 * - Electrons on the far half of an orbit are drawn behind the CSI badge, near half in front.
 * - Scrolling gives the electrons a short burst of speed that eases back (the page feels alive).
 * - Pauses when the hero is off-screen; draws one still frame for prefers-reduced-motion.
 */
export default function AtomCanvas({ badgeSrc = "/brand/csi-badge.webp" }) {
  const ref = useRef(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const cx = cv.getContext("2d");
    const hero = cv.parentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const TAU = Math.PI * 2;
    const col = { aqua: "#0A7F8E", canvas: "#F8FAFC" };
    const badge = new Image();
    badge.src = badgeSrc;

    // rot: orbit angle; sp: speed (rad/s ÷ 2); ph: starting phase
    const E = [
      { rot: -Math.PI / 2, sp: 0.62, ph: 0 },
      { rot: -Math.PI / 2 + Math.PI / 3, sp: 0.5, ph: 2.2 },
      { rot: -Math.PI / 2 + (2 * Math.PI) / 3, sp: 0.56, ph: 4.4 },
    ];

    let S = 0, raf = 0, running = false, last = 0, clock = 0, tilt = 0, tiltT = 0, boost = 0, lastY = window.scrollY;

    const fit = () => {
      S = cv.clientWidth;
      cv.width = Math.round(S * dpr);
      cv.height = Math.round(S * dpr);
      cx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx.imageSmoothingQuality = "high";
    };
    const RX = () => S * 0.45;
    const RY = () => S * 0.165;
    const pt = (e, a) => {
      const x = RX() * Math.cos(a), y = RY() * Math.sin(a);
      const c = Math.cos(e.rot + tilt), s = Math.sin(e.rot + tilt);
      return [S / 2 + x * c - y * s, S / 2 + x * s + y * c];
    };
    const ease = (x) => x * x * (3 - 2 * x); // smoothstep

    const drawElectron = (e, a) => {
      // Light trail: 28 short pieces behind the electron, fading in with smoothstep.
      const N = 28, span = 1.15;
      for (let k = N; k > 0; k--) {
        const f = 1 - k / N;
        const p1 = pt(e, a - span * (k / N)), p2 = pt(e, a - span * ((k - 1) / N));
        cx.globalAlpha = ease(f) * 0.7;
        cx.strokeStyle = col.canvas;
        cx.lineWidth = S * 0.0105 * ease(f) + 0.5;
        cx.beginPath(); cx.moveTo(p1[0], p1[1]); cx.lineTo(p2[0], p2[1]); cx.stroke();
      }
      const p = pt(e, a), r = S * 0.017;
      cx.globalAlpha = 0.35; cx.fillStyle = col.canvas;
      cx.beginPath(); cx.arc(p[0], p[1], r * 2.1, 0, TAU); cx.fill(); // soft glow
      cx.globalAlpha = 1;
      cx.beginPath(); cx.arc(p[0], p[1], r, 0, TAU); cx.fill();
      cx.lineWidth = Math.max(2, S * 0.0065); cx.strokeStyle = col.aqua; cx.stroke();
      cx.fillStyle = col.aqua; cx.beginPath(); cx.arc(p[0], p[1], r * 0.36, 0, TAU); cx.fill();
    };

    const frame = (now) => {
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      if (!reduce) clock += dt * (1 + boost);
      boost *= Math.exp(-dt * 2.2); // speed burst fades over ~1 s
      tilt += (tiltT - tilt) * (1 - Math.exp(-dt * 3));
      const t = clock;
      cx.clearRect(0, 0, S, S);

      cx.globalAlpha = 0.9; cx.strokeStyle = col.aqua; cx.lineWidth = Math.max(2, S * 0.0065);
      E.forEach((e) => { cx.beginPath(); cx.ellipse(S / 2, S / 2, RX(), RY(), e.rot + tilt, 0, TAU); cx.stroke(); });

      const ang = E.map((e) => e.ph + t * e.sp * 2);
      E.forEach((e, i) => { if (Math.sin(ang[i]) < 0) drawElectron(e, ang[i]); });

      // CSI badge with a gentle breath and soft gold halo
      const br = 1 + 0.025 * Math.sin(t * 1.4), h = S * 0.3 * br, w = h * (316 / 360);
      const g = cx.createRadialGradient(S / 2, S / 2, h * 0.2, S / 2, S / 2, h * 0.9);
      g.addColorStop(0, "rgba(248,202,21,.22)"); g.addColorStop(1, "rgba(248,202,21,0)");
      cx.globalAlpha = 0.75 + 0.25 * Math.sin(t * 1.4); cx.fillStyle = g;
      cx.beginPath(); cx.arc(S / 2, S / 2, h * 0.9, 0, TAU); cx.fill();
      cx.globalAlpha = 1;
      if (badge.complete && badge.naturalWidth) cx.drawImage(badge, S / 2 - w / 2, S / 2 - h / 2, w, h);

      E.forEach((e, i) => { if (Math.sin(ang[i]) >= 0) drawElectron(e, ang[i]); });
      cx.globalAlpha = 1;
      if (running && !reduce) raf = requestAnimationFrame(frame);
    };

    const start = () => { if (running || reduce) return; running = true; last = 0; raf = requestAnimationFrame(frame); };
    const stop = () => { running = false; cancelAnimationFrame(raf); };
    const onResize = () => { fit(); frame(performance.now()); };
    const onMove = (e) => {
      if (e.pointerType !== "mouse") return;
      const r = hero.getBoundingClientRect();
      tiltT = ((e.clientX - r.left) / r.width - 0.5) * 0.22;
    };
    const onLeave = () => { tiltT = 0; };
    const onScroll = () => {
      const y = window.scrollY;
      boost = Math.min(boost + Math.abs(y - lastY) * 0.006, 2.2);
      lastY = y;
    };

    fit();
    badge.onload = () => frame(performance.now());
    frame(performance.now());
    const io = new IntersectionObserver(([en]) => (en.isIntersecting ? start() : stop()));
    io.observe(hero);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      stop(); io.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, [badgeSrc]);

  return <canvas ref={ref} className="x-atom" aria-hidden="true" />;
}

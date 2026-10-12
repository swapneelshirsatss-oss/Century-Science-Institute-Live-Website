"use client";

import { useEffect, useRef } from "react";

/**
 * The CSI logo atom, animated.
 * - Three orbits at 0°, 60° and 120°, as in the logo.
 * - Positions and trails are computed from elapsed time (not stored points), so motion stays
 *   smooth when the frame rate dips; tilt easing is frame-rate independent.
 * - Electrons on the far half of an orbit are drawn behind the CSI badge, near half in front.
 * - Scrolling gives the electrons a short burst of speed that eases back (the page feels alive).
 * - Performance (measured: the atom was ~70% of main-thread time on a 4x-throttled phone):
 *   orbits, bloom and halo are pre-drawn to an offscreen layer and only redrawn when the tilt
 *   changes; trails use 12 segments; 30 fps on phones and low-core devices; pixel ratio capped;
 *   animation starts after the page has loaded, so it never competes with first paint.
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
    const small = window.matchMedia("(max-width: 760px)").matches;
    const lowPower = small || (navigator.hardwareConcurrency || 8) <= 4 || window.matchMedia("(pointer: coarse)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, small ? 1.25 : 2);
    const FRAME_MS = lowPower ? 1000 / 30 : 0; // 30 fps cap on phones / low-core devices
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

    // Offscreen layers: static orbits + bloom (redrawn only when tilt moves), and the gold halo.
    const layer = document.createElement("canvas"), lx = layer.getContext("2d");
    const halo = document.createElement("canvas"), hx = halo.getContext("2d");
    let layerTilt = NaN, lastDraw = 0;
    let S = 0, raf = 0, running = false, last = 0, clock = 0, tilt = 0, tiltT = 0, boost = 0, lastY = window.scrollY;

    const fit = () => {
      S = cv.clientWidth;
      cv.width = Math.round(S * dpr);
      cv.height = Math.round(S * dpr);
      cx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx.imageSmoothingQuality = "high";
      layer.width = cv.width; layer.height = cv.height; layerTilt = NaN;
      // Gold halo, drawn once; scaled and faded per frame with drawImage
      const H = Math.round(S * 0.6 * dpr);
      halo.width = halo.height = H;
      const g = hx.createRadialGradient(H / 2, H / 2, H * 0.11, H / 2, H / 2, H / 2);
      g.addColorStop(0, "rgba(248,202,21,.22)"); g.addColorStop(1, "rgba(248,202,21,0)");
      hx.clearRect(0, 0, H, H); hx.fillStyle = g; hx.fillRect(0, 0, H, H);
    };
    const drawLayer = () => {
      lx.setTransform(dpr, 0, 0, dpr, 0, 0);
      lx.clearRect(0, 0, S, S);
      const bloom = lx.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S * 0.5);
      bloom.addColorStop(0, "rgba(63,182,195,.20)");
      bloom.addColorStop(0.55, "rgba(63,182,195,.07)");
      bloom.addColorStop(1, "rgba(63,182,195,0)");
      lx.fillStyle = bloom; lx.fillRect(0, 0, S, S);
      lx.globalAlpha = 0.9; lx.strokeStyle = col.aqua; lx.lineWidth = Math.max(2, S * 0.0065);
      E.forEach((e) => { lx.beginPath(); lx.ellipse(S / 2, S / 2, RX(), RY(), e.rot + tilt, 0, TAU); lx.stroke(); });
      lx.globalAlpha = 1;
      layerTilt = tilt;
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
      // Light trail: 12 short pieces behind the electron, fading in with smoothstep.
      const N = 12, span = 1.15;
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
      if (running && FRAME_MS && now - lastDraw < FRAME_MS - 2) { raf = requestAnimationFrame(frame); return; }
      lastDraw = now;
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      if (!reduce) clock += dt * (1 + boost);
      boost *= Math.exp(-dt * 2.2); // speed burst fades over ~1 s
      tilt += (tiltT - tilt) * (1 - Math.exp(-dt * 3));
      const t = clock;
      cx.clearRect(0, 0, S, S);
      if (!(Math.abs(tilt - layerTilt) < 0.0015)) drawLayer();
      cx.globalAlpha = 1;
      cx.drawImage(layer, 0, 0, S, S);

      const ang = E.map((e) => e.ph + t * e.sp * 2);
      E.forEach((e, i) => { if (Math.sin(ang[i]) < 0) drawElectron(e, ang[i]); });

      // CSI badge with a gentle breath and soft gold halo
      const br = 1 + 0.025 * Math.sin(t * 1.4), h = S * 0.3 * br, w = h * (316 / 360);
      cx.globalAlpha = 0.75 + 0.25 * Math.sin(t * 1.4);
      cx.drawImage(halo, S / 2 - h * 0.9, S / 2 - h * 0.9, h * 1.8, h * 1.8);
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
    // Start moving only after the page has loaded and the browser is idle (still frame until then)
    let visible = false, ready = false;
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (!ready) return; visible ? start() : stop(); });
    io.observe(hero);
    const begin = () => { ready = true; if (visible) start(); };
    const idle = window.requestIdleCallback || ((f) => setTimeout(f, 300));
    const onLoad = () => idle(begin, { timeout: 1500 });
    if (document.readyState === "complete") onLoad(); else window.addEventListener("load", onLoad, { once: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      stop(); io.disconnect(); window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, [badgeSrc]);

  return <canvas ref={ref} className="x-atom" aria-hidden="true" />;
}

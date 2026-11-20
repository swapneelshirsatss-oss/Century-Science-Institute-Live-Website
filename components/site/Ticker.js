"use client";

import { useState } from "react";

/**
 * Results ticker. Moving content that runs longer than 5 seconds needs a way to stop it
 * (WCAG 2.2.2), so it has a pause button, and it also pauses on hover and keyboard focus.
 * The second copy of the list exists only for the seamless loop and is hidden from screen readers.
 */
export default function Ticker({ items }) {
  const [paused, setPaused] = useState(false);
  const row = [...items, ...items];

  return (
    <div className="x-ticker" data-paused={paused} role="region" aria-label="Recent results">
      <ul>
        {row.map((t, i) => (
          <li key={i} aria-hidden={i >= items.length ? "true" : undefined}>
            <b>{t.score}</b>{t.text}
          </li>
        ))}
      </ul>
      <button type="button" className="x-ticker-btn" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
        {paused ? "Play" : "Pause"}<span className="x-sr"> results ticker</span>
      </button>
    </div>
  );
}

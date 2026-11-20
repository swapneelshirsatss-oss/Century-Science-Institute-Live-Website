"use client";

import { useState } from "react";
import PhotoSlot from "@/components/site/PhotoSlot";
import { toppersList } from "@/data/instituteData";

const CATS = ["All", "MHT-CET", "NEET", "JEE", "Board"];

/**
 * Hall of Fame in the homepage's card style, with exam filters.
 * Filters are real buttons (aria-pressed); the count is announced politely.
 * All toppers are in the server HTML, so search engines see every name.
 */
export default function TopperBoard() {
  const [cat, setCat] = useState("All");
  const shown = toppersList.filter((t) => cat === "All" || t.category === cat);

  return (
    <>
      <div className="x-filter" role="group" aria-label="Filter toppers by exam">
        {CATS.map((c) => {
          const n = c === "All" ? toppersList.length : toppersList.filter((t) => t.category === c).length;
          return (
            <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}>
              {c} <span>{n}</span>
            </button>
          );
        })}
      </div>
      <p className="x-sr" aria-live="polite">{shown.length} toppers shown</p>
      <div className="x-wall">
        {shown.map((t) => (
          <div className="x-tp" key={t.name}>
            <PhotoSlot src={t.image} alt={t.name} label="Photo, 1:1" note={t.name} sizes="(max-width: 860px) 50vw, 25vw" />
            <p className="x-tp-r">{t.score}</p>
            <p className="x-tp-n">{t.name}</p>
            <p className="x-tp-e">{t.exam === t.achievement ? t.exam : `${t.exam} · ${t.achievement}`}</p>
          </div>
        ))}
      </div>
    </>
  );
}

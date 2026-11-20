"use client";

import { useState } from "react";

/**
 * YouTube videos as a "facade": only a thumbnail and play button load with the page;
 * the player (about 1 MB of YouTube scripts) loads when the visitor taps play.
 * Keeps the mobile page fast. Uses youtube-nocookie.com, so no tracking cookies before play.
 * Swipe rail on phones, grid on desktop (CSS: .x-vids).
 */
export default function VideoRail({ videos }) {
  const [playing, setPlaying] = useState(null);
  return (
    <ul className="x-vids">
      {videos.map((v) => (
        <li key={v.id}>
          <div className="x-vid">
            {playing === v.id ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0&playsinline=1`}
                title={v.title}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button type="button" onClick={() => setPlaying(v.id)} aria-label={`Play video: ${v.title}`}>
                {/* eslint-disable-next-line @next/next/no-img-element -- YouTube thumbnail, sized by CSS */}
                <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" decoding="async" width="480" height="360" />
                <span className="x-play" aria-hidden="true" />
              </button>
            )}
          </div>
          <p className="x-vid-t">{v.title}</p>
        </li>
      ))}
    </ul>
  );
}

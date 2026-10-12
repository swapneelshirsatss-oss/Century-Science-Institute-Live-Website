"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, Trophy, Star, CheckCircle } from "lucide-react";
import { toppersList } from "@/data/instituteData";

export default function TopperGrid({ limit, showFilter = true }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "MHT-CET", "NEET", "JEE", "Board"];

  const filtered = toppersList.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="space-y-8">
      {showFilter && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition border ${
                activeCategory === cat
                  ? "bg-[#0b1e3d] text-amber-400 border-[#0b1e3d] shadow-md shadow-blue-950/20"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayed.map((topper, idx) => (
          <div
            key={idx}
            className="group relative bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              {/* Card Header Badge */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                  <Trophy className="w-3 h-3 text-amber-600" />
                  <span>{topper.exam}</span>
                </span>
                <span className="text-[10px] font-bold text-slate-400">Class {topper.year || '2024–25'}</span>
              </div>

              {/* Photo Avatar */}
              <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-900 to-indigo-700 p-0.5 shadow-md mb-4 group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-100 relative">
                  <img
                    src={topper.image}
                    alt={`${topper.name} - ${topper.exam} Top Ranker Nagpur`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="text-center space-y-1.5">
                <h4 className="font-extrabold text-base text-slate-800 tracking-tight">
                  {topper.name}
                </h4>
                
                <div className="inline-block px-3 py-1 rounded-xl bg-blue-50 text-blue-700 font-extrabold text-lg tracking-tight">
                  {topper.score}
                </div>

                <p className="text-xs text-slate-500 font-medium pt-1 line-clamp-2">
                  {topper.achievement}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-emerald-600">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Verified CSI Student</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

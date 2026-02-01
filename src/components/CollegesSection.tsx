"use client";

import Link from "next/link";
import { useState } from "react";
import { colleges } from "@/data/colleges";

export default function CollegesSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedColleges = showAll ? colleges : colleges.slice(0, 4);

  return (
    <div className="relative">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-ink">
            Featured{" "}
            <span className="text-brand-maroon relative">
              Chennai Colleges
              <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-brand-gold/40 rounded-full" />
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-brand-ink/70 leading-relaxed">
            A carefully curated list of reputed private colleges in and around
            Chennai. Compare{" "}
            <span className="font-semibold text-brand-maroon">fees</span>,{" "}
            <span className="font-semibold text-brand-maroon">placements</span>,
            and campus culture — before you decide.
          </p>
        </div>

        <span className="inline-flex self-start md:self-auto rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1.5 text-xs font-semibold text-brand-maroon">
          Engineering • Arts & Science • Management
        </span>
      </div>

      {/* ================= GRID ================= */}
      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {displayedColleges.map((college) => {
          const hasDetail = Boolean(college.slug);
          const Card = <CollegeCard college={college} />;

          return hasDetail ? (
            <Link
              key={college.id}
              href={`/colleges/${college.slug}`}
              className="group"
            >
              {Card}
            </Link>
          ) : (
            <div key={college.id}>{Card}</div>
          );
        })}
      </div>

      {/* ================= ACTION ================= */}
      <div className="mt-14 flex justify-center">
        {!showAll ? (
          colleges.length > 4 && (
            <button
              onClick={() => setShowAll(true)}
              className="rounded-full bg-gradient-to-r from-brand-gold to-yellow-400 px-8 py-3 text-sm font-semibold text-brand-maroon shadow-lg hover:scale-105 transition"
            >
              Show {colleges.length - 4} More Colleges
            </button>
          )
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800 transition"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}

/* ================= CARD ================= */

function CollegeCard({ college }: { college: any }) {
  return (
    <article
      className="
        relative h-full overflow-hidden rounded-3xl
        border border-white/40
        bg-white/65 backdrop-blur-xl
        shadow-md transition-all duration-300
        hover:-translate-y-2 hover:shadow-2xl
      "
    >
      {/* Image */}
      <div
        className="relative h-44 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${college.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 space-y-4">
        {/* Title + Rating */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-brand-ink leading-snug">
              {college.name}
            </h3>
            <p className="text-xs text-brand-ink/60 mt-0.5">
              {college.campuses
                ? `Campuses: ${college.campuses.join(", ")}`
                : college.area}
            </p>
          </div>

          <span className="shrink-0 rounded-full bg-brand-gold/20 border border-brand-gold/40 px-3 py-1 text-xs font-semibold text-brand-maroon">
            {college.rating.toFixed(1)} ★
          </span>
        </div>

        {/* Affiliation */}
        <p className="text-xs text-brand-ink/70">
          Affiliation:{" "}
          <span className="font-semibold text-brand-ink">
            {college.affiliation}
          </span>
        </p>

        {/* Courses */}
        <div className="text-xs text-brand-ink">
          Popular courses:
          <ul className="mt-2 flex flex-wrap gap-2">
            {college.popularCourses.map((course: string) => (
              <li
                key={course}
                className="rounded-full bg-brand-gold/10 border border-brand-gold/30 px-3 py-1 text-[11px] text-brand-maroon"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {college.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full border border-slate-300 bg-slate-100 px-2.5 py-0.5 text-[11px] text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Placement Packages */}
        {(college.avgPackage || college.highestPackage) && (
          <div className="pt-3 mt-3 border-t border-amber-100">
            <div className="grid grid-cols-2 gap-3">
              {college.avgPackage && (
                <div className="text-center">
                  <p className="text-xs text-brand-ink/60 mb-1">Avg. Package</p>
                  <p className="text-base font-bold text-emerald-600">{college.avgPackage}</p>
                </div>
              )}
              {college.highestPackage && (
                <div className="text-center">
                  <p className="text-xs text-brand-ink/60 mb-1">Highest Package</p>
                  <p className="text-base font-bold text-amber-600">{college.highestPackage}</p>
                </div>
              )}
            </div>

          </div>
        )}
      </div>
    </article>
  );
}

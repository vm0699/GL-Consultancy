"use client";

import Link from "next/link";
import { useState } from "react";
import { colleges } from "@/data/colleges";

export default function CollegesSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedColleges = showAll ? colleges : colleges.slice(0, 4);

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Featured Chennai Colleges
          </h2>
          <p className="mt-2 text-sm text-[#4a5568] max-w-xl">
            Curated list of private colleges in and around Chennai. We help you
            compare fees, placements, and campus vibe before you decide.
          </p>
        </div>
        <span className="hidden md:inline-block rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs text-amber-700 font-medium">
          Engineering • Arts &amp; Science • Management
        </span>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {displayedColleges.map((college) => {
          const hasDetail = Boolean(college.slug);

          const CardContent = (
            <article
              className={`flex flex-col overflow-hidden rounded-3xl border border-amber-200 bg-white shadow-md hover:shadow-lg transition-shadow ${hasDetail ? "cursor-pointer" : ""
                }`}
            >
              {/* Image */}
              <div
                className="h-40 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${college.imageUrl})` }}
              />

              <div className="p-4 md:p-5 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{college.name}</h3>
                    {college.campuses ? (
                      <p className="text-xs text-[#6b7280]">
                        Campuses: {college.campuses.join(", ")}
                      </p>
                    ) : (
                      <p className="text-xs text-[#6b7280]">{college.area}</p>
                    )}
                  </div>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-700 border border-amber-300 font-semibold">
                    {college.rating.toFixed(1)}★
                  </span>
                </div>

                <p className="text-xs text-[#6b7280]">
                  Affiliation:{" "}
                  <span className="text-[#1e2749] font-medium">{college.affiliation}</span>
                </p>

                <div className="text-xs text[#1e2749]">
                  Popular courses:
                  <ul className="mt-1 flex flex-wrap gap-1.5">
                    {college.popularCourses.map((course) => (
                      <li
                        key={course}
                        className="rounded-full bg-amber-50 border border-amber-200 px-2.5 py-1 text-[11px] text-amber-700"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-[11px]">
                  <div className="flex flex-wrap gap-1.5">
                    {college.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-amber-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );

          return hasDetail ? (
            <Link key={college.id} href={`/colleges/${college.slug}`}>
              {CardContent}
            </Link>
          ) : (
            <div key={college.id}>{CardContent}</div>
          );
        })}
      </div>

      {/* Show More Button */}
      {!showAll && colleges.length > 4 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="rounded-full bg-amber-100 border border-amber-300 px-6 py-3 text-sm font-semibold text-amber-700 hover:bg-amber-200 transition-colors"
          >
            Show More Colleges ({colleges.length - 4} more)
          </button>
        </div>
      )}

      {/* Show Less Button */}
      {showAll && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(false)}
            className="rounded-full bg-slate-800 border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-700 transition-colors"
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
}

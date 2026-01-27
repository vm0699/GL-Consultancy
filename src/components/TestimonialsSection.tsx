"use client";

import { useState } from "react";

type Testimonial = {
  name: string;
  course: string;
  college: string;
  text: string;
  rating: number;
  proofImageUrl?: string; // blurred admission screenshot
};

const testimonials: Testimonial[] = [
  {
    name: "TamilSelvan R",
    course: "B.Tech ECE, 2024 Intake",
    college: "SRM – Faculty of Engineering & Technology, Kattankulathur",
    text: "Got ECE in SRM KTR within our budget. They clearly explained hostel, mess, transport and actual yearly cost before we paid the counselling fee.",
    rating: 5,
    proofImageUrl: "/reviews/image1.png",
  },
  {
    name: "Nandhini S.",
    course: "B.Com (Accounts & Finance)",
    college: "Central Chennai",
    text: "My parents were worried about safety and fees. The team mapped out options in our budget and arranged a campus visit the same week.",
    rating: 4.5,
    proofImageUrl: "/reviews/image2.png",
  },
  {
    name: "Tharun ",
    course: "MBA (Marketing)",
    college: "Chennai Business School",
    text: "They checked my profile, work ex, and guided me to a college where the alumni network actually helps with roles in Chennai & Bangalore.",
    rating: 4.8,
    proofImageUrl: "/reviews/image3.png",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState<Testimonial | null>(null);

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold">
        Real stories from Chennai students
      </h2>
      <p className="mt-2 text-sm text-[#4a5568] max-w-xl">
        We don’t push a random college. We match you with options that fit your
        marks, budget, and goals, then let you decide calmly.
      </p>

      {/* Auto-scrolling horizontal strip of full testimonial cards */}
      <div className="mt-8 rounded-3xl border border-amber-200 bg-white px-3 py-4 shadow-md">
        <div className="marquee-container">
          <div className="marquee-track">
            {/* first copy */}
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} onClick={() => setActive(t)} />
            ))}
            {/* second copy for infinite loop */}
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.name + "-dup"}
                t={t}
                onClick={() => setActive(t)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-[#6b7280]">
        Admission proofs are shared with permission. Personal details are blurred
        for privacy; only course and college details are visible.
      </div>

      {/* FULLSCREEN MODAL WHEN A CARD IS CLICKED */}
      {active && active.proofImageUrl && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-lg w-full rounded-2xl bg-white border border-amber-200 p-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[420px] rounded-xl overflow-hidden border border-amber-200 bg-gray-50 flex items-center justify-center">
              <img
                src={active.proofImageUrl}
                alt={`${active.name} admission proof full`}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="mt-3 text-xs text-[#1e2749] space-y-1">
              <p className="font-semibold">{active.course}</p>
              <p className="text-[#6b7280]">{active.college}</p>
              <p className="mt-1 text-[11px] text-[#6b7280]">
                Name, application number and other confidential details in this
                slip are intentionally blurred. Only course and college details
                are shown as proof.
              </p>
            </div>

            <div className="mt-3 flex justify-end">
              <button
                type="button"
                onClick={() => setActive(null)}
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-4 py-1.5 text-xs font-semibold text-white hover:bg-amber-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TestimonialCard({
  t,
  onClick,
}: {
  t: Testimonial;
  onClick: () => void;
}) {
  return (
    <article className="w-80 md:w-96 shrink-0 rounded-3xl border border-amber-200 bg-white p-4 shadow-md">
      <div className="flex flex-col gap-3 h-full">
        {/* TOP: proof screenshot (thumbnail) */}
        {t.proofImageUrl && (
          <button
            type="button"
            onClick={onClick}
            className="relative h-40 w-full rounded-2xl overflow-hidden border border-amber-200 bg-gray-50 group"
          >
            <img
              src={t.proofImageUrl}
              alt={`${t.name} admission proof`}
              className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
            <div className="absolute bottom-2 left-2 rounded-full bg-white/90 px-3 py-1 text-[10px] text-amber-700 border border-amber-300 font-medium">
              Tap to view full admission slip
            </div>
          </button>
        )}

        {/* BOTTOM: text review */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold">{t.name}</h3>
              <p className="text-[11px] text-[#6b7280]">{t.course}</p>
            </div>
            <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] text-amber-700 border border-amber-300 font-semibold">
              {t.rating}★
            </span>
          </div>

          <p className="mt-1 text-xs text-[#1e2749] leading-relaxed">
            “{t.text}”
          </p>

          <p className="mt-1 text-[11px] text-[#6b7280]">{t.college}</p>
          <p className="text-[10px] text-amber-600 font-medium">Verified student</p>
        </div>
      </div>
    </article>
  );
}

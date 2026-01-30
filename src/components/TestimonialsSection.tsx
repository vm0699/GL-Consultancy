"use client";

import { useState } from "react";

type Testimonial = {
  name: string;
  course: string;
  college: string;
  text: string;
  rating: number;
  proofImageUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Arun Kumar R.",
    course: "B.Tech CSE - AI & ML, 2024 Intake",
    college: "SRM Institute of Science & Technology, Kattankulathur",
    text: "Secured CSE with AI & ML specialization at SRM Kattankulathur through GL Consultancy. They explained the curriculum, dedicated AI labs with GPU servers, and placement statistics for this branch. The team clarified all fee structure details including ₹3.5L/year tuition and hostel costs. Got Block 1 accommodation close to Tech Park. Excellent guidance!",
    rating: 5,
    proofImageUrl: "/reviews/image1.png",
  },
  {
    name: "Divya Lakshmi S.",
    course: "B.Tech ECE, 2025 Intake",
    college: "SRM Institute of Science & Technology",
    text: "Got Electronics & Communication Engineering at SRM through management quota. GL Consultancy team was very professional - they showed me the ECE labs, explained the Samsung and Intel collaboration programs, and clarified the complete fee breakup. They also helped with hostel allocation and orientation process. Highly recommend their services!",
    rating: 5,
    proofImageUrl: "/reviews/image2.png",
  },
  {
    name: "Karthik M.",
    course: "B.E. ECE, 2024 Batch",
    college: "Sathyabama Institute of Science and Technology",
    text: "Wanted ECE but was confused between different colleges. GL Consultancy gave detailed comparison of Sathyabama vs other options - placement records, lab facilities, industry tie-ups. They explained Sathyabama's strong ECE department with VLSI and embedded systems labs. Secured admission smoothly with their help and even got scholarship. Campus visit arrangement was very helpful!",
    rating: 4.8,
    proofImageUrl: "/reviews/image3.png",
  },
  {
    name: "Preethi R.",
    course: "MBBS, 2024 Intake",
    college: "Saveetha Medical College & Hospital",
    text: "Scored well in NEET but wanted a college with excellent clinical exposure. GL Consultancy explained Saveetha Medical College's strengths - 2000+ bed hospital, all departments under one campus, and strong PG entrance training. They helped with the entire admission process, fee payment schedules, and hostel formalities. The transparency about ₹24.5L annual fees and hostel costs was really appreciated!",
    rating: 4.7,
    proofImageUrl: "/reviews/image4.png",
  },
  {
    name: "Rajesh Kumar V.",
    course: "M.Tech CSE, 2024-26 Batch",
    college: "VIT Vellore Campus",
    text: "After B.Tech, wanted to pursue M.Tech from a reputed institution. GL Consultancy explained VIT Vellore's M.Tech CSE program - research facilities, specialized labs, GATE scholarship options, and placement statistics. They guided through the entire VITMEE counseling process and helped secure seat in first round. The team was very knowledgeable about PG admissions and hostel allocation for post-grad students!",
    rating: 4.9,
    proofImageUrl: "/reviews/image5.png",
  },
  {
    name: "Sowmya P.",
    course: "B.Tech Computer Science, 2025 Intake",
    college: "VIT Chennai Campus",
    text: "Scored 45,000 rank in VITEEE and was targeting CSE. GL Consultancy guided me through VIT counseling - explained slot booking, choice filling strategy, and campus preferences. They helped me understand the difference between Chennai and Vellore campuses, placement records, and transport connectivity. Secured Computer Science at VIT Chennai in first round! Parents were impressed with their detailed guidance and transparency.",
    rating: 4.8,
    proofImageUrl: "/reviews/image6.png",
  },
  {
    name: "Vishnu Vardhan K.",
    course: "B.Tech ECE, 2024 Intake",
    college: "VIT Vellore Campus",
    text: "After preparing for JEE, wrote VITEEE as backup. Scored 25,000 rank and was aiming for ECE at Vellore campus. GL Consultancy team explained the entire admission process, category-wise seat allotment, and fee structure (₹1.98L/year). They helped with document verification, slot booking, and even guided on hostel preferences. Got ECE at Vellore main campus! Very happy with their expert counseling.",
    rating: 5,
    proofImageUrl: "/reviews/image7.png",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState<Testimonial | null>(null);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1e2749]">
            Real stories from Chennai students
          </h2>
          <p className="mt-2 text-sm text-[#4a5568] max-w-2xl">
            We don't push a random college. We match you with options that fit your
            marks, budget, and goals, then let you decide calmly. Here's what our students say.
          </p>
        </div>
        <div className="shrink-0 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 text-xs font-bold text-amber-700">
          ⭐ 4.8/5 Average Rating
        </div>
      </div>

      {/* Auto-scrolling horizontal strip of full testimonial cards */}
      <div className="rounded-3xl border border-amber-200 bg-white px-3 py-4 shadow-md">
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
    <article className="w-80 md:w-96 shrink-0 rounded-3xl border border-amber-200 bg-white p-4 shadow-md hover:shadow-lg transition-shadow">
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
            "{t.text}"
          </p>

          <p className="mt-1 text-[11px] text-[#6b7280]">{t.college}</p>
          <p className="text-[10px] text-emerald-600 font-medium">✓ Verified student</p>
        </div>
      </div>
    </article>
  );
}

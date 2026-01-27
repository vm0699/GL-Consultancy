"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import Image from "next/image";

export default function Hero() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="landing"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* 🔹 Background Image */}
      <Image
        src="/pexels-cottonbro-6209803.jpg"
        alt="Education background"
        fill
        priority
        className="object-cover"
      />

      {/* 🔹 Soft overlay for readability */}
      <div className="absolute inset-0 bg-brand-cream/90 backdrop-blur-[1px]" />

      {/* 🔹 Gold grain pattern (luxury feel) */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #c9a24d 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 w-full">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-white/60 px-4 py-2 text-xs font-semibold tracking-widest uppercase text-brand-maroon">
            <span className="h-2 w-2 rounded-full bg-brand-gold" />
            Premium Education Guidance
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-brand-ink">
            Confused about{" "}
            <span className="text-brand-maroon">College admissions?</span>
            <br />
            We shortlist the right college for you.
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-base md:text-lg text-brand-ink/80 leading-relaxed">
            GL Consultancy is a student-first admission consultancy for private
            colleges in Chennai. With over 5 years of expertise, we help students
            compare colleges, explore courses, and book personalized counselling.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-5 pt-4">
            <a
              href="#appointment"
              className="rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold text-brand-maroon hover:brightness-110 transition shadow-md"
            >
              Book Free Appointment
            </a>
            <a
              href="#colleges"
              className="text-sm font-semibold text-brand-maroon hover:text-brand-gold underline-offset-4 hover:underline transition"
            >
              Browse Chennai colleges
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-14 max-w-4xl">
            <Stat value={6300} suffix="+" label="Students counselled" isInView={isInView} />
            <Stat value={25} suffix="+" label="Private colleges mapped" isInView={isInView} />
            <Stat value={4.8} decimals={1} label="Average student rating" isInView={isInView} />
            <Stat value={5} suffix="+" label="Years of experience" isInView={isInView} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stat Component ---------- */

function Stat({
  value,
  suffix = "",
  decimals = 0,
  label,
  isInView,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  isInView: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center rounded-xl p-4 hover:bg-white/50 transition">
      <p className="text-5xl md:text-6xl font-bold text-brand-gold">
        <CountUp
          start={0}
          end={isInView ? value : 0}
          duration={2.8}
          suffix={suffix}
          decimals={decimals}
        />
      </p>
      <p className="mt-3 text-sm md:text-base font-semibold text-brand-maroon">
        {label}
      </p>
    </div>
  );
}

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
      { threshold: 0.35 }
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
      {/* Background Image */}
      <Image
        src="/pexels-cottonbro-6209803.jpg"
        alt="Education background"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cream/95 via-brand-cream/90 to-brand-gold/30 backdrop-blur-[2px]" />

      {/* Gold Grain */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #c9a24d 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-28 w-full">
        <div className="max-w-3xl space-y-10 rounded-3xl bg-white/55 backdrop-blur-xl border border-white/40 shadow-xl p-10 md:p-14">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-gold/40 bg-white/70 px-5 py-2 text-xs font-semibold tracking-widest uppercase text-brand-maroon shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-gold animate-pulse" />
            Premium Education Guidance
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-brand-ink">
            Confused about{" "}
            <span className="relative inline-block text-brand-maroon">
              College admissions?
              <span className="absolute -bottom-1 left-0 h-1 w-full bg-brand-gold/40 rounded-full" />
            </span>
            <br />
            <span className="text-brand-ink/90">
              We shortlist the right college for you.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-brand-ink/80 leading-relaxed">
            GL Consultancy is a student-first admission consultancy for private
            colleges in Chennai. With over <span className="font-semibold text-brand-maroon">5+ years</span> of expertise,
            we help students compare colleges, explore courses, and book
            personalized counselling with confidence.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <a
              href="#appointment"
              className="rounded-full bg-gradient-to-r from-brand-gold to-yellow-400 px-9 py-3.5 text-sm font-semibold text-brand-maroon shadow-lg hover:scale-105 hover:shadow-xl transition"
            >
              Book Free Appointment
            </a>

            <a
              href="#colleges"
              className="text-sm font-semibold text-brand-maroon hover:text-brand-gold transition underline underline-offset-4"
            >
              Browse Chennai colleges →
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <Stat value={6300} suffix="+" label="Students counselled" isInView={isInView} />
            <Stat value={25} suffix="+" label="Private colleges mapped" isInView={isInView} />
            <Stat value={4.8} decimals={1} label="Student rating" isInView={isInView} />
            <Stat value={5} suffix="+" label="Years of trust" isInView={isInView} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stat ---------- */

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
    <div className="flex flex-col items-center text-center rounded-2xl bg-white/60 backdrop-blur-md p-5 shadow-md hover:shadow-lg hover:-translate-y-1 transition">
      <p className="text-4xl md:text-5xl font-bold text-brand-gold">
        <CountUp
          start={0}
          end={isInView ? value : 0}
          duration={2.6}
          suffix={suffix}
          decimals={decimals}
        />
      </p>
      <p className="mt-2 text-sm font-semibold text-brand-maroon">
        {label}
      </p>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import Image from "next/image";
import clsx from "clsx";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="landing"
      className="relative min-h-screen flex items-center overflow-hidden isolate"
    >
      {/* ================= BACKGROUND ================= */}
      <Image
        src="/pexels-cottonbro-6209803.jpg"
        alt="Students choosing colleges"
        fill
        priority
        sizes="100vw"
        className="object-cover scale-110"
      />

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cream/95 via-brand-cream/85 to-brand-gold/30" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.25))]" />

      {/* Luxury grain */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #c9a24d 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4 py-32">
          <div
            className={clsx(
              "max-w-3xl rounded-[2rem] border border-white/40 bg-white/60 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.15)] p-10 md:p-14 space-y-10 transition-all duration-700",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            )}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-brand-gold/40 bg-white/70 px-6 py-2 text-xs font-semibold tracking-widest uppercase text-brand-maroon shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-gold" />
              </span>
              Premium Education Guidance
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-brand-ink">
              Confused about{" "}
              <span className="relative inline-block text-brand-maroon">
                College admissions
                <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-brand-gold to-yellow-400 rounded-full" />
              </span>
              ?
              <br />
              <span className="text-brand-ink/90">
                We shortlist the right college for you.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-brand-ink/80 leading-relaxed">
              GL Consultancy is a{" "}
              <span className="font-semibold text-brand-maroon">
                student-first
              </span>{" "}
              admission consultancy for private colleges in Chennai. With over{" "}
              <span className="font-semibold text-brand-maroon">
                5+ years of proven expertise
              </span>
              , we help students compare colleges, explore courses, and book
              personalized counselling — confidently and transparently.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#appointment"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-brand-gold to-yellow-400 px-10 py-4 text-sm font-semibold text-brand-maroon shadow-xl transition-all hover:scale-105"
              >
                <span className="relative z-10">
                  Book Free Appointment
                </span>
                <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition" />
              </a>

              <a
                href="#colleges"
                className="text-sm font-semibold text-brand-maroon hover:text-brand-gold transition underline underline-offset-4"
              >
                Browse Chennai colleges →
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-14">
              <Stat value={6300} suffix="+" label="Students counselled" show={isVisible} />
              <Stat value={25} suffix="+" label="Private colleges mapped" show={isVisible} />
              <Stat value={4.8} decimals={1} label="Student rating" show={isVisible} />
              <Stat value={5} suffix="+" label="Years of trust" show={isVisible} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  
/* ================= STAT ================= */

function Stat({
  value,
  suffix = "",
  decimals = 0,
  label,
  show,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  show: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center rounded-2xl bg-white/65 backdrop-blur-lg p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <p className="text-4xl md:text-5xl font-bold text-brand-gold">
        <CountUp
          start={0}
          end={show ? value : 0}
          duration={2.8}
          decimals={decimals}
          suffix={suffix}
        />
      </p>
      <p className="mt-2 text-sm font-semibold text-brand-maroon">
        {label}
      </p>
    </div>
  );
}

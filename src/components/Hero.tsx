"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import Image from "next/image";
import clsx from "clsx";

/* 🔁 Background images */
const BACKGROUND_IMAGES = [
  "/public/pexels-cottonbro-6209803.jpg",
  "/public/pexels-cottonbro-6209803.jpg",
  "/public/pexels-cottonbro-6209803.jpg",
  "/public/pexels-cottonbro-6209803.jpg",
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const ref = useRef<HTMLElement | null>(null);

  /* Intersection animation */
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

  /* Background image rotation (30s) */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      id="landing"
      className="relative min-h-screen flex items-center overflow-hidden isolate"
    >
      {/* ================= BACKGROUND SLIDESHOW ================= */}
      <div className="absolute inset-0">
        {BACKGROUND_IMAGES.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="College campus"
            fill
            priority={index === 0}
            sizes="100vw"
            className={clsx(
              "object-cover transition-opacity duration-1000 ease-in-out scale-110",
              index === activeImage ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cream/95 via-brand-cream/85 to-brand-gold/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.25))]" />
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #c9a24d 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ================= CENTER CONTENT ================= */}
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4 py-32 flex justify-start">
          <div
            className={clsx(
              "max-w-3xl rounded-[2.2rem] border border-white/40",
              "bg-white/65 backdrop-blur-2xl",
              "shadow-[0_35px_90px_rgba(0,0,0,0.18)]",
              "p-10 md:p-14 space-y-10 transition-all duration-700",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            )}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-brand-gold/40 bg-white/70 px-6 py-2 text-xs font-semibold tracking-widest uppercase text-brand-maroon">
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
            

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#appointment"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-brand-gold to-yellow-400 px-10 py-4 text-sm font-semibold text-brand-maroon shadow-xl hover:scale-105 transition"
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
    <div className="flex flex-col items-center text-center rounded-2xl bg-white/70 backdrop-blur-lg p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition">
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

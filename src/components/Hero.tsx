"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import Image from "next/image";

/* 🔁 Background images (rotating every 30s) */
const BACKGROUND_IMAGES = [
  "/pexels-cottonbro-6209803.png",
  "/pexels-thirdman-5327656.png",
  "/pexels-olia-danilevich-5088009.png",
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const ref = useRef<HTMLElement | null>(null);

  /* 👀 Reveal animation on scroll */
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

  /* 🔁 Rotate background images every 30s */
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden isolate"
    >
      {/* ================= BACKGROUND IMAGES ================= */}
      {BACKGROUND_IMAGES.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="College guidance background"
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover scale-110 transition-opacity duration-1000 ease-in-out ${
            index === activeImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cream/90 via-brand-cream/80 to-brand-gold/25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.25))]" />

      {/* ================= CENTER CARD ================= */}
      <div className="relative z-10 w-full px-4">
        <div
          className={`max-w-3xl w-full border border-white/30 bg-white/70 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] p-10 md:p-14 rounded-3xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 border border-brand-gold/40 bg-white/80 px-6 py-2 text-xs font-semibold tracking-widest uppercase text-brand-maroon rounded-full shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-gold" />
            </span>
            Premium Education Guidance
          </div>

          {/* Heading */}
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-brand-ink">
            Confused about{" "}
            <span className="relative text-brand-maroon inline-block">
              College admissions
              <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-brand-gold to-yellow-400 rounded-full" />
            </span>
            ?
            <br />
            <span className="text-brand-ink/90 font-medium">
              We shortlist the right college for you.
            </span>
          </h1>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 sm:gap-6">
            <a
              href="#appointment"
              className="relative inline-block overflow-hidden bg-gradient-to-r from-brand-gold to-yellow-400 px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold text-brand-maroon rounded-full shadow-lg transition-transform hover:scale-105 hover:shadow-2xl"
            >
              Book Free Appointment
            </a>

            <a
              href="#colleges"
              className="text-sm sm:text-base font-semibold text-brand-maroon hover:text-brand-gold underline underline-offset-4 transition"
            >
              Browse Chennai colleges →
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Stat value={6300} suffix="+" label="Students counselled" show={isVisible} />
            <Stat value={30} suffix="+" label="Private colleges mapped" show={isVisible} />
            <Stat value={4.8} decimals={1} label="Student rating" show={isVisible} />
            <Stat value={10} suffix="+" label="Years of trust" show={isVisible} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= STAT COMPONENT ================= */
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
    <div className="flex flex-col items-center text-center bg-white/70 backdrop-blur-lg p-5 sm:p-6 rounded-2xl shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl">
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-gold">
        <CountUp start={0} end={show ? value : 0} duration={2.8} decimals={decimals} suffix={suffix} />
      </p>
      <p className="mt-1 text-sm sm:text-base font-semibold text-brand-maroon">{label}</p>
    </div>
  );
}

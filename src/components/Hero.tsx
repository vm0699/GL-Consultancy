"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function Hero() {
  const [isInView, setIsInView] = useState(false);

  // Trigger the count-up animation when the section comes into view
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("landing");
      if (section && window.scrollY + window.innerHeight > section.offsetTop) {
        setIsInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="landing"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#faf8f3] via-[#f5f1e8] to-[#f0ebe0]"
    >
      {/* Subtle background pattern - optional decorative element */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle, #d4af37 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-2 pb-12 w-full">
        <div className="flex-1 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-amber-50 px-3 py-1 text-xs text-amber-700 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            100% Private college focus
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Confused about{" "}
            <span className="text-amber-600">College admissions?</span>{" "}
            We shortlist the right college for you.
          </h1>

          <p className="text-sm md:text-base text-[#4a5568] max-w-xl">
            GL Consultancy is a student-first admission consultancy for
            private colleges in Chennai. Compare colleges, explore courses, see
            real student stories, and book a free counselling call.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#appointment"
              className="rounded-full bg-amber-500 px-6 py-2 text-sm font-semibold text-white hover:bg-amber-600 transition-colors shadow-md"
            >
              Book Free Appointment
            </a>
            <a
              href="#colleges"
              className="text-sm text-[#1e2749] hover:text-amber-600 underline-offset-4 hover:underline font-medium"
            >
              Browse Chennai colleges
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl pt-8">
            {/* Students Count */}
            <div className="flex flex-col items-center">
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-400">
                <CountUp
                  start={0}
                  end={isInView ? 6300 : 0}
                  duration={3}
                  separator=","
                  suffix="+"
                />
              </p>
              <p className="text-sm md:text-base text-[#4a5568] mt-2 text-center">Students counselled</p>
            </div>

            {/* Colleges Count */}
            <div className="flex flex-col items-center">
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-400">
                <CountUp
                  start={0}
                  end={isInView ? 25 : 0}
                  duration={3.5}
                  separator=","
                  suffix="+"
                />
              </p>
              <p className="text-sm md:text-base text-[#4a5568] mt-2 text-center">Private colleges mapped</p>
            </div>

            {/* Average Rating */}
            <div className="flex flex-col items-center">
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-400">
                <CountUp
                  start={0}
                  end={isInView ? 4.8 : 0}
                  duration={2.5}
                  separator=","
                  decimals={1}
                />
              </p>
              <p className="text-sm md:text-base text-[#4a5568] mt-2 text-center">Average student rating</p>
            </div>

            {/* Years of Experience */}
            <div className="flex flex-col items-center">
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-400">
                <CountUp
                  start={0}
                  end={isInView ? 5 : 0}
                  duration={3}
                  separator=","
                  suffix="+"
                />
              </p>
              <p className="text-sm md:text-base text-[#4a5568] mt-2 text-center">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

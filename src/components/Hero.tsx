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
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#faf9f7] via-[#f5f3f0] to-[#f0ece8]"
    >
      {/* Subtle background pattern - elegant decorative element */}
      <div className="absolute inset-0 z-0 opacity-8">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle, #d4af37 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-2 pb-12 w-full">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#8B4513]/40 bg-gradient-to-r from-[#8B4513]/5 to-[#D4AF37]/5 px-4 py-2 text-xs text-[#6B3410] font-semibold tracking-wide uppercase">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            Premium Education Guidance
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#2C1810]">
            Confused about{" "}
            <span className="text-[#8B4513]">College admissions?</span>{" "}
            <br />
            We shortlist the right college for you.
          </h1>

          <p className="text-base md:text-lg text-[#5a5a5a] max-w-2xl leading-relaxed font-light">
            GL Consultancy is a student-first admission consultancy for private colleges in Chennai. 
            With over 5 years of expertise, we help students compare colleges, explore courses, 
            discover real student stories, and book personalized counselling sessions.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#appointment"
              className="rounded-full bg-gradient-to-r from-[#8B4513] to-[#A0522D] px-8 py-3 text-sm font-semibold text-white hover:from-[#6B3410] hover:to-[#8B4513] transition-all shadow-lg hover:shadow-xl"
            >
              Book Free Appointment
            </a>
            <a
              href="#colleges"
              className="text-sm text-[#8B4513] hover:text-[#D4AF37] underline-offset-4 hover:underline font-semibold transition-colors"
            >
              Browse Chennai colleges
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl pt-12">
            {/* Students Count */}
            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-white/40 transition-colors">
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#D4AF37]">
                <CountUp
                  start={0}
                  end={isInView ? 6300 : 0}
                  duration={3}
                  separator=","
                  suffix="+"
                />
              </p>
              <p className="text-sm md:text-base text-[#6B3410] mt-3 text-center font-semibold">
                Students counselled
              </p>
            </div>

            {/* Colleges Count */}
            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-white/40 transition-colors">
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#D4AF37]">
                <CountUp
                  start={0}
                  end={isInView ? 25 : 0}
                  duration={3.5}
                  separator=","
                  suffix="+"
                />
              </p>
              <p className="text-sm md:text-base text-[#6B3410] mt-3 text-center font-semibold">
                Private colleges mapped
              </p>
            </div>

            {/* Average Rating */}
            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-white/40 transition-colors">
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#D4AF37]">
                <CountUp
                  start={0}
                  end={isInView ? 4.8 : 0}
                  duration={2.5}
                  separator=","
                  decimals={1}
                />
              </p>
              <p className="text-sm md:text-base text-[#6B3410] mt-3 text-center font-semibold">
                Average student rating
              </p>
            </div>

            {/* Years of Experience */}
            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-white/40 transition-colors">
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#D4AF37]">
                <CountUp
                  start={0}
                  end={isInView ? 5 : 0}
                  duration={3}
                  separator=","
                  suffix="+"
                />
              </p>
              <p className="text-sm md:text-base text-[#6B3410] mt-3 text-center font-semibold">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

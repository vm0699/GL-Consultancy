import Hero from "@/components/Hero";
import CompanyIntroSection from "@/components/CompanyIntroSection";
import CollegesSection from "@/components/CollegesSection";
import CoursesSection from "@/components/CoursesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import AppointmentSection from "@/components/AppointmentSection";

export default function HomePage() {
  return (
    <>
      <Hero />

      <CompanyIntroSection />

      <section
        id="colleges"
        className="max-w-6xl mx-auto px-4 py-16 scroll-mt-24"
      >
        <CollegesSection />
      </section>

      <section
        id="courses"
        className="max-w-6xl mx-auto px-4 py-16 scroll-mt-24"
      >
        <CoursesSection />
      </section>

      <section
        id="reviews"
        className="max-w-6xl mx-auto px-4 py-16 scroll-mt-24"
      >
        <TestimonialsSection />
      </section>



      <section
        id="appointment"
        className="max-w-6xl mx-auto px-4 py-16 scroll-mt-24"
      >
        <AppointmentSection />
      </section>
    </>
  );
}

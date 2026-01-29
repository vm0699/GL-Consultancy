import Hero from "@/components/Hero";
import CompanyIntroSection from "@/components/CompanyIntroSection";
import CollegesSection from "@/components/CollegesSection";
import ExamAlertsSection from "@/components/ExamAlertsSection";
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
        className="scroll-mt-24 py-12"
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Responsive Grid: Colleges on left, Alerts on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Colleges Section - Takes more space */}
            <div className="lg:col-span-9">
              <CollegesSection />
            </div>

            {/* Exam Alerts - Sidebar on desktop, below on mobile */}
            <div className="lg:col-span-3">
              <ExamAlertsSection />
            </div>
          </div>
        </div>
      </section>

      <section
        id="courses"
        className="max-w-6xl mx-auto px-4 py-12 scroll-mt-24"
      >
        <CoursesSection />
      </section>

      <section
        id="reviews"
        className="max-w-6xl mx-auto px-4 py-12 scroll-mt-24"
      >
        <TestimonialsSection />
      </section>

      <section
        id="about"
        className="max-w-6xl mx-auto px-4 py-12 scroll-mt-24"
      >
        <AboutSection />
      </section>

      <section
        id="appointment"
        className="max-w-6xl mx-auto px-4 py-12 scroll-mt-24"
      >
        <AppointmentSection />
      </section>
    </>
  );
}

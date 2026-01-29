const courses = [
  {
    name: "B.Tech / B.E. (Computer Science, IT, ECE, Mechanical)",
    type: "Undergraduate",
    highlights: [
      "Top Chennai private engineering colleges",
      "Cut-off and management quota guidance",
      "Hostel, fees, and placement comparison",
      "Specializations: AI/ML, Cyber Security, IoT"
    ],
  },
  {
    name: "B.Com / BBA / BMS",
    type: "Undergraduate",
    highlights: [
      "Commerce & Management colleges in city limits",
      "Specialisations like FinTech, Analytics, Marketing",
      "Ideal for CA, MBA or corporate career plans",
      "Industry internship placement support"
    ],
  },
  {
    name: "MBA / PGDM",
    type: "Postgraduate",
    highlights: [
      "Chennai business schools with strong placement records",
      "Profile-based shortlisting and SOP guidance",
      "Part-time & executive options available",
      "Avg. package 6-12 LPA in top B-schools"
    ],
  },
  {
    name: "Allied Health & Nursing",
    type: "Undergraduate / Diploma",
    highlights: [
      "Paramedical, Nursing and allied health programmes",
      "Hospital tie-ups and clinical exposure clarity",
      "Visa / abroad pathway friendly options",
      "Government & private sector job opportunities"
    ],
  },
  {
    name: "B.Sc / M.Sc (Sciences)",
    type: "UG / PG",
    highlights: [
      "Physics, Chemistry, Mathematics, Biotechnology",
      "Research-oriented colleges with lab facilities",
      "Pathway to higher studies and competitive exams",
      "Scholarships available for meritorious students"
    ],
  },
  {
    name: "BCA / MCA",
    type: "UG / PG",
    highlights: [
      "Computer Applications with coding focus",
      "Placement in IT companies and startups",
      "Software development and web technologies",
      "Job-ready curriculum with projects"
    ],
  },
  {
    name: "B.Arch / M.Arch",
    type: "UG / PG",
    highlights: [
      "Architecture colleges with NATA/JEE guidance",
      "Design studios and workshop facilities",
      "Industry projects and internships",
      "Emerging fields: Urban planning, Green architecture"
    ],
  },
  {
    name: "Hotel Management / Culinary Arts",
    type: "Undergraduate / Diploma",
    highlights: [
      "Top hotel management institutes in Chennai",
      "Star hotel internships and global placements",
      "Practical training in kitchens and F&B",
      "Cruise ship and international opportunities"
    ],
  },
];

export default function CoursesSection() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold text-[#1e2749]">
        Programs we guide for
      </h2>
      <p className="mt-2 text-sm text-[#4a5568] max-w-2xl">
        From engineering to arts & science, we help you align the course,
        college, and budget with your long-term career plan. Our team has helped students secure admissions across all major disciplines.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <article
            key={course.name}
            className="rounded-3xl border border-amber-200 bg-white p-5 shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-[#1e2749] leading-tight">{course.name}</h3>
              </div>
              <span className="shrink-0 rounded-full bg-amber-100 border border-amber-200 px-3 py-1 text-[10px] text-amber-700 font-bold uppercase tracking-wide">
                {course.type}
              </span>
            </div>

            <ul className="space-y-2 text-xs text-[#4a5568]">
              {course.highlights.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="#appointment"
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-700 transition-colors group"
            >
              Get expert guidance
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </article>
        ))}
      </div>

      <div className="mt-10 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#1e2749] mb-1">
              Didn't find your course?
            </h3>
            <p className="text-sm text-gray-600">
              We also guide for Pharma, Design, Mass Comm, Law and many more programs. Book a consultation to discuss your options.
            </p>
          </div>
          <a
            href="#appointment"
            className="shrink-0 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md text-sm"
          >
            Talk to counsellor
          </a>
        </div>
      </div>
    </div>
  );
}

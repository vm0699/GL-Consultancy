const courses = [
  {
    name: "B.Tech / B.E. (Computer Science, IT, ECE, Mechanical)",
    type: "Undergraduate",
    highlights: [
      "Top Chennai private engineering colleges",
      "Cut-off and management quota guidance",
      "Hostel, fees, and placement comparison",
    ],
  },
  {
    name: "B.Com / BBA / BMS",
    type: "Undergraduate",
    highlights: [
      "Commerce & Management colleges in city limits",
      "Specialisations like FinTech, Analytics, Marketing",
      "Ideal for CA, MBA or corporate career plans",
    ],
  },
  {
    name: "MBA / PGDM",
    type: "Postgraduate",
    highlights: [
      "Chennai business schools with strong placement records",
      "Profile-based shortlisting and SOP guidance",
      "Part-time & executive options available",
    ],
  },
  {
    name: "Allied Health & Nursing",
    type: "Undergraduate / Diploma",
    highlights: [
      "Paramedical, Nursing and allied health programmes",
      "Hospital tie-ups and clinical exposure clarity",
      "Visa / abroad pathway friendly options",
    ],
  },
];

export default function CoursesSection() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold">
        Courses we regularly handle
      </h2>
      <p className="mt-2 text-sm text-[#4a5568] max-w-xl">
        From engineering to arts &amp; science, we help you align the course,
        college, and budget with your long-term plan.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <article
            key={course.name}
            className="rounded-3xl border border-amber-200 bg-white p-5 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <span className="rounded-full bg-amber-100 border border-amber-200 px-3 py-1 text-[11px] text-amber-700 font-medium">
                {course.type}
              </span>
            </div>

            <ul className="mt-4 space-y-2 text-xs text-[#4a5568]">
              {course.highlights.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="#appointment"
              className="mt-4 inline-block text-xs font-semibold text-amber-600 underline-offset-4 hover:underline"
            >
              Talk to a counsellor about this course →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

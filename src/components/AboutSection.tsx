export default function AboutSection() {
  return (
    <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] items-start">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold">About us</h2>
        <p className="mt-3 text-sm text-[#4a5568]">
          GL Consultancy is an independent admission consultancy
          focused only on private colleges in and around Chennai. We are not
          owned by any college, so we are free to tell you what is actually
          happening on campus — placements, crowd, hostel, and real fees.
        </p>

        <p className="mt-3 text-sm text-[#4a5568]">
          Our team consists of recent graduates and senior counsellors who know
          the ground reality of OMR, ECR, Tambaram, Poonamallee and central
          Chennai colleges. We keep a live database of cut-offs, fee
          structures, and placement reports.
        </p>

        <div className="mt-5 grid grid-cols-3 gap-4 text-xs">
          <div className="rounded-2xl border border-amber-200 bg-white p-3">
            <p className="text-lg font-semibold text-amber-400">5+</p>
            <p className="mt-1 text-[#4a5568]">Years of counselling data</p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-white p-3">
            <p className="text-lg font-semibold text-amber-400">30+</p>
            <p className="mt-1 text-[#4a5568]">Partner colleges visited</p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-white p-3">
            <p className="text-lg font-semibold text-amber-400">24x7</p>
            <p className="mt-1 text-[#4a5568]">WhatsApp query support</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-amber-200 bg-white p-4 space-y-3 text-xs shadow-md">
        <h3 className="text-sm font-semibold text-[#1e2749]">
          What makes us different?
        </h3>
        <ul className="space-y-2 text-[#4a5568]">
          <li className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span>We give you a comparison sheet of 3–5 colleges, not just one name.</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span>We clearly separate government fees, college fees and “extra” charges.</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span>We encourage campus visits and student interactions before you lock a seat.</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span>No surprise “service charges” during seat blocking.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-amber-200 bg-[#f5f1e8]">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-[#6b7280]">
        <p>
          © {new Date().getFullYear()} GL Consultancy. All rights
          reserved.
        </p>
        <div className="flex flex-wrap gap-3 items-center">
          <span>Private College Admission Consultancy – Chennai</span>
          <span className="hidden md:inline-block">•</span>
          <span>Made for students &amp; parents, not colleges.</span>
          <span className="hidden md:inline-block">•</span>
          <Link
            href="/terms-and-conditions"
            className="hover:text-amber-600 transition-colors underline"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

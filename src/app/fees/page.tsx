"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { feeRecords, type FeeRecord } from "@/data/srmfees";
import LoginPopup from "@/components/LoginPopup";

type FilterState = {
  college: string;
  campus: string;
  level: string;
  program: string;
  branch: string;
};

export default function FeesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCollegeFromUrl = searchParams.get("college") ?? "All";

  const [filters, setFilters] = useState<FilterState>({
    college: initialCollegeFromUrl,
    campus: "All",
    level: "All",
    program: "All",
    branch: "All",
  });

  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [userInfo, setUserInfo] = useState<{ name: string; phone: string } | null>(null);

  // Check if user is logged in, if not show login popup
  useEffect(() => {
    const storedUserInfo = sessionStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    } else {
      // Show login popup if not logged in
      setShowLoginPopup(true);
    }
  }, []);

  const handleLoginSubmit = (name: string, phone: string) => {
    const userData = { name, phone };
    setUserInfo(userData);
    sessionStorage.setItem("userInfo", JSON.stringify(userData));
    setShowLoginPopup(false);
  };

  const handleLoginClose = () => {
    // If user closes without logging in, redirect back to home
    router.push("/");
  };

  // 1. DYNAMIC DROPDOWN LOGIC
  // Colleges are always available
  const colleges = useMemo(
    () => ["All", ...Array.from(new Set(feeRecords.map((f) => f.collegeName)))],
    []
  );

  // Campuses should depend on the selected College
  const campuses = useMemo(() => {
    const relevant = filters.college === "All"
      ? feeRecords
      : feeRecords.filter(f => f.collegeName === filters.college);
    return ["All", ...Array.from(new Set(relevant.map((f) => f.campus)))];
  }, [filters.college]);

  const levels = ["All", "UG", "PG"];

  // Programs should depend on the selected Campus and Level
  const programs = useMemo(() => {
    const relevant = feeRecords.filter(f =>
      (filters.campus === "All" || f.campus === filters.campus) &&
      (filters.level === "All" || f.level === filters.level)
    );
    return ["All", ...Array.from(new Set(relevant.map((f) => f.program)))];
  }, [filters.campus, filters.level]);

  // Branches should depend on the selected Program
  const branches = useMemo(() => {
    const relevant = feeRecords.filter(f =>
      (filters.campus === "All" || f.campus === filters.campus) &&
      (filters.program === "All" || f.program === filters.program)
    );
    return ["All", ...Array.from(new Set(relevant.map((f) => f.branch)))];
  }, [filters.campus, filters.program]);


  // 2. FILTERING THE ACTUAL CARDS
  const filteredFees = useMemo(() => {
    return feeRecords.filter((f) => {
      if (filters.college !== "All" && f.collegeName !== filters.college) return false;
      if (filters.campus !== "All" && f.campus !== filters.campus) return false;
      if (filters.level !== "All" && f.level !== filters.level) return false;
      if (filters.program !== "All" && f.program !== filters.program) return false;
      if (filters.branch !== "All" && f.branch !== filters.branch) return false;
      return true;
    });
  }, [filters]);


  // 3. SMART UPDATE LOGIC
  // When a top-level filter changes, we reset the lower-level filters to avoid "No Results"
  const updateFilter = (key: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const next = { ...prev, [key]: value };

      if (key === "college") {
        next.campus = "All";
        next.program = "All";
        next.branch = "All";
      }
      if (key === "campus") {
        next.program = "All";
        next.branch = "All";
      }
      if (key === "program") {
        next.branch = "All";
      }
      return next;
    });
  };

  return (
    <main className="min-h-screen bg-[#faf8f3] text-[#1e2749] pb-20">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <header className="border-b border-amber-100 pb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Fee Structure <span className="text-amber-600">2026</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-[#4a5568] max-w-2xl leading-relaxed">
            Select your preferences below to view detailed indicative yearly fees.
            Final amounts are verified during the admission process.
          </p>
        </header>

        {/* Filters Section */}
        <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 bg-white p-6 rounded-3xl shadow-sm border border-amber-50">
          <SelectBox
            label="College"
            value={filters.college}
            options={colleges}
            onChange={(v) => updateFilter("college", v)}
          />
          <SelectBox
            label="Campus"
            value={filters.campus}
            options={campuses}
            onChange={(v) => updateFilter("campus", v)}
          />
          <SelectBox
            label="Level"
            value={filters.level}
            options={levels}
            onChange={(v) => updateFilter("level", v)}
          />
          <SelectBox
            label="Program"
            value={filters.program}
            options={programs}
            onChange={(v) => updateFilter("program", v)}
          />
          <SelectBox
            label="Branch / Specialisation"
            value={filters.branch}
            options={branches}
            onChange={(v) => updateFilter("branch", v)}
          />
        </section>

        {/* Results Section */}
        <section className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold uppercase tracking-wider text-[#6b7280]">
              Available Programs ({filteredFees.length})
            </h2>
            {filteredFees.length < feeRecords.length && (
              <button
                onClick={() => setFilters({ college: "All", campus: "All", level: "All", program: "All", branch: "All" })}
                className="text-sm text-amber-600 font-medium hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            {filteredFees.length === 0 ? (
              <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-amber-200">
                <p className="text-[#6b7280]">No matching fee entries found.</p>
                <p className="text-sm text-[#9ca3af] mt-1">Try adjusting your filters or campus selection.</p>
              </div>
            ) : (
              filteredFees.map((fee) => (
                <FeeCard key={fee.id} record={fee} />
              ))
            )}
          </div>
        </section>

        <footer className="mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-100">
          <p className="text-xs text-[#6b7280] leading-relaxed">
            * All values shown are indicative. Fees may include additional components such as
            caution deposits, exam fees, or library fees not listed here.
            Confirm latest values with the official university brochure.
          </p>
        </footer>
      </div>

      {/* Login Popup */}
      <LoginPopup
        isOpen={showLoginPopup}
        onClose={handleLoginClose}
        onSubmit={handleLoginSubmit}
      />
    </main>
  );
}

// --- SUB-COMPONENTS ---

function SelectBox({ label, value, options, onChange }: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-bold uppercase text-[#4a5568] px-1">{label}</span>
      <select
        className="rounded-2xl bg-[#fafafa] border border-gray-200 px-4 py-3 text-sm text-[#1e2749] outline-none transition-all focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1em_1em]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234a5568'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function FeeCard({ record }: { record: FeeRecord }) {
  return (
    <article className="group rounded-3xl border border-transparent bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-amber-200">
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex items-start justify-between">
            <span className="px-2 py-1 rounded-lg bg-amber-50 text-[10px] font-bold text-amber-700 uppercase">
              {record.level} • {record.campus}
            </span>
          </div>
          <h3 className="text-base font-bold text-[#1e2749] mt-3 group-hover:text-amber-700 transition-colors">
            {record.branch}
          </h3>
          <p className="text-xs text-[#6b7280] font-medium">{record.program}</p>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-50">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-black text-amber-600">{record.tuitionPerYear.split(' ')[0]}</span>
            <span className="text-xs text-[#9ca3af] font-medium">/ year</span>
          </div>
          {record.notes && (
            <p className="mt-3 text-[10px] leading-relaxed text-[#9ca3af] italic">
              Note: {record.notes}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
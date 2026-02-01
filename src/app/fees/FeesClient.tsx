"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { feeRecords as srmFeeRecords, type FeeRecord } from "@/data/srmfees";
import { vitFeeRecords } from "@/data/vitfees";
import { sathyabamaFeeRecords } from "@/data/sathyabamafees";
import { saveethaFeeRecords } from "@/data/saveethafees";
import LoginPopup from "@/components/LoginPopup";

// Merge SRM, VIT, Sathyabama, and Saveetha fee records
const feeRecords = [...srmFeeRecords, ...vitFeeRecords, ...sathyabamaFeeRecords, ...saveethaFeeRecords];

type FilterState = {
    college: string;
    campus: string;
    level: string;
    program: string;
    branch: string;
    category: string; // New state for VIT categories
};

export default function FeesClient() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const initialCollegeFromUrl = searchParams.get("college") ?? "All";

    const [filters, setFilters] = useState<FilterState>({
        college: initialCollegeFromUrl,
        campus: "All",
        level: "All",
        program: "All",
        branch: "All",
        category: "All",
    });

    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [userInfo, setUserInfo] = useState<{ name: string; phone: string } | null>(null);

    // localStorage key for persistence
    const STORAGE_KEY = "fee_page_user";

    // Authentication Logic - Check localStorage on mount
    useEffect(() => {
        // Only run on client-side
        if (typeof window === "undefined") return;

        const storedUserInfo = localStorage.getItem(STORAGE_KEY);
        if (storedUserInfo) {
            try {
                const parsed = JSON.parse(storedUserInfo);
                // Validate stored data has required fields
                if (parsed.name && parsed.phone) {
                    setUserInfo(parsed);
                    return;
                }
            } catch {
                // Invalid JSON, remove it
                localStorage.removeItem(STORAGE_KEY);
            }
        }
        // No valid stored data, show popup
        setShowLoginPopup(true);
    }, []);

    const handleLoginSubmit = async (name: string, phone: string): Promise<void> => {
        // Call API to submit data to Google Sheets
        const response = await fetch("/api/fee-lock", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                phone,
                pageName: "Fee Page",
                source: "fee-lock",
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Failed to submit. Please try again.");
        }

        // Only save to localStorage after successful API response
        const userData = { name, phone };
        setUserInfo(userData);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
        setShowLoginPopup(false);
    };

    const handleLoginClose = () => {
        router.push("/");
    };

    // --- CASCADING DROPDOWN LOGIC ---

    const colleges = useMemo(
        () => ["All", ...Array.from(new Set(feeRecords.map((f) => f.collegeName)))],
        []
    );

    const campuses = useMemo(() => {
        const relevant = filters.college === "All"
            ? feeRecords
            : feeRecords.filter(f => f.collegeName === filters.college);
        return ["All", ...Array.from(new Set(relevant.map((f) => f.campus)))];
    }, [filters.college]);

    const levels = ["All", "UG", "PG"];

    const categories = ["All", "Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];

    const programs = useMemo(() => {
        const relevant = feeRecords.filter(f =>
            (filters.campus === "All" || f.campus === filters.campus) &&
            (filters.level === "All" || f.level === filters.level)
        );
        return ["All", ...Array.from(new Set(relevant.map((f) => f.program)))];
    }, [filters.campus, filters.level]);

    const branches = useMemo(() => {
        const relevant = feeRecords.filter(f =>
            (filters.campus === "All" || f.campus === filters.campus) &&
            (filters.program === "All" || f.program === filters.program) &&
            // If it's VIT, we only show branches matching the category string if selected
            (filters.category === "All" || f.branch.includes(filters.category))
        );
        return ["All", ...Array.from(new Set(relevant.map((f) => f.branch)))];
    }, [filters.campus, filters.program, filters.category]);

    // --- FILTERING THE CARDS ---
    const filteredFees = useMemo(() => {
        return feeRecords.filter((f) => {
            if (filters.college !== "All" && f.collegeName !== filters.college) return false;
            if (filters.campus !== "All" && f.campus !== filters.campus) return false;
            if (filters.level !== "All" && f.level !== filters.level) return false;
            if (filters.program !== "All" && f.program !== filters.program) return false;
            if (filters.branch !== "All" && f.branch !== filters.branch) return false;

            // New Category Logic for VIT
            if (filters.college.toLowerCase().includes("vit")) {
                if (filters.category !== "All" && !f.branch.includes(filters.category)) return false;
            }

            return true;
        });
    }, [filters]);

    const updateFilter = (key: keyof FilterState, value: string) => {
        setFilters((prev) => {
            const next = { ...prev, [key]: value };

            if (key === "college") {
                next.campus = "All";
                next.program = "All";
                next.branch = "All";
                next.category = "All"; // Reset category when college changes
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

    const isVitSelected = filters.college.toLowerCase().includes("vit");

    return (
        <main className="min-h-screen bg-[#faf8f3] text-[#1e2749] pb-20">
            {/* Show loading or empty state while checking authentication */}
            {!userInfo && showLoginPopup ? (
                <div className="mx-auto max-w-5xl px-4 py-16">
                    <div className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm text-center">
                        <p className="text-sm text-[#6b7280]">Please login to view fee information...</p>
                    </div>
                </div>
            ) : (
                <div className="mx-auto max-w-5xl px-4 py-16">
                    <header className="border-b border-amber-100 pb-8">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Fee Structure <span className="text-amber-600">2026</span>
                        </h1>
                        <p className="mt-4 text-sm md:text-base text-[#4a5568] max-w-2xl leading-relaxed">
                            Comparing VIT and SRM? Select a college to see specific categories and branch-wise structures.
                        </p>
                    </header>

                    {/* Filters Section */}
                    <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 bg-white p-6 rounded-3xl shadow-sm border border-amber-50 transition-all">
                        <SelectBox
                            label="College"
                            value={filters.college}
                            options={colleges}
                            onChange={(v) => updateFilter("college", v)}
                        />

                        {/* Only show Category if VIT is selected */}
                        {isVitSelected && (
                            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                                <SelectBox
                                    label="Admission Category"
                                    value={filters.category}
                                    options={categories}
                                    onChange={(v) => updateFilter("category", v)}
                                />
                            </div>
                        )}

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
                                Matching Records ({filteredFees.length})
                            </h2>
                            {(filters.college !== "All" || filters.branch !== "All") && (
                                <button
                                    onClick={() => setFilters({ college: "All", campus: "All", level: "All", program: "All", branch: "All", category: "All" })}
                                    className="text-sm text-amber-600 font-medium hover:underline"
                                >
                                    Clear all filters
                                </button>
                            )}
                        </div>

                        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
                            {filteredFees.length === 0 ? (
                                <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-amber-200">
                                    <p className="text-[#6b7280]">No matching records found for this combination.</p>
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
                            * All values shown are indicative. VIT Fees are structured by categories (1-5) based on VITEEE performance.
                            Final category allocation is determined during counseling.
                        </p>
                    </footer>
                </div>
            )}

            <LoginPopup
                isOpen={showLoginPopup}
                onClose={handleLoginClose}
                onSubmit={handleLoginSubmit}
                mandatory={true}
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
    const isVit = record.collegeId.includes("vit");

    return (
        <article className={`group rounded-3xl border ${isVit ? 'border-amber-100 bg-white' : 'border-transparent bg-white'} p-6 shadow-sm transition-all hover:shadow-md hover:border-amber-200`}>
            <div className="flex flex-col h-full justify-between">
                <div>
                    <div className="flex items-start justify-between">
                        <span className={`px-2 py-1 rounded-lg ${isVit ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-700'} text-[10px] font-bold uppercase`}>
                            {record.collegeName} • {record.campus}
                        </span>
                        <span className="px-2 py-1 rounded-lg bg-amber-50 text-[10px] font-bold text-amber-700 uppercase">
                            {record.level}
                        </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1e2749] mt-3 group-hover:text-amber-700 transition-colors">
                        {record.branch}
                    </h3>
                    <p className="text-xs text-[#6b7280] font-medium">{record.program}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-50">
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl font-black text-amber-600">{record.tuitionPerYear.split(" ")[0]}</span>
                        <span className="text-xs text-[#9ca3af] font-medium">/ year</span>
                    </div>
                    {record.notes && (
                        <p className="mt-3 text-[10px] leading-relaxed text-[#9ca3af] italic">
                            {record.notes}
                        </p>
                    )}
                </div>
            </div>
        </article>
    );
}
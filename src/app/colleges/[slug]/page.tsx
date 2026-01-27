"use client";

import { useMemo, useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { colleges } from "@/data/colleges";
import { feeRecords, type FeeRecord } from "@/data/srmfees"; // Importing the master data

export default function CollegeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [selectedCampus, setSelectedCampus] = useState<string>("All Campuses");
  const [searchQuery, setSearchQuery] = useState("");
  const [userInfo, setUserInfo] = useState<{ name: string; phone: string } | null>(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Find the college
  const college = colleges.find((c) => c.slug === slug);

  // Check if user is logged in
  useEffect(() => {
    const storedUserInfo = sessionStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  // If college not found, redirect to home
  useEffect(() => {
    if (!college) {
      router.push("/");
    }
  }, [college, router]);

  // --- CASCADING FILTER LOGIC ---

  // 1. Available Campuses for this specific college slug (usually "srm")
  const campusOptions = useMemo(() => {
    return ["All Campuses", ...Array.from(new Set(feeRecords.map((f) => f.campus)))];
  }, []);

  // 2. Filtered list based on dropdown and search
  const filteredCourses = useMemo(() => {
    return feeRecords.filter((course) => {
      const matchesCampus = selectedCampus === "All Campuses" || course.campus === selectedCampus;
      const matchesSearch =
        course.branch.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.program.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCampus && matchesSearch;
    });
  }, [selectedCampus, searchQuery]);

  // 3. Check if filters are active
  const isFilterActive = selectedCampus !== "All Campuses" || searchQuery !== "";

  // 4. Display courses - show first 20 if no filters, otherwise show all filtered results
  const displayedCourses = useMemo(() => {
    if (isFilterActive) {
      // If filters are active, show all matching courses
      return filteredCourses;
    } else {
      // If no filters, show first 20 or all if showAll is true
      return showAll ? filteredCourses : filteredCourses.slice(0, 20);
    }
  }, [filteredCourses, isFilterActive, showAll]);

  if (!college) return null;

  // For non-SRM colleges, show coming soon
  if (slug !== "srm") {
    return (
      <div className="min-h-screen bg-[#faf8f3] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-8 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-[#1e2749] mb-4">{college.name}</h1>
            <p className="text-gray-600">Detailed information coming soon!</p>
          </div>
        </div>
      </div>
    );
  }

  const handleApplicationAccess = () => {
    if (!userInfo) {
      setShowLoginPopup(true);
    } else {
      window.open("https://www.srmist.edu.in/admissions", "_blank");
    }
  };

  const handleLoginSubmit = (name: string, phone: string) => {
    const userData = { name, phone };
    setUserInfo(userData);
    sessionStorage.setItem("userInfo", JSON.stringify(userData));
    setShowLoginPopup(false);
    // Open application portal after login
    window.open("https://www.srmist.edu.in/admissions", "_blank");
  };

  const handleFeeAccess = () => {
    if (!userInfo) {
      setShowLoginPopup(true);
    } else {
      window.location.href = "/fees";
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Hero Section */}
      <div
        className="h-64 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${college.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto px-4 pb-8 w-full">
            <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-amber-300 mb-4 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Colleges
            </Link>
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{college.name}</h1>
                <p className="text-amber-200">{college.affiliation}</p>
              </div>
              <span className="rounded-full bg-amber-500 px-4 py-2 text-lg font-bold text-white">
                {college.rating.toFixed(1)}★
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* About College Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1e2749] mb-6">About SRM University</h2>
          <div className="bg-white rounded-2xl border border-amber-200 p-8 shadow-sm">
            <p className="text-gray-700 leading-relaxed mb-4">
              SRM Institute of Science and Technology (SRMIST) is one of the top-ranking universities in India,
              offering a wide spectrum of undergraduate, postgraduate and doctoral programs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <StatBox label="Established" value="1985" />
              <StatBox label="Students" value="50K+" />
              <StatBox label="Programs" value={`${feeRecords.length}+`} />
              <StatBox label="NAAC Grade" value="A++" />
            </div>
          </div>
        </section>

        {/* Application Access Section - Moved here */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Admissions for 2026 Open</h2>
              <p className="mb-8 text-amber-50 max-w-xl opacity-90">
                Official application forms for SRMIST are now live. Register your details to get direct access to the application portal.
              </p>
              <button
                onClick={handleApplicationAccess}
                className="bg-white text-amber-700 font-bold px-10 py-4 rounded-2xl hover:bg-amber-50 transition-all transform hover:scale-105 shadow-xl"
              >
                {userInfo ? "Start Application Now" : "Login to Apply"}
              </button>
            </div>
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Course Search Section */}
        <section className="mb-12">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h2 className="text-3xl font-bold text-[#1e2749]">Explore Programs</h2>
            <div className="flex items-center gap-2 text-sm text-amber-600 font-semibold bg-amber-50 px-4 py-2 rounded-full border border-amber-100">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Showing {filteredCourses.length} Programs
            </div>
          </header>

          <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-2xl shadow-sm border border-amber-100">
            <select
              value={selectedCampus}
              onChange={(e) => setSelectedCampus(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 outline-none bg-[#fafafa] text-[#1e2749] font-medium min-w-[200px]"
            >
              {campusOptions.map((campus) => (
                <option key={campus} value={campus}>{campus}</option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Search by branch or degree (e.g. Computer Science)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 outline-none bg-[#fafafa] text-[#1e2749]"
            />
          </div>

          {/* Courses List */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-white rounded-3xl border border-amber-100 p-6 hover:shadow-xl hover:border-amber-400 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] bg-amber-50 text-amber-700 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                    {course.campus}
                  </span>
                  <span className="text-[10px] bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-bold uppercase">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1e2749] mb-2 group-hover:text-amber-600 transition-colors">
                  {course.branch}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{course.program}</p>
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="text-xs text-gray-400 font-medium italic">
                    Indicative Fee:{" "}
                    <button onClick={handleFeeAccess} className="text-amber-600 underline hover:text-amber-700">
                      Check here
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button - only when no filters and there are more courses */}
          {!isFilterActive && !showAll && filteredCourses.length > 20 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Show More ({filteredCourses.length - 20} more programs)
              </button>
            </div>
          )}

          {filteredCourses.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-amber-200">
              <p className="text-gray-500 font-medium">No programs match your search.</p>
              <button onClick={() => { setSearchQuery(""); setSelectedCampus("All Campuses"); }} className="mt-2 text-amber-600 text-sm hover:underline">Clear all filters</button>
            </div>
          )}
        </section>
      </div>

      {/* Login Popup */}
      {showLoginPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setShowLoginPopup(false)} />
          <div className="relative bg-[#faf8f3] rounded-3xl shadow-2xl w-full max-w-md p-8 border border-amber-200 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-amber-500"></div>
            <button onClick={() => setShowLoginPopup(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#1e2749] mb-2">Student Access</h2>
              <p className="text-gray-500 text-sm">Provide your details to continue to the application.</p>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get("name") as string;
              const phone = formData.get("phone") as string;
              if (name && phone && /^[6-9]\d{9}$/.test(phone)) handleLoginSubmit(name, phone);
            }} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-[#1e2749] uppercase mb-2">Full Name</label>
                <input type="text" name="name" required className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-amber-500 outline-none bg-white shadow-sm" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#1e2749] uppercase mb-2">Mobile Number</label>
                <input type="tel" name="phone" required maxLength={10} pattern="[6-9]\d{9}" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-amber-500 outline-none bg-white shadow-sm" placeholder="10-digit number" />
              </div>
              <button type="submit" className="w-full bg-amber-500 text-white font-bold py-4 rounded-2xl hover:bg-amber-600 transition-all shadow-lg">
                Continue
              </button>
            </form>
          </div>
        </div>
      )
      }
    </div >
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#fafafa] border border-gray-100 rounded-2xl p-4 text-center hover:bg-amber-50 transition-colors">
      <div className="text-2xl font-black text-amber-600 mb-1">{value}</div>
      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</div>
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ExamAlertsSection() {
    const [showAll, setShowAll] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [selectedCollege, setSelectedCollege] = useState<string>("");
    const [userInfo, setUserInfo] = useState<{ name: string; phone: string } | null>(null);
    const router = useRouter();

    // Check if user is logged in
    useEffect(() => {
        const storedUserInfo = sessionStorage.getItem("userInfo");
        if (storedUserInfo) {
            setUserInfo(JSON.parse(storedUserInfo));
        }
    }, []);

    const topAlerts = [
        {
            id: 1,
            title: "SRMJEEE 2026",
            collegeName: "SRM University",
            date: "Application Open",
            deadline: "Till March 31, 2026",
            status: "live",
            color: "amber",
            applyUrl: "https://www.srmist.edu.in/admissions"
        },
        {
            id: 2,
            title: "VITEEE 2026",
            collegeName: "VIT",
            date: "Registration Started",
            deadline: "Closes April 15, 2026",
            status: "live",
            color: "blue",
            applyUrl: "https://vit.ac.in/admissions"
        },
        {
            id: 3,
            title: "BITSAT 2026",
            collegeName: "BITS Pilani",
            date: "Registration Open",
            deadline: "Till March 20, 2026",
            status: "live",
            color: "emerald",
            applyUrl: "https://www.bits-pilani.ac.in/admissions"
        }
    ];

    const otherAlerts = [
        {
            id: 4,
            title: "Sathyabama Entrance",
            collegeName: "Sathyabama University",
            date: "Applications Open",
            deadline: "Till April 30, 2026",
            status: "live",
            color: "purple",
            applyUrl: "https://www.sathyabama.ac.in/admissions"
        },
        {
            id: 5,
            title: "Hindustan Admissions",
            collegeName: "Hindustan University",
            date: "Direct Entry Open",
            deadline: "Till May 15, 2026",
            status: "live",
            color: "indigo",
            applyUrl: "https://www.hindustanuniv.ac.in/admissions"
        },
        {
            id: 6,
            title: "Saveetha Admissions",
            collegeName: "Saveetha University",
            date: "Applications Open",
            deadline: "Till April 20, 2026",
            status: "live",
            color: "pink",
            applyUrl: "https://www.saveetha.ac.in/admissions"
        },
        {
            id: 7,
            title: "SRM Easwari Admissions",
            collegeName: "SRM Easwari",
            date: "Applications Open",
            deadline: "Till May 10, 2026",
            status: "upcoming",
            color: "orange",
            applyUrl: "https://www.srmeaswari.ac.in/admissions"
        },
        {
            id: 8,
            title: "SRM Valliammai",
            collegeName: "SRM Valliammai",
            date: "Applications Open",
            deadline: "Till May 5, 2026",
            status: "upcoming",
            color: "teal",
            applyUrl: "https://www.srmvalliammai.ac.in/admissions"
        }
    ];

    const displayedAlerts = showAll ? [...topAlerts, ...otherAlerts] : topAlerts;

    const handleApplyClick = (applyUrl: string, collegeName: string) => {
        if (!userInfo) {
            setSelectedCollege(collegeName);
            setShowLoginPopup(true);
        } else {
            window.open(applyUrl, "_blank");
        }
    };

    const handleLoginSubmit = (name: string, phone: string) => {
        const userData = { name, phone };
        setUserInfo(userData);
        sessionStorage.setItem("userInfo", JSON.stringify(userData));
        setShowLoginPopup(false);

        // Find the college URL and open it
        const alert = [...topAlerts, ...otherAlerts].find(a => a.collegeName === selectedCollege);
        if (alert) {
            window.open(alert.applyUrl, "_blank");
        }
    };

    const getColorClasses = (color: string) => {
        const colors: Record<string, string> = {
            amber: "border-amber-500",
            blue: "border-blue-500",
            emerald: "border-emerald-500",
            purple: "border-purple-500",
            indigo: "border-indigo-500",
            pink: "border-pink-500",
            orange: "border-orange-500",
            teal: "border-teal-500"
        };
        return colors[color] || "border-gray-500";
    };

    return (
        <>
            <div className="sticky top-24 space-y-4">
                {/* Header */}
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-3 shadow-lg">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="relative flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
                        </div>
                        <h3 className="text-white font-bold text-base">Live Updates</h3>
                    </div>
                    <p className="text-amber-50 text-[10px]">Latest exam dates & deadlines</p>
                </div>

                {/* Alerts */}
                <div className="space-y-2.5">
                    {displayedAlerts.map((alert) => (
                        <div
                            key={alert.id}
                            className={`bg-white rounded-xl p-3 border-l-4 shadow-md hover:shadow-lg transition-all ${getColorClasses(alert.color)}`}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-800 text-xs mb-1">{alert.title}</h4>
                                    {alert.status === 'live' && (
                                        <span className="inline-block px-1.5 py-0.5 bg-red-100 text-red-600 text-[9px] font-bold rounded-full uppercase mb-1">
                                            Live
                                        </span>
                                    )}
                                </div>
                            </div>
                            <p className="text-[10px] text-gray-600 mb-0.5">{alert.date}</p>
                            <p className="text-[10px] font-semibold text-gray-700 mb-2">{alert.deadline}</p>

                            <button
                                onClick={() => handleApplyClick(alert.applyUrl, alert.collegeName)}
                                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg transition-all shadow-sm hover:shadow-md"
                            >
                                Apply Now →
                            </button>
                        </div>
                    ))}
                </div>

                {/* Show More/Less Button */}
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold py-2 px-4 rounded-xl transition-colors"
                >
                    {showAll ? "Show Less ▲" : `Show ${otherAlerts.length} More ▼`}
                </button>

                {/* Footer Note */}
                <div className="bg-gray-50 rounded-xl p-2.5 text-center">
                    <p className="text-[9px] text-gray-500 italic">
                        📢 Updates posted as announced by universities
                    </p>
                </div>
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
                            <p className="text-gray-500 text-sm">Login to apply for {selectedCollege}</p>
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
                                Continue to Application
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

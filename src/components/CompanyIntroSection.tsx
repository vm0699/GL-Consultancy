"use client";

export default function CompanyIntroSection() {
    return (
        <section className="relative py-16 bg-gradient-to-br from-[#faf8f3] to-amber-50/30">
            <div className="max-w-5xl mx-auto px-4">
                <div className="bg-white/80 backdrop-blur-sm border border-amber-100 rounded-3xl p-8 md:p-12 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1e2749]">About GL Consultancy</h2>
                    </div>

                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                        GL Consultancy provides <span className="font-semibold text-amber-600">professional consultation and admission guidance</span> at the best possible rates for students seeking admission to top private colleges across Tamil Nadu. With over a decade of experience and a proven <span className="font-semibold text-emerald-600">100% success rate</span>, we have helped more than 6,300+ students secure admissions to their dream colleges.
                    </p>

                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        Our expert counsellors understand the complexities of college admissions and work closely with you to identify the perfect institution that matches your academic goals, budget, and career aspirations. We simplify the entire admission process, ensuring a stress-free journey from consultation to enrollment.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">100% Success Rate</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">10+ Years of Excellence</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

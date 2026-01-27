import Link from "next/link";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-[#faf8f3]">
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Back to Home Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-8 transition-colors"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back to Home
                </Link>

                {/* Header */}
                <h1 className="text-4xl font-bold text-[#1e2749] mb-4">
                    TERMS AND CONDITIONS
                </h1>
                <p className="text-lg font-semibold text-[#1e2749] mb-2">
                    Career Guidance and Educational Consultancy Services
                </p>
                <p className="text-sm text-gray-500 mb-8">
                    Last Updated: January 26, 2026
                </p>

                {/* Content */}
                <div className="prose prose-amber max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#1e2749] mb-4">
                            1. DEFINITIONS
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            For the purpose of these Terms and Conditions ("Agreement"):
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li><strong>"Company"</strong> refers to the Career Guidance / Educational Consultancy entity providing advisory services.</li>
                            <li><strong>"Client"</strong> refers to the student and/or parent or legal guardian engaging the Company's services.</li>
                            <li><strong>"Services"</strong> refer exclusively to professional career counseling, admissions guidance, procedural assistance, mentoring, and advisory support.</li>
                            <li><strong>"Institutions"</strong> refer to colleges, universities, autonomous bodies, or educational authorities.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#1e2749] mb-4">
                            2. SCOPE OF ENGAGEMENT
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>2.1</strong> The Company provides professional advisory and facilitation services only.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>2.2</strong> The Company does not function as an admitting authority, nor does it possess control over admission decisions, seat allocation, or institutional discretion.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>2.3</strong> All admissions are subject to the independent policies, eligibility criteria, timelines, and approvals of the respective Institutions and regulatory bodies.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#1e2749] mb-4">
                            3. NO GUARANTEE CLAUSE
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>3.1</strong> The Client expressly acknowledges that no assurance, guarantee, or warranty—express or implied—is provided regarding:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-3">
                            <li>Admission confirmation</li>
                            <li>Preferred institution or course allocation</li>
                            <li>Timelines of admission results</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>3.2</strong> Any predictions, guidance, or recommendations provided are professional opinions based on available data and shall not be construed as guarantees.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#1e2749] mb-4">
                            4. PROFESSIONAL FEE AND NON-REFUNDABILITY
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>4.1</strong> The fees charged by the Company constitute professional service charges for time, expertise, planning, consultation, coordination, and mentoring.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>4.2</strong> All fees are strictly non-refundable, irrespective of:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-3">
                            <li>Admission outcomes</li>
                            <li>Client withdrawal or discontinuation</li>
                            <li>Delays or changes by institutions</li>
                            <li>Regulatory or policy changes</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>4.3</strong> Once services have commenced, no refund, reversal, or adjustment shall be entertained under any circumstances.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#1e2749] mb-4">
                            5. TRANSPARENCY OF CHARGES
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>5.1</strong> The Company maintains a transparent pricing structure.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>5.2</strong> All consultancy charges are disclosed prior to service commencement.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>5.3</strong> Any statutory, institutional, or third-party charges are payable directly by the Client to the respective authorities.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>5.4</strong> The Company does not levy undisclosed commissions or conditional fees.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#1e2749] mb-4">
                            6. ETHICAL ADVISORY POSITION
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>6.1</strong> The Company operates under a strictly ethical advisory framework and provides guidance based on merit, eligibility, suitability, and informed career planning.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>6.2</strong> Recommendations are independent and are not influenced by external inducements, quotas, or informal considerations.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>6.3</strong> The advisory role remains consultative and facilitative in nature at all times.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#1e2749] mb-4">
                            7. DEDICATED CONSULTANT SUPPORT
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>7.1</strong> A dedicated consultant may be assigned to the Client to ensure continuity of guidance.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>7.2</strong> The Company reserves the right to reassign consultants for operational or administrative reasons without affecting service quality.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>7.3</strong> Consultant availability does not imply 24/7 access and is subject to reasonable working hours and communication protocols.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#1e2749] mb-4">
                            8. CLIENT RESPONSIBILITIES
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            The Client is solely responsible for:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Accuracy and authenticity of all documents and information submitted</li>
                            <li>Timely submission of applications, forms, and fees</li>
                            <li>Compliance with institutional deadlines and rules</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#1e2749] mb-4">
                            9. LIMITATION OF LIABILITY
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>9.1</strong> The Company shall not be liable for:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-3">
                            <li>Rejection, cancellation, or deferral of admission</li>
                            <li>Policy changes by Institutions or governing authorities</li>
                            <li>Visa or travel-related outcomes, if applicable</li>
                            <li>Indirect, incidental, or consequential losses</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>9.2</strong> The maximum liability of the Company, under any circumstances, shall be limited strictly to the value of the consultancy service paid by the Client.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#1e2749] mb-4">
                            10. CONFIDENTIALITY AND DATA PROTECTION
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>10.1</strong> All personal, academic, and financial information shared with the Company is treated as confidential.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>10.2</strong> Data may be disclosed only when required by law or with explicit consent.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>10.3</strong> The Company is not responsible for data breaches originating from third-party platforms or institutions.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#1e2749] mb-4">
                            11. INDEPENDENT INSTITUTIONAL RELATIONSHIP
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>11.1</strong> The Company operates as an independent advisory entity and is not an agent, representative, or employee of any institution unless explicitly stated in writing.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>11.2</strong> Institutional communications, offers, and decisions are independent of the Company's advisory role.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#1e2749] mb-4">
                            12. SERVICE CONDUCT AND TERMINATION
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>12.1</strong> The Company reserves the right to suspend or terminate services without refund in cases of:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Misrepresentation of information</li>
                            <li>Unethical conduct</li>
                            <li>Abuse or harassment of staff</li>
                            <li>Breach of these Terms</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#1e2749] mb-4">
                            13. AMENDMENTS
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>13.1</strong> The Company reserves the right to revise these Terms and Conditions at any time.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>13.2</strong> Updated terms shall apply immediately upon publication or communication.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#1e2749] mb-4">
                            14. GOVERNING LAW
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>14.1</strong> This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction where the Company operates.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>14.2</strong> Any disputes arising from or related to this Agreement shall be resolved exclusively in the competent courts of that jurisdiction.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#1e2749] mb-4">
                            15. ACCEPTANCE
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            By engaging the Company's services, making payment, or continuing with the process, the Client acknowledges and agrees to these Terms and Conditions in full.
                        </p>
                    </section>

                    <div className="mt-12 pt-8 border-t border-amber-200">
                        <p className="text-sm text-gray-600 italic">
                            By using our services, you acknowledge that you have read, understood,
                            and agree to be bound by these Terms and Conditions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

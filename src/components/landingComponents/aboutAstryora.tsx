'use client'

import Link from 'next/link'

const AboutAstryora = () => {
    return (
        <section className="w-full bg-white py-20 px-6">
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="px-4 py-1 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-full">
                        How We're Different
                    </span>

                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-6">
                        Not Jobs. Not Internships.
                        <span className="block text-blue-600 mt-1">Real Missions.</span>
                    </h2>

                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Astryora Opportunities connects talent and startups through real,
                        impact-based missions. Every profile and company is validated by
                        actual output, not claims.
                    </p>
                </div>

                {/* Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

                    {/* Pillar 1 */}
                    <div className="p-8 border rounded-2xl bg-white hover:shadow-md transition">
                        <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-5">
                            ⭐
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Skill-Proven Talent</h3>
                        <p className="text-slate-600">
                            Profiles use <span className="font-semibold text-blue-600">ASI</span> —
                            a score earned from completed missions. Skills are proven by
                            performance, not text.
                        </p>
                    </div>

                    {/* Pillar 2 */}
                    <div className="p-8 border rounded-2xl bg-white hover:shadow-md transition">
                        <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-rose-100 text-rose-600 mb-5">
                            🧩
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Real Startup Missions</h3>
                        <p className="text-slate-600">
                            Founders post real, outcome-based work — not fake internships or
                            certificate-oriented tasks.
                        </p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="p-8 border rounded-2xl bg-white hover:shadow-md transition">
                        <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600 mb-5">
                            ✔️
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Trust by Performance</h3>
                        <p className="text-slate-600">
                            Businesses are rated with <span className="font-semibold text-green-600">APM</span> —
                            measuring clarity, fairness, and communication.
                        </p>
                    </div>

                </div>

                {/* Bottom Box */}
                <div className="bg-slate-900 text-white rounded-2xl p-10 text-center">
                    <h4 className="text-2xl font-bold mb-4">What Makes a Great Mission?</h4>

                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                        <span className="px-5 py-2 bg-slate-800 rounded-lg text-sm">✓ Clear deliverables</span>
                        <span className="px-5 py-2 bg-slate-800 rounded-lg text-sm">✓ Fair expectations</span>
                        <span className="px-5 py-2 bg-slate-800 rounded-lg text-sm">✓ Feedback & mentorship</span>
                    </div>

                    <p className="text-slate-300 max-w-xl mx-auto mb-6">
                        Astryora helps startups and talent collaborate through measurable
                        outcomes. Join a mission and let your work speak for you.
                    </p>

                    <Link
                        href="/landing"
                        className="inline-block px-8 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition"
                    >
                        Explore Missions →
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default AboutAstryora

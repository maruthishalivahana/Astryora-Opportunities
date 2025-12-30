"use client";

const HowItWorks = () => {
    const pillars = [
        {
            id: 1,
            title: "Skill-Proven Talent",
            desc: "Show your real abilities through completed missions. Your work becomes your strongest proof.",
            features: ["Build real projects", "Verified achievements", "Skills over credentials"],
        },
        {
            id: 2,
            title: "Real Startup Missions",
            desc: "Work on real-world challenges faced by startups today and earn for solving meaningful problems.",
            features: ["Live projects", "Direct collaboration", "Immediate impact"],
        },
        {
            id: 3,
            title: "Trust by Performance",
            desc: "Build a strong reputation through consistent, high-quality output that opens new opportunities.",
            features: ["Performance metrics", "Public track record", "Community recognition"],
        },
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-xs font-semibold tracking-wider uppercase text-slate-600 bg-slate-200 px-3 py-1 rounded-full">
                        How It Works
                    </span>

                    <h2 className="text-4xl md:text-5xl font-serif font-semibold text-slate-900 mt-6">
                        Three Pillars of Our Platform
                    </h2>

                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
                        We rebuilt how talent connects with opportunity. No gatekeepers—just real work and real results.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pillars.map((item) => (
                        <div key={item.id} className="bg-white p-8 rounded-2xl border border-slate-200">

                            {/* Icon Placeholder */}
                            <div className="w-14 h-14 rounded-xl bg-slate-100 mb-6 flex items-center justify-center">
                                <span className="text-xl font-bold text-slate-600">{item.id}</span>
                            </div>

                            <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
                                {item.title}
                            </h3>

                            <p className="text-slate-600 mb-6">{item.desc}</p>

                            <ul className="space-y-2">
                                {item.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-700">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center bg-slate-900 text-white p-12 rounded-3xl">
                    <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                        Ready to prove your skills?
                    </h3>

                    <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg">
                        Get Started
                    </button>
                </div>

            </div>
        </section>
    );
}
export default HowItWorks;

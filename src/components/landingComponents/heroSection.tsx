"use client";

const HeroSection = () => {
    return (

        <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">

            {/* Background Orbs */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

            <div className="relative max-w-4xl mx-auto px-6 py-20 text-white">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping"></span>
                    <span className="text-sm tracking-wider uppercase text-white/70">
                        The Future of Work
                    </span>
                </div>


                <div className="font-serif leading-tight mb-6">
                    <h1 className="text-5xl sm:text-6xl text-white">Not Jobs.</h1>
                    <h1 className="text-5xl sm:text-6xl text-white">Not Internships.</h1>
                    <h1 className="text-5xl sm:text-6xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">
                        Real Missions.
                    </h1>
                </div>

                {/* Description */}
                <p className="text-lg text-white/70 max-w-2xl mb-10">
                    Connect with startups that need your skills right now. Build your reputation through real work, not just credentials.
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-4 mb-16">
                    <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 rounded-xl font-semibold hover:opacity-90 transition">
                        Start a Mission
                    </button>

                    <button className="px-8 py-3 bg-white/5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition">
                        See How It Works
                    </button>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-10 border-t border-white/10 pt-8">
                    <div>
                        <p className="text-3xl font-bold text-white">10K+</p>
                        <p className="text-sm text-white/60">Missions Completed</p>
                    </div>

                    <div>
                        <p className="text-3xl font-bold text-white">500+</p>
                        <p className="text-sm text-white/60">Active Startups</p>
                    </div>

                    <div>
                        <p className="text-3xl font-bold text-white">95%</p>
                        <p className="text-sm text-white/60">Success Rate</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeroSection;

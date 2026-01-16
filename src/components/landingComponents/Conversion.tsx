import React from "react";

const Conversion = () => {
  return (
    <>
      {/* ================= CTA SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">

        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-slate-100 to-white
                        bg-[length:200%_200%] animate-[gradientMove_12s_ease_infinite]" />

        {/* Floating Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl animate-[floatSlow_8s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] bg-purple-400/20 rounded-full blur-3xl animate-[floatSlow_10s_ease-in-out_infinite]" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-[fadeUp_1s_ease-out_forwards]">

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Start Building Your Reputation Today
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Showcase your skills, complete missions, and earn credibility that
            helps you stand out from day one.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <a
              href="/signup"
              className="group relative inline-flex items-center justify-center rounded-xl
                         bg-gradient-to-r from-indigo-500 to-indigo-600
                         px-10 py-4 text-white font-semibold
                         shadow-xl transition-all duration-300
                         hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition" />
              <span className="relative">Create Free Account</span>
            </a>

            <a
              href="/missions"
              className="inline-flex items-center justify-center rounded-xl border-2 border-indigo-500
                         px-10 py-4 text-indigo-600 font-semibold
                         transition-all duration-300
                         hover:bg-indigo-500 hover:text-white hover:-translate-y-1"
            >
              Browse Missions
            </a>

          </div>

          <p className="mt-8 text-sm text-slate-500 animate-pulse">
            One account. Many possibilities.
          </p>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gradient-to-br from-slate-950 to-slate-900 text-slate-300">
        <div className="max-w-6xl mx-auto px-6 py-12">

          <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/how-it-works" className="hover:text-white transition">How It Works</a>
            <a href="/trust-safety" className="hover:text-white transition">Trust & Safety</a>
            <a href="/terms-privacy" className="hover:text-white transition">Terms & Privacy</a>
            <a href="/contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="my-6 h-px bg-slate-800" />

          <p className="text-center text-xs text-slate-400">
            Designed for fairness, transparency, and real opportunities.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Conversion;

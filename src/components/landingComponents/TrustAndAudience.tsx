'use client'

const TrustAndAudience = () => {
  return (
    <section className="bg-slate-950 text-slate-100 py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

      
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Trust & Safety
          </h2>

          <p className="text-slate-400 max-w-2xl text-lg">
            We believe trust is earned through consistent, transparent actions — not claims.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'No anonymous businesses or hidden identities',
              'Reputation built only through real performance',
              'No selling of certificates or fake credentials',
              'Transparent ratings and honest feedback',
              'All missions are moderated and reviewed',
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-slate-900/60 border border-slate-800 rounded-xl p-4 hover:border-indigo-500 transition"
              >
                <span className="text-indigo-400 font-semibold">✔</span>
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-4 border-indigo-500 pl-6 text-xl italic text-slate-200">
            “Trust is built through actions, not promises.”
          </blockquote>
        </div>

       
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Who This Platform Is For
          </h2>

          <p className="text-slate-400 max-w-2xl text-lg">
            This platform is built for people who believe real work should speak louder than promises.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Students seeking real, hands-on experience',
              'Freelancers who want proof instead of claims',
              'Startups looking for dependable, accountable talent',
              'Founders frustrated with fake hiring and empty resumes',
              'Anyone who values transparency, effort, and accountability',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 hover:border-indigo-500 transition"
              >
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default TrustAndAudience

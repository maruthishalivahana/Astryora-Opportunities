import TalentPreview from "./FeaturePreview/TalentPreview";
import BusinessPreview from "./FeaturePreview/BusinessPreview";

export default function FeaturePreview() {
  return (
    <section className="relative mx-auto max-w-7xl rounded-3xl bg-gradient-to-b from-primary/5 via-background to-background px-6 py-24">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/40 to-background" />

      {/* Section Header */}
      <div className="mx-auto mb-20 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          See what you unlock with Astryora
        </h2>
        <p className="mt-4 text-muted-foreground">
          A preview of powerful features available once you create an account.
        </p>
      </div>

      {/* Columns */}
      <div className="grid gap-14 md:grid-cols-2">
        
        {/* Talent */}
        <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-blue-100 to-transparent p-6 ring-1 ring-blue-300">
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-blue-700">
            For Talent
          </h3>
          <TalentPreview />
        </div>

        {/* Business */}
        <div className="rounded-3xl bg-gradient-to-br from-amber-50 via-amber-100 to-transparent p-6 ring-1 ring-amber-300">
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-amber-700">
            For Businesses
          </h3>
          <BusinessPreview />
        </div>

      </div>

      {/* CTA */}
      <div className="mt-24 rounded-3xl bg-primary/15 px-6 py-14 text-center">
        <h3 className="mb-4 text-xl font-semibold">
          Ready to unlock the full Astryora experience?
        </h3>
        <p className="mb-6 text-sm text-muted-foreground">
          Sign up to access missions, verified talent, and trust-backed insights.
        </p>
        <button className="rounded-xl bg-primary px-10 py-4 text-sm font-semibold text-primary-foreground shadow-lg transition hover:scale-105 hover:shadow-xl">
          Get Started for Free
        </button>
      </div>

    </section>
  );
}

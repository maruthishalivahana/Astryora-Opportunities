import { FilePlus, ShieldCheck, Users } from "lucide-react";
import PreviewCard from "./PreviewCard";

export default function BusinessPreview() {
  const talentMatches = [
    { role: "Backend Engineer", match: "92%", color: "amber" },
    { role: "Security Analyst", match: "88%", color: "amber" },
    { role: "API Specialist", match: "85%", color: "amber" },
  ];

  const colorMap: Record<string, { bg: string; text: string }> = {
    indigo: { bg: "bg-indigo-100/50", text: "text-indigo-800" },
    emerald: { bg: "bg-emerald-100/50", text: "text-emerald-700" },
    amber: { bg: "bg-amber-100/50", text: "text-amber-700" },
  };

  return (
    <div className="space-y-8">
      {/* Mission Posting */}
      <PreviewCard
        icon={<FilePlus className="h-5 w-5" />}
        title="Mission Posting"
        description="Create structured missions to attract verified talent."
        className="bg-linear-to-br from-indigo-50/50 via-indigo-100/50 to-indigo-50/50 border-indigo-300/20"
        iconWrapper="bg-indigo-500/20 text-indigo-600"
      >
        <div className="space-y-3 text-sm">
          {["Mission title", "Budget range", "Required skills"].map((field) => (
            <div key={field} className={`rounded-md ${colorMap.indigo.bg} ${colorMap.indigo.text} px-3 py-2 font-medium`}>
              {field}
            </div>
          ))}
          <div className="rounded-md bg-indigo-600 px-3 py-2 text-center text-xs font-semibold text-white">
            Post Mission
          </div>
        </div>
      </PreviewCard>

      {/* APM Trust Badge */}
      <PreviewCard
        icon={<ShieldCheck className="h-5 w-5" />}
        title="APM Trust Badge"
        description="Signals credibility and builds confidence."
        className="bg-linear-to-br from-emerald-50/50 via-emerald-100/50 to-emerald-50/50 border-emerald-300/20"
        iconWrapper="bg-emerald-500/20 text-emerald-600"
      >
        <div className={`rounded-xl ${colorMap.emerald.bg} py-6 text-center font-semibold ${colorMap.emerald.text}`}>
          ✔ APM Trusted Business
        </div>
      </PreviewCard>

      {/* Talent Shortlist */}
      <PreviewCard
        icon={<Users className="h-5 w-5" />}
        title="Talent Shortlist"
        description="AI-curated talent matches."
        className="bg-linear-to-br from-amber-50/50 via-amber-100/50 to-amber-50/50 border-amber-300/20"
        iconWrapper="bg-amber-500/20 text-amber-600"
      >
        <ul className="space-y-2 text-sm">
          {talentMatches.map(({ role, match, color }) => (
            <li key={role} className={`flex items-center justify-between rounded-md ${colorMap[color].bg} px-3 py-2`}>
              <span>{role}</span>
              <span className={`font-medium ${colorMap[color].text}`}>{match}</span>
            </li>
          ))}
        </ul>
      </PreviewCard>
    </div>
  );
}

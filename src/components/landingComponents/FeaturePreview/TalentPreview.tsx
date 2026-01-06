import { BarChart3, BadgeCheck, Clock } from "lucide-react";
import PreviewCard from "./PreviewCard";

export default function TalentPreview() {
  const skills = [
    { skill: "React", value: "80%", width: "w-[80%]", color: "bg-blue-400" },
    { skill: "Node.js", value: "70%", width: "w-[70%]", color: "bg-green-400" },
    { skill: "Security", value: "65%", width: "w-[65%]", color: "bg-red-400" },
  ];

  return (
    <div className="space-y-6">
      {/* Skill Graph */}
      <PreviewCard
        icon={<BarChart3 className="h-5 w-5 text-blue-500" />}
        title="Skill Graph"
        description="Visual breakdown of your strengths based on completed missions."
        className="bg-linear-to-br from-blue-50/50 via-blue-100/50 to-blue-50/50 border-blue-300/20"
        iconWrapper="bg-blue-500/20 text-blue-600"
      >
        <div className="space-y-3 text-xs opacity-90">
          {skills.map((item) => (
            <div key={item.skill}>
              <div className="mb-1 flex items-center justify-between font-medium">
                <span>{item.skill}</span>
                <span className="text-gray-700">{item.value}</span>
              </div>
              <div className="h-2 w-full rounded bg-gray-200/50">
                <div className={`h-2 ${item.width} ${item.color} rounded`} />
              </div>
            </div>
          ))}
        </div>
      </PreviewCard>

      {/* ASI Badge */}
      <PreviewCard
        icon={<BadgeCheck className="h-5 w-5 text-yellow-500" />}
        title="ASI Verification Badge"
        description="Confirms your skills and reliability to businesses."
        className="bg-linear-to-br from-yellow-50/50 via-yellow-100/50 to-yellow-50/50 border-yellow-300/20"
        iconWrapper="bg-yellow-500/20 text-yellow-600"
      >
        <div className="flex items-center justify-center rounded-lg border border-yellow-300/20 bg-yellow-50/50 py-6 text-sm font-semibold text-yellow-700">
          ASI Verified Talent
        </div>
      </PreviewCard>

      {/* Mission History */}
      <PreviewCard
        icon={<Clock className="h-5 w-5 text-purple-500" />}
        title="Mission History"
        description="A transparent record of your completed work and ratings."
        className="bg-linear-to-br from-purple-50/50 via-purple-100/50 to-purple-50/50 border-purple-300/20"
        iconWrapper="bg-purple-500/20 text-purple-600"
      >
        <ul className="space-y-2 text-sm text-gray-700">
          {["API Security Audit", "Backend Optimization", "Auth Flow Review"].map((mission) => (
            <li key={mission} className="flex justify-between">
              <span>{mission}</span>
              <span className="text-gray-600 font-medium">Completed</span>
            </li>
          ))}
        </ul>
      </PreviewCard>
    </div>
  );
}

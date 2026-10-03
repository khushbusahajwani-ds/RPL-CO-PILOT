import { Sparkles } from "lucide-react";

type SkillCardProps = {
  name: string;
  confidence: number;
  level: string;
};

export default function SkillCard({
  name,
  confidence,
  level,
}: SkillCardProps) {
  return (
    <div className="skill-card">
      <div className="skill-top">
        <div className="skill-symbol">
          <Sparkles size={17} />
        </div>

        <span>{level}</span>
      </div>

      <h3>{name}</h3>

      <div className="confidence">
        <span>AI confidence</span>
        <strong>{confidence}%</strong>
      </div>

      <div className="mini-bar">
        <div style={{ width: `${confidence}%` }} />
      </div>
    </div>
  );
}
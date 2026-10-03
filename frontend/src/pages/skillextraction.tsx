import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Edit3,
  Sparkles,
  Trash2,
} from "lucide-react";

type SkillExtractionProps = {
  onNext?: () => void;
};

type Skill = {
  id: number;
  name: string;
  confidence: number;
  level: "Advanced" | "Intermediate";
  reason: string;
};

const initialSkills: Skill[] = [
  {
    id: 1,
    name: "Brick Masonry",
    confidence: 94,
    level: "Advanced",
    reason:
      "Your experience specifically mentions brick masonry work performed on construction sites.",
  },
  {
    id: 2,
    name: "Site Measurement",
    confidence: 87,
    level: "Advanced",
    reason:
      "Your description indicates experience with measuring and preparing construction sites.",
  },
  {
    id: 3,
    name: "Material Handling",
    confidence: 82,
    level: "Intermediate",
    reason:
      "You mentioned handling construction materials as part of your regular work.",
  },
  {
    id: 4,
    name: "Safety Practices",
    confidence: 91,
    level: "Advanced",
    reason:
      "Workplace safety was explicitly included in your experience description.",
  },
  {
    id: 5,
    name: "Construction Site Preparation",
    confidence: 79,
    level: "Intermediate",
    reason:
      "Your work history suggests practical experience preparing work areas.",
  },
  {
    id: 6,
    name: "Workplace Coordination",
    confidence: 76,
    level: "Intermediate",
    reason:
      "Your experience indicates coordination of tasks and materials on site.",
  },
];

export default function SkillExtraction({
  onNext,
}: SkillExtractionProps) {
  const [skills, setSkills] = useState(initialSkills);
  const [expanded, setExpanded] = useState<number | null>(1);
  const [accepted, setAccepted] = useState<number[]>([]);
  const [editing, setEditing] = useState<number | null>(null);

  const averageConfidence = Math.round(
    skills.reduce((sum, skill) => sum + skill.confidence, 0) /
      skills.length
  );

  const acceptSkill = (id: number) => {
    setAccepted((current) =>
      current.includes(id) ? current : [...current, id]
    );
  };

  const removeSkill = (id: number) => {
    setSkills((current) => current.filter((skill) => skill.id !== id));
    setAccepted((current) => current.filter((item) => item !== id));
  };

  const editSkill = (id: number, name: string) => {
    setSkills((current) =>
      current.map((skill) =>
        skill.id === id ? { ...skill, name } : skill
      )
    );
    setEditing(null);
  };

  return (
    <div className="skills-page">
      <div className="skills-header">
        <div>
          <span className="page-eyebrow">STEP 03</span>

          <h1>AI Skill Extraction</h1>

          <p>
            AI has analysed your experience and identified potential
            competencies.
          </p>
        </div>

        <button className="mapping-button" onClick={onNext}>
          Continue to mapping
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="ai-summary">
        <div className="summary-icon">
          <Sparkles size={23} />
        </div>

        <div className="summary-main">
          <strong>{skills.length} skills detected</strong>
          <span>Average AI confidence: {averageConfidence}%</span>
        </div>

        <div className="confidence-ring">
          <span>{averageConfidence}%</span>
          <small>confidence</small>
        </div>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => {
          const isExpanded = expanded === skill.id;
          const isAccepted = accepted.includes(skill.id);
          const isEditing = editing === skill.id;

          return (
            <article className="skill-card-modern" key={skill.id}>
              <div className="skill-top">
                <div className="skill-spark">
                  <Sparkles size={17} />
                </div>

                <span
                  className={`skill-level ${
                    skill.level === "Advanced"
                      ? "advanced"
                      : "intermediate"
                  }`}
                >
                  {skill.level}
                </span>
              </div>

              <div className="skill-title-row">
                {isEditing ? (
                  <input
                    className="skill-edit-input"
                    autoFocus
                    defaultValue={skill.name}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        editSkill(
                          skill.id,
                          event.currentTarget.value.trim() ||
                            skill.name
                        );
                      }
                    }}
                  />
                ) : (
                  <h2>{skill.name}</h2>
                )}

                <button
                  className="expand-button"
                  onClick={() =>
                    setExpanded(isExpanded ? null : skill.id)
                  }
                  aria-label="Show explanation"
                >
                  <ChevronDown
                    size={18}
                    className={isExpanded ? "rotate" : ""}
                  />
                </button>
              </div>

              <div className="confidence-row">
                <span>AI confidence</span>
                <strong>{skill.confidence}%</strong>
              </div>

              <div className="confidence-track">
                <div
                  className="confidence-fill"
                  style={{ width: `${skill.confidence}%` }}
                />
              </div>

              {isExpanded && (
                <div className="skill-reason">
                  <Sparkles size={16} />
                  <p>{skill.reason}</p>
                </div>
              )}

              <div className="skill-actions">
                <button
                  className={isAccepted ? "accepted" : "accept"}
                  onClick={() => acceptSkill(skill.id)}
                >
                  <Check size={16} />
                  {isAccepted ? "Accepted" : "Accept"}
                </button>

                <button
                  className="edit"
                  onClick={() => setEditing(skill.id)}
                >
                  <Edit3 size={15} />
                  Edit
                </button>

                <button
                  className="remove"
                  onClick={() => removeSkill(skill.id)}
                  aria-label="Remove skill"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <div className="skills-footer">
        <div>
          <Sparkles size={19} />
          <div>
            <strong>Human verification comes next</strong>
            <p>
              AI suggestions support the RPL process. Final recognition
              remains subject to assessment and human verification.
            </p>
          </div>
        </div>

        <button className="footer-continue" onClick={onNext}>
          Continue to Qualification Mapping
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}
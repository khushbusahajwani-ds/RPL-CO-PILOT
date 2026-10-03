import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Info,
  Sparkles,
  Target,
} from "lucide-react";

type MappingProps = {
  onNext?: () => void;
};

const mappings = [
  {
    id: 1,
    skill: "Brick Masonry",
    qualification: "Mason",
    qpCode: "CON/Q0102",
    level: "NSQF Level 4",
    match: 94,
    status: "Strong match",
    reason:
      "Your extracted masonry experience closely matches the occupational competencies required for Mason.",
  },
  {
    id: 2,
    skill: "Site Measurement",
    qualification: "Mason",
    qpCode: "CON/Q0102",
    level: "NSQF Level 4",
    match: 88,
    status: "Strong match",
    reason:
      "Site measurement is directly relevant to planning and executing masonry activities.",
  },
  {
    id: 3,
    skill: "Material Handling",
    qualification: "Construction Labour",
    qpCode: "CON/Q0201",
    level: "NSQF Level 3",
    match: 82,
    status: "Good match",
    reason:
      "Your material-handling experience aligns with workplace and construction material competencies.",
  },
  {
    id: 4,
    skill: "Safety Practices",
    qualification: "Construction Site Worker",
    qpCode: "CON/Q0301",
    level: "NSQF Level 4",
    match: 91,
    status: "Strong match",
    reason:
      "The safety practices identified from your declaration are relevant to construction-site safety.",
  },
];

export default function Mapping({ onNext }: MappingProps) {
  const [selected, setSelected] = useState<number[]>([1, 2, 4]);
  const [expanded, setExpanded] = useState<number | null>(1);

  const toggleMapping = (id: number) => {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <div className="mapping-page">
      <div className="mapping-header">
        <div>
          <span className="page-eyebrow">STEP 04</span>

          <h1>Qualification Mapping</h1>

          <p>
            AI has matched your recognised skills with relevant
            occupational qualifications and competency standards.
          </p>
        </div>

        <button className="mapping-next" onClick={onNext}>
          Continue to assessment
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="mapping-overview">
        <div className="overview-icon">
          <Target size={23} />
        </div>

        <div className="overview-text">
          <strong>AI qualification matching complete</strong>
          <span>
            {mappings.length} competency relationships identified
          </span>
        </div>

        <div className="match-score">
          <strong>91%</strong>
          <span>overall match</span>
        </div>
      </div>

      <div className="mapping-grid">
        {mappings.map((item) => {
          const isSelected = selected.includes(item.id);
          const isExpanded = expanded === item.id;

          return (
            <article
              className={`mapping-card ${
                isSelected ? "mapping-selected" : ""
              }`}
              key={item.id}
            >
              <div className="mapping-card-top">
                <div className="mapping-skill-icon">
                  <Sparkles size={18} />
                </div>

                <span
                  className={`match-badge ${
                    item.match >= 90 ? "excellent" : "good"
                  }`}
                >
                  {item.match}% match
                </span>
              </div>

              <div className="mapping-title-row">
                <div>
                  <span className="skill-label">RECOGNISED SKILL</span>
                  <h2>{item.skill}</h2>
                </div>

                <button
                  className="mapping-expand"
                  onClick={() =>
                    setExpanded(isExpanded ? null : item.id)
                  }
                >
                  <ChevronDown
                    size={18}
                    className={isExpanded ? "rotate" : ""}
                  />
                </button>
              </div>

              <div className="qualification-box">
                <span>QUALIFICATION / QP</span>
                <strong>{item.qualification}</strong>

                <div className="qualification-meta">
                  <span>{item.qpCode}</span>
                  <span>{item.level}</span>
                </div>
              </div>

              <div className="match-progress">
                <div className="match-progress-top">
                  <span>AI compatibility</span>
                  <strong>{item.match}%</strong>
                </div>

                <div className="match-track">
                  <div
                    style={{ width: `${item.match}%` }}
                  />
                </div>
              </div>

              {isExpanded && (
                <div className="mapping-reason">
                  <Info size={16} />
                  <p>{item.reason}</p>
                </div>
              )}

              <div className="mapping-actions">
                <button
                  className={isSelected ? "mapping-selected-btn" : ""}
                  onClick={() => toggleMapping(item.id)}
                >
                  <CheckCircle2 size={16} />
                  {isSelected ? "Selected" : "Select"}
                </button>

                <span>{item.status}</span>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mapping-note">
        <div>
          <Sparkles size={19} />
          <div>
            <strong>AI recommendation, human decision</strong>
            <p>
              Qualification mapping is an AI-assisted recommendation.
              Final eligibility and certification are determined through
              assessment and authorised human verification.
            </p>
          </div>
        </div>

        <button onClick={onNext}>
          Proceed
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}
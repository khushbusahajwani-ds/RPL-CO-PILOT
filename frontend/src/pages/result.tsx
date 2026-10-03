import {
  Award,
  Check,
  CheckCircle2,
  FileText,
  ShieldCheck,
  UserRound,
} from "lucide-react";

type Skill = {
  name: string;
  score: number;
  level: string;
};

export default function Result() {
  const skills: Skill[] = [
    {
      name: "Masonry & Brickwork",
      score: 86,
      level: "Competent",
    },
    {
      name: "Construction Safety",
      score: 91,
      level: "Competent",
    },
    {
      name: "Site Measurement",
      score: 82,
      level: "Competent",
    },
  ];

  return (
    <div className="final-passport-page">

      {/* PAGE HEADER */}
      <div className="final-passport-heading">
        <div className="final-passport-eyebrow">
          <Award size={15} />
          RPL SKILL PASSPORT
        </div>

        <h1>Skill Passport</h1>

        <p>
          Your verified Recognition of Prior Learning outcome and
          competency profile.
        </p>
      </div>

      {/* MAIN PASSPORT */}
      <div className="final-passport">

        {/* PASSPORT TOP */}
        <div className="final-passport-top">

          <div className="final-brand">
            <div className="final-brand-icon">
              <Award size={31} />
            </div>

            <div>
              <span>RPL-COPILOT</span>

              <h2>Verified Skill Passport</h2>

              <div className="final-verified">
                <ShieldCheck size={14} />
                Verified Credential
              </div>
            </div>
          </div>

          <div className="final-valid">
            <CheckCircle2 size={17} />
            <span>VALID</span>
          </div>

        </div>

        {/* CANDIDATE */}
        <div className="final-candidate">

          <div className="final-avatar">
            RK
          </div>

          <div className="final-candidate-info">
            <span>CANDIDATE</span>

            <h2>Raj Kumar</h2>

            <p>
              Construction Worker
              <b>•</b>
              RPL Candidate
            </p>
          </div>

          <div className="final-worker-badge">
            <UserRound size={16} />
            Worker
          </div>

        </div>

        {/* SUMMARY */}
        <div className="final-summary">

          <div className="final-summary-item">
            <span>ASSESSMENT STATUS</span>

            <strong className="final-green">
              <CheckCircle2 size={16} />
              Competent
            </strong>
          </div>

          <div className="final-summary-item">
            <span>SKILLS VERIFIED</span>
            <strong>3 Skills</strong>
          </div>

          <div className="final-summary-item">
            <span>PASSPORT ID</span>
            <strong>RPL-2026-RK-92841</strong>
          </div>

        </div>

        {/* SKILL SECTION */}
        <div className="final-skills-heading">

          <div>
            <span>VERIFIED COMPETENCIES</span>

            <h2>Verified Skills</h2>

            <p>
              Competencies demonstrated during the RPL assessment.
            </p>
          </div>

          <div className="final-skill-count">
            <strong>3</strong>
            <small>VERIFIED</small>
          </div>

        </div>

        {/* SKILL CARDS */}
        <div className="final-skill-grid">

          {skills.map((skill) => (
            <div
              className="final-skill-card"
              key={skill.name}
            >

              <div className="final-skill-card-top">

                <div className="final-skill-icon">
                  <Check size={17} />
                </div>

                <span>
                  {skill.level}
                </span>

              </div>

              <h3>{skill.name}</h3>

              <div className="final-score-row">
                <strong>{skill.score}%</strong>
                <span>Assessment Score</span>
              </div>

              <div className="final-score-track">
                <div
                  style={{
                    width: `${skill.score}%`,
                  }}
                />
              </div>

              <div className="final-skill-footer">
                <span>Assessment</span>
                <b>{skill.score}/100</b>
              </div>

            </div>
          ))}

        </div>

        {/* VERIFICATION PANEL */}
        <div className="final-verification">

          <div className="final-verification-icon">
            <ShieldCheck size={25} />
          </div>

          <div className="final-verification-text">
            <strong>Credential Verified</strong>

            <p>
              This Skill Passport represents the verified outcome
              of the Recognition of Prior Learning assessment.
            </p>
          </div>

          <div className="final-issued">
            <span>ISSUED</span>
            <strong>2026</strong>
          </div>

        </div>

        {/* BOTTOM DETAILS */}
        <div className="final-details">

          <div>
            <span>PASSPORT ID</span>
            <strong>RPL-2026-RK-92841</strong>
          </div>

          <div>
            <span>ASSESSMENT</span>
            <strong>RPL Competency Assessment</strong>
          </div>

          <div>
            <span>STATUS</span>
            <strong className="final-green-text">
              Verified
            </strong>
          </div>

        </div>

        {/* ACTIONS */}
        <div className="final-actions">

          <button
            className="final-primary-button"
            onClick={() => window.print()}
          >
            <FileText size={17} />
            Download / Print Passport
          </button>

          <button
            className="final-secondary-button"
            onClick={() =>
              alert(
                "Verification ID: RPL-2026-RK-92841"
              )
            }
          >
            <ShieldCheck size={17} />
            Verify Passport
          </button>

        </div>

      </div>
    </div>
  );
}
import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Lightbulb,
  Sparkles,
} from "lucide-react";

type SelfDeclarationProps = {
  onNext?: () => void;
};

export default function SelfDeclaration({
  onNext,
}: SelfDeclarationProps) {
  const [experience, setExperience] = useState(
    "I have worked in construction for several years. I have experience in brick masonry, material handling, site measurement and workplace safety."
  );

  const [submitted, setSubmitted] = useState(false);

  const handleAnalyse = () => {
    setSubmitted(true);

    // Temporary frontend behaviour.
    // Later this will call the backend AI API.
    setTimeout(() => {
      onNext?.();
    }, 700);
  };

  return (
    <div className="declaration-page">
      <div className="declaration-header">
        <div>
          <span className="page-eyebrow">STEP 02</span>

          <h1>Tell us about your experience</h1>

          <p>
            Describe the work you have done in your own words.
            RPL-COPILOT will identify the skills hidden in your experience.
          </p>
        </div>

        <div className="ai-badge">
          <Sparkles size={17} />
          AI-assisted
        </div>
      </div>

      <div className="declaration-layout">
        <section className="declaration-card">
          <div className="card-heading">
            <div className="icon-box blue">
              <BriefcaseBusiness size={22} />
            </div>

            <div>
              <h2>Your work experience</h2>
              <p>
                Don't worry about technical terms. Just explain what you do.
              </p>
            </div>
          </div>

          <label htmlFor="experience">
            Describe your work experience
          </label>

          <textarea
            id="experience"
            value={experience}
            onChange={(e) => {
              setExperience(e.target.value);
              setSubmitted(false);
            }}
            placeholder="Example: I have worked as a construction worker..."
            rows={9}
          />

          <div className="character-count">
            {experience.length} characters
          </div>

          <div className="tip-box">
            <Lightbulb size={19} />

            <div>
              <strong>Tip</strong>
              <p>
                Mention the tasks you perform, tools you use, safety
                practices, materials you handle and problems you solve.
              </p>
            </div>
          </div>

          <button
            className="primary-action"
            onClick={handleAnalyse}
            disabled={!experience.trim() || submitted}
          >
            {submitted ? (
              <>
                <CheckCircle2 size={19} />
                Analysing experience...
              </>
            ) : (
              <>
                Analyse my experience
                <ArrowRight size={19} />
              </>
            )}
          </button>
        </section>

        <aside className="insight-card">
          <div className="insight-icon">
            <Sparkles size={22} />
          </div>

          <span className="insight-label">WHAT HAPPENS NEXT</span>

          <h2>AI finds the skills behind your experience.</h2>

          <p>
            Your description will be analysed to identify possible
            competencies and match them with relevant qualification
            standards.
          </p>

          <div className="process-list">
            <div>
              <span>01</span>
              <p>Understand your experience</p>
            </div>

            <div>
              <span>02</span>
              <p>Extract relevant skills</p>
            </div>

            <div>
              <span>03</span>
              <p>Map skills to competencies</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
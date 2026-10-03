import { ArrowRight, User } from "lucide-react";

type WorkerProfileProps = {
  onNext: () => void;
};

export default function WorkerProfile({ onNext }: WorkerProfileProps) {
  return (
    <div>
      <div className="page-heading">
        <div>
          <div className="eyebrow">STEP 01</div>

          <h1>Worker Profile</h1>

          <p className="page-description">
            Tell us about your work experience so we can build your RPL
            profile.
          </p>
        </div>

        <button className="primary-button small" onClick={onNext}>
          Save & Continue
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="form-grid">
        <div className="field-card">
          <label>Full name</label>
          <input defaultValue="Raj Kumar" />
        </div>

        <div className="field-card">
          <label>Phone number</label>
          <input defaultValue="+91 98XXXXXX21" />
        </div>

        <div className="field-card">
          <label>Location</label>
          <input defaultValue="Nagpur, Maharashtra" />
        </div>

        <div className="field-card">
          <label>Primary occupation</label>
          <input defaultValue="Construction Worker" />
        </div>

        <div className="field-card">
          <label>Years of experience</label>
          <input defaultValue="8 years" />
        </div>

        <div className="field-card">
          <label>Preferred language</label>
          <input defaultValue="Hindi" />
        </div>
      </div>

      <div className="panel info-panel">
        <User size={21} />

        <div>
          <strong>Profile ready for skill discovery</strong>

          <p>
            Your information will help RPL-COPILOT identify relevant skills
            and competency areas.
          </p>
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import {
  ArrowRight,
  Award,
  BarChart3,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Home,
  LogOut,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  User,
  X,
  Zap,
} 
from "lucide-react";
import "./App.css";
import SelfDeclarationPage from "./pages/selfdeclaration";
import SkillExtractionPage from "./pages/skillextraction";
import QualificationMappingPage from "./pages/qualification mapping";
import AssessmentPage from "./pages/assessment";
import EvidenceCapture from "./pages/evidencecapture";
import WorkerProfile from "./pages/workerprofile";
import AssessorReview from "./pages/assessor review";
import ResultPage from "./pages/result";
import SkillCard from "./components/skillcard";
import ProgressBar from "./components/progressbar";
import ScoreCard from "./components/scorecard";
import EvidenceCard from "./components/evidencecard";
type Screen =
  | "login"
  | "dashboard"
  | "profile"
  | "declaration"
  | "skills"
  | "mapping"
  | "assessment"
  | "evidence"
  | "review"
  | "result";

const steps = [
  { id: "profile", label: "Worker Profile", icon: User },
  { id: "declaration", label: "Self Declaration", icon: FileText },
  { id: "skills", label: "Skill Extraction", icon: Sparkles },
  { id: "mapping", label: "Qualification Mapping", icon: BarChart3 },
  { id: "assessment", label: "Assessment", icon: ClipboardCheck },
  { id: "evidence", label: "Evidence", icon: FileCheck2 },
  { id: "review", label: "Assessor Review", icon: ShieldCheck },
  { id: "result", label: "Skill Passport", icon: Award },
];

const skills = [
  { name: "Brick Masonry", confidence: 94, level: "Advanced" },
  { name: "Site Measurement", confidence: 87, level: "Advanced" },
  { name: "Material Handling", confidence: 82, level: "Intermediate" },
  { name: "Safety Practices", confidence: 91, level: "Advanced" },
];

function App() {
  const [screen, setScreen] = useState<Screen>("login");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 4) {
      setError("Password must contain at least 4 characters.");
      return;
    }

    setError("");
    setScreen("dashboard");
  };

  if (screen === "login") {
    return (
      <div className="login-page">
        <div className="login-shell">
          <section className="login-hero">
            <div className="hero-badge">
              <Sparkles size={14} /> AI-Powered RPL Platform
            </div>

            <div className="hero-main">
              <h1>
                Your experience
                <span>deserves recognition.</span>
              </h1>

              <p>
                Transform real-world experience into verified,
                recognised competencies through AI-assisted RPL.
              </p>

              <div className="journey-card">
                <div className="journey-icon">
                  <Zap size={21} />
                </div>
                <div>
                  <strong>From experience to certification</strong>
                  <span>
                    AI extraction → mapping → assessment → verification
                  </span>
                </div>
              </div>

              <div className="skill-cloud">
                {["Skills", "Experience", "Evidence", "Assessment", "Certification"].map(
                  (item) => (
                    <span key={item}>{item}</span>
                  )
                )}
              </div>
            </div>
          </section>

          <section className="login-panel">
            <Brand />

            <div className="login-content">
              <div className="welcome-label">WELCOME BACK</div>
              <h2>Continue your journey</h2>
              <p>
                Sign in to continue building your verified skill profile.
              </p>

              <form onSubmit={login}>
                <label>Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />

                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />

                {error && <div className="error-box">{error}</div>}

                <button className="primary-button">
                  Sign In <ArrowRight size={17} />
                </button>
              </form>

              <div className="secure">
                <ShieldCheck size={15} />
                Secure · Human-verified · Evidence-based
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="app-layout">
      {sidebarOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={sidebarOpen ? "sidebar open" : "sidebar"}>
        <div className="sidebar-brand">
          <div className="brand-icon">R</div>
          <div>
            <strong>RPL-COPILOT</strong>
            <span>Recognition Platform</span>
          </div>
          <button
            className="close-menu"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="sidebar-section">
          <small>WORKER JOURNEY</small>

          <button
            className={screen === "dashboard" ? "nav-item active" : "nav-item"}
            onClick={() => setScreen("dashboard")}
          >
            <Home size={18} />
            Dashboard
          </button>

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <button
                key={step.id}
                className={
                  screen === step.id ? "nav-item active" : "nav-item"
                }
                onClick={() => setScreen(step.id as Screen)}
              >
                <Icon size={18} />
                {step.label}
              </button>
            );
          })}
        </div>

        <div className="sidebar-bottom">
          <div className="profile-mini">
            <div className="avatar">RK</div>
            <div>
              <strong>Raj Kumar</strong>
              <span>Construction Worker</span>
            </div>
          </div>

          <button
            className="logout"
            onClick={() => setScreen("login")}
          >
            <LogOut size={17} />
            Sign out
          </button>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <button
            className="menu-button"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu />
          </button>

          <div>
            <span className="topbar-label">RPL JOURNEY</span>
            <h3>{getScreenTitle(screen)}</h3>
          </div>

          <div className="topbar-actions">
            <div className="search">
              <Search size={17} />
              <span>Search</span>
            </div>
            <div className="top-avatar">RK</div>
          </div>
        </header>

        <div className="page-content">
          {screen === "dashboard" && (
            <Dashboard onNavigate={setScreen} />
          )}

          {screen === "profile" && (
  <WorkerProfile onNext={() => setScreen("declaration")} />
)}

          {screen === "declaration" && (
            <SelfDeclarationPage onNext={() => setScreen("skills")} />
          )}

          {screen === "skills" && (
            <SkillExtractionPage onNext={() => setScreen("mapping")} />
          )}

          {screen === "mapping" && (
            <QualificationMappingPage onNext={() => setScreen("assessment")} />
          )}

          {screen === "assessment" && (
            <AssessmentPage onNext={() => setScreen("evidence")} />
          )}

          {screen === "evidence" && (
            <EvidenceCapture onNext={() => setScreen("review")} />
          )}

          {screen === "review" && (
            <AssessorReview onNext={() => setScreen("result")} />
          )}

          {screen === "result" && <ResultPage />}
        </div>
      </main>
    </div>
  );
}

function Brand() {
  return (
    <div className="brand">
      <div className="brand-icon">R</div>
      <div>
        <strong>RPL-COPILOT</strong>
        <span>Recognition of Prior Learning</span>
      </div>
    </div>
  );
}

function Dashboard({
  onNavigate,
}: {
  onNavigate: (screen: Screen) => void;
}) {
  return (
    <>
      <div className="welcome-row">
        <div>
          <div className="eyebrow">GOOD MORNING, RAJ 👋</div>
          <h1>Your RPL journey</h1>
          <p>Turn your experience into recognised skills and certification.</p>
        </div>
        <button
          className="primary-button small"
          onClick={() => onNavigate("profile")}
        >
          Continue journey <ArrowRight size={16} />
        </button>
      </div>

      <div className="stat-grid">
        <Stat icon={<Sparkles />} value="12" label="Skills detected" />
        <Stat icon={<BarChart3 />} value="86%" label="Profile completion" />
        <Stat icon={<FileCheck2 />} value="7" label="Evidence submitted" />
        <Stat icon={<Award />} value="1" label="Qualification mapped" />
      </div>

      <div className="dashboard-grid">
        <section className="panel journey-panel">
          <div className="panel-heading">
            <div>
              <span className="eyebrow">PROGRESS</span>
              <h3>Recognition journey</h3>
            </div>
            <strong>86%</strong>
          </div>

          <div className="progress-track">
            <div style={{ width: "86%" }} />
          </div>

          <div className="journey-list">
            {steps.map((step, index) => {
              const done = index < 5;
              const Icon = step.icon;

              return (
                <div className="journey-step" key={step.id}>
                  <div className={done ? "step-icon done" : "step-icon"}>
                    {done ? <Check size={16} /> : <Icon size={16} />}
                  </div>

                  <div>
                    <strong>{step.label}</strong>
                    <span>{done ? "Completed" : "Upcoming"}</span>
                  </div>

                  {!done && <ChevronRight size={16} />}
                </div>
              );
            })}
          </div>
        </section>

        <section className="panel ai-panel">
          <div className="ai-glow">
            <Sparkles size={24} />
          </div>
          <span className="eyebrow">AI INSIGHT</span>
          <h3>Strong skill evidence detected</h3>
          <p>
            Your experience indicates advanced competency in masonry,
            measurement and workplace safety.
          </p>

          <div className="confidence">
            <span>AI confidence</span>
            <strong>92%</strong>
          </div>

          <div className="mini-bar">
            <div style={{ width: "92%" }} />
          </div>

          <button
            className="secondary-button"
            onClick={() => onNavigate("skills")}
          >
            Review AI findings <ArrowRight size={16} />
          </button>
        </section>
      </div>
    </>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon:ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Profile({ onNext }: { onNext: () => void }) {
  return (
    <PageHeader
      eyebrow="STEP 01"
      title="Worker Profile"
      description="Tell us about your work experience so we can build your RPL profile."
      action={onNext}
      actionText="Save & Continue"
    >
      <div className="form-grid">
        <Field label="Full name" value="Raj Kumar" />
        <Field label="Phone number" value="+91 98XXXXXX21" />
        <Field label="Location" value="Nagpur, Maharashtra" />
        <Field label="Primary occupation" value="Construction Worker" />
        <Field label="Years of experience" value="8 years" />
        <Field label="Preferred language" value="Hindi" />
      </div>

      <div className="panel info-panel">
        <User size={21} />

        <div>
          <strong>Profile ready for skill discovery</strong>
          <p>
            Your information will help RPL-COPILOT identify relevant
            skills and competency areas.
          </p>
        </div>
      </div>
    </PageHeader>
  );
}

function Declaration({ onNext }: { onNext: () => void }) {
  return (
    <PageHeader
      eyebrow="STEP 02"
      title="Self Declaration"
      description="Describe the work you have actually performed in your own words."
      action={onNext}
      actionText="Analyse my experience"
    >
      <div className="panel form-panel">
        <label>Describe your work experience</label>
        <textarea
          defaultValue="I have worked in construction for 8 years. I can perform brick masonry, measure construction areas, handle materials and follow workplace safety practices."
        />

        <div className="chip-row">
          <span>Brick masonry</span>
          <span>Measurement</span>
          <span>Safety</span>
          <span>Materials</span>
        </div>
      </div>
    </PageHeader>
  );
}

function Skills({ onNext }: { onNext: () => void }) {
  return (
    <PageHeader
      eyebrow="STEP 03"
      title="AI Skill Extraction"
      description="AI has analysed your experience and identified potential competencies."
      action={onNext}
      actionText="Continue to mapping"
    >
      <div className="ai-summary">
        <Sparkles size={22} />
        <div>
          <strong>12 skills detected</strong>
          <p>Average AI confidence: 88%</p>
        </div>
      </div>

      <div className="card-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-top">
              <div className="skill-symbol">
                <Sparkles size={17} />
              </div>
              <span>{skill.level}</span>
            </div>

            <h3>{skill.name}</h3>

            <div className="confidence">
              <span>AI confidence</span>
              <strong>{skill.confidence}%</strong>
            </div>

            <div className="mini-bar">
              <div style={{ width: `${skill.confidence}%` }} />
            </div>
          </div>
        ))}
      </div>
    </PageHeader>
  );
}

function Mapping({ onNext }: { onNext: () => void }) {
  return (
    <PageHeader
      eyebrow="STEP 04"
      title="Qualification Mapping"
      description="Your demonstrated skills are mapped against competency requirements."
      action={onNext}
      actionText="Start assessment"
    >
      <div className="mapping-card">
        <div className="mapping-title">
          <div className="qualification-logo">Q</div>
          <div>
            <span>QUALIFICATION</span>
            <h3>Mason — Construction</h3>
          </div>
          <strong>82% Match</strong>
        </div>

        <div className="mapping-grid">
          {[
            ["Brick masonry", "Matched"],
            ["Site measurement", "Matched"],
            ["Safety practices", "Matched"],
            ["Material handling", "Partial"],
          ].map(([skill, status]) => (
            <div className="mapping-row" key={skill}>
              <span>{skill}</span>
              <b className={status === "Partial" ? "partial" : ""}>
                {status}
              </b>
            </div>
          ))}
        </div>
      </div>
    </PageHeader>
  );
}

function Assessment({ onNext }: { onNext: () => void }) {
  const [selected, setSelected] = useState("");

  return (
    <PageHeader
      eyebrow="STEP 05"
      title="Practical Assessment"
      description="Demonstrate how you would handle a real workplace situation."
      action={selected ? onNext : undefined}
      actionText="Submit assessment"
    >
      <div className="assessment-card">
        <span className="question-number">QUESTION 01 / 05</span>
        <h2>
          Before starting brick masonry, what should you check first?
        </h2>

        {[
          "Material quantity and quality",
          "Only the wall colour",
          "The weather forecast only",
          "Nothing — start immediately",
        ].map((answer) => (
          <button
            key={answer}
            className={
              selected === answer
                ? "answer selected"
                : "answer"
            }
            onClick={() => setSelected(answer)}
          >
            <span>{answer}</span>
            {selected === answer && <Check size={17} />}
          </button>
        ))}
      </div>
    </PageHeader>
  );
}

function Evidence({ onNext }: { onNext: () => void }) {
  return (
    <PageHeader
      eyebrow="STEP 06"
      title="Evidence Capture"
      description="Add evidence that supports the skills you have declared."
      action={onNext}
      actionText="Send for review"
    >
      <div className="evidence-grid">
        {[
          ["Work photo", "Construction site image", "Verified"],
          ["Experience proof", "Employer / work record", "Pending"],
          ["Practical evidence", "Assessment response", "Verified"],
        ].map(([title, subtitle, status]) => (
          <div className="evidence-card" key={title}>
            <div className="evidence-icon">
              <FileCheck2 />
            </div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <span className={status === "Verified" ? "verified" : "pending"}>
              {status}
            </span>
          </div>
        ))}
      </div>

      <div className="upload-zone">
        <FileText size={28} />
        <strong>Drop evidence here</strong>
        <span>Photos, documents or assessment evidence</span>
        <button className="secondary-button">Choose file</button>
      </div>
    </PageHeader>
  );
}

function Review({ onNext }: { onNext: () => void }) {
  const [decision, setDecision] = useState("");

  const skills = [
    ["Brick Masonry", "94%", "Verified"],
    ["Site Measurement", "88%", "Verified"],
    ["Safety Practices", "91%", "Verified"],
    ["Material Handling", "82%", "Needs review"],
  ];

  return (
    <div>
      <div className="page-heading">
        <div>
          <div className="eyebrow">STEP 07</div>
          <h1>Assessor Review</h1>
          <p className="page-description">
            A human assessor verifies the evidence and AI recommendations.
          </p>
        </div>

        <div
          style={{
            padding: "9px 14px",
            borderRadius: "999px",
            background: "#edfbf5",
            color: "#16845a",
            fontSize: "12px",
            fontWeight: 800,
          }}
        >
          <ShieldCheck size={15} /> READY FOR REVIEW
        </div>
      </div>

      <div
        className="panel"
        style={{
          padding: "24px",
          marginBottom: "18px",
          background: "linear-gradient(135deg, #eef5ff, #ffffff)",
        }}
      >
        <div className="eyebrow">AI REVIEW SUMMARY</div>

        <h3 style={{ margin: "6px 0" }}>
          Strong competency evidence detected
        </h3>

        <p style={{ color: "#68758a", lineHeight: 1.6 }}>
          The submitted evidence strongly supports masonry, measurement and
          workplace safety competencies. Final verification remains with the
          human assessor.
        </p>

        <div
          style={{
            marginTop: "18px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Sparkles size={20} color="#2563eb" />
          <strong style={{ color: "#2563eb" }}>
            AI confidence: 92%
          </strong>
        </div>
      </div>

      <div
        className="panel"
        style={{
          padding: "24px",
          marginBottom: "18px",
        }}
      >
        <div className="eyebrow">COMPETENCY VERIFICATION</div>

        <h3 style={{ margin: "6px 0 18px" }}>
          Review detected skills
        </h3>

        <div style={{ display: "grid", gap: "10px" }}>
          {skills.map(([name, confidence, status]) => (
            <div
              key={name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                padding: "16px",
                border: "1px solid #e6ebf2",
                borderRadius: "14px",
                background: "#fbfcfe",
              }}
            >
              <div>
                <strong>{name}</strong>
                <div
                  style={{
                    marginTop: "4px",
                    fontSize: "12px",
                    color: "#8993a4",
                  }}
                >
                  AI match: {confidence}
                </div>
              </div>

              <span
                style={{
                  padding: "6px 10px",
                  borderRadius: "999px",
                  fontSize: "10px",
                  fontWeight: 800,
                  background:
                    status === "Verified" ? "#edfbf5" : "#fff6df",
                  color:
                    status === "Verified" ? "#16845a" : "#a66a00",
                }}
              >
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="panel"
        style={{
          padding: "24px",
          marginBottom: "18px",
        }}
      >
        <div className="eyebrow">ASSESSOR DECISION</div>

        <h3 style={{ margin: "6px 0 16px" }}>
          Verify the competency profile
        </h3>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "18px",
          }}
        >
          <button
            onClick={() => setDecision("approved")}
            style={{
              flex: 1,
              padding: "16px",
              borderRadius: "14px",
              border:
                decision === "approved"
                  ? "2px solid #22a77a"
                  : "1px solid #dfe5ed",
              background:
                decision === "approved" ? "#edfbf5" : "#ffffff",
              color: "#16845a",
              cursor: "pointer",
              fontWeight: 800,
            }}
          >
            ✓ Approve competency
          </button>

          <button
            onClick={() => setDecision("changes")}
            style={{
              flex: 1,
              padding: "16px",
              borderRadius: "14px",
              border:
                decision === "changes"
                  ? "2px solid #e29a25"
                  : "1px solid #dfe5ed",
              background:
                decision === "changes" ? "#fff8e8" : "#ffffff",
              color: "#a66a00",
              cursor: "pointer",
              fontWeight: 800,
            }}
          >
            ⚠ Request more evidence
          </button>
        </div>

        <textarea
          defaultValue="Evidence reviewed. Demonstrated competency is consistent with the submitted work experience."
          placeholder="Add assessor remarks..."
          style={{
            width: "100%",
            minHeight: "100px",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #dfe5ed",
            fontFamily: "inherit",
            boxSizing: "border-box",
            resize: "vertical",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 20px",
          borderRadius: "14px",
          background: "#f8faff",
          border: "1px solid #e5eaf3",
        }}
      >
        <span style={{ fontSize: "12px", color: "#68758a" }}>
          <ShieldCheck size={16} /> Human verification required
        </span>

        <button
          className="primary-button small"
          disabled={decision !== "approved"}
          onClick={onNext}
          style={{
            opacity: decision === "approved" ? 1 : 0.5,
          }}
        >
          Approve & Generate Passport
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
      

function Result() {
  return (
    <div>
      <div className="eyebrow">COMPLETED</div>
      <h1>Skill Passport</h1>
      <p className="page-description">
        Your verified RPL outcome is ready.
      </p>

      <div className="passport">
        <div className="passport-top">
          <div className="passport-logo">R</div>
          <div>
            <span>RPL-COPILOT</span>
            <h2>Verified Skill Passport</h2>
          </div>
          <Award size={42} />
        </div>

        <div className="passport-user">
          <div className="avatar xl">RK</div>
          <div>
            <span>WORKER</span>
            <h2>Raj Kumar</h2>
            <p>Construction Worker · 8 years experience</p>
          </div>
        </div>

        <div className="passport-skills">
          {skills.map((skill) => (
            <div key={skill.name}>
              <Check size={16} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="passport-footer">
          <div>
            <span>VERIFICATION STATUS</span>
            <strong>✓ HUMAN VERIFIED</strong>
          </div>
          <div>
            <span>RPL SCORE</span>
            <strong>92 / 100</strong>
          </div>
          <div>
            <span>ISSUED</span>
            <strong>2026</strong>
          </div>
        </div>
      </div>
      <div
  style={{
    display: "flex",
    gap: "12px",
    marginTop: "20px",
    flexWrap: "wrap",
  }}
>
  <button
    className="primary-button"
    onClick={() => window.print()}
  >
    <FileText size={17} />
    Download / Print Passport
  </button>

  <button
    className="secondary-button"
    onClick={() =>
      alert("Verification ID: RPL-2026-RK-92841")
    }
  >
    <ShieldCheck size={17} />
    Verify Passport
  </button>
</div>
    </div>
  );
}

function PageHeader({
  eyebrow,
  title,
  description,
  children,
  action,
  actionText,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  action?: () => void;
  actionText?: string;
}) {
  return (
    <div>
      <div className="page-heading">
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p className="page-description">{description}</p>
        </div>

        {action && (
          <button className="primary-button small" onClick={action}>
            {actionText}
            <ArrowRight size={16} />
          </button>
        )}
      </div>

      {children}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="field-card">
      <label>{label}</label>
      <input defaultValue={value} />
    </div>
  );
}

function getScreenTitle(screen: Screen) {
  const found = steps.find((step) => step.id === screen);
  if (found) return found.label;

  if (screen === "dashboard") return "Dashboard";

  return "Skill Passport";
}

export default App;

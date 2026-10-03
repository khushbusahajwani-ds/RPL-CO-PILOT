import {
  ArrowRight,
  Check,
  CircleAlert,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

type AssessorReviewProps = {
  onNext: () => void;
};

export default function AssessorReview({
  onNext,
}: AssessorReviewProps) {
  const [decision, setDecision] = useState<
    "approved" | "changes" | ""
  >("");

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
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <ShieldCheck size={15} />
          READY FOR REVIEW
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
          The submitted evidence strongly supports masonry,
          measurement and workplace safety competencies. Final
          verification remains with the human assessor.
        </p>

        <div
          style={{
            marginTop: "18px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Sparkles size={19} color="#2563eb" />

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
                    status === "Verified"
                      ? "#edfbf5"
                      : "#fff6df",
                  color:
                    status === "Verified"
                      ? "#16845a"
                      : "#a66a00",
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
                decision === "approved"
                  ? "#edfbf5"
                  : "#ffffff",
              color: "#16845a",
              cursor: "pointer",
              fontWeight: 800,
            }}
          >
            <Check size={18} />
            <br />
            Approve competency
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
                decision === "changes"
                  ? "#fff8e8"
                  : "#ffffff",
              color: "#a66a00",
              cursor: "pointer",
              fontWeight: 800,
            }}
          >
            <CircleAlert size={18} />
            <br />
            Request more evidence
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
        <span
          style={{
            fontSize: "12px",
            color: "#68758a",
            display: "flex",
            alignItems: "center",
            gap: "7px",
          }}
        >
          <ShieldCheck size={16} />
          Human verification required
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
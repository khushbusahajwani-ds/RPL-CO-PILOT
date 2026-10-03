import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Image as ImageIcon,
  ShieldCheck,
  Sparkles,
  Upload,
} from "lucide-react";

type EvidenceCaptureProps = {
  onNext?: () => void;
};

export default function EvidenceCapture({
  onNext,
}: EvidenceCaptureProps) {
  const [files, setFiles] = useState<string[]>([]);

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    setFiles((prev) => [...prev, selectedFile.name]);
  };

  const evidence = [
    {
      icon: <ImageIcon size={22} />,
      title: "Work Photo",
      subtitle: "Construction site image",
      status: "Verified",
      score: "96%",
      description:
        "Photo evidence supporting brick masonry and site work.",
    },
    {
      icon: <FileText size={22} />,
      title: "Experience Proof",
      subtitle: "Employer / work record",
      status: "Pending",
      score: "—",
      description:
        "Upload an experience letter, employer record or work proof.",
    },
    {
      icon: <ClipboardCheck size={22} />,
      title: "Practical Evidence",
      subtitle: "Assessment response",
      status: "Verified",
      score: "92%",
      description:
        "Assessment responses supporting practical competency.",
    },
  ];

  return (
    <div>
      {/* HEADER */}
      <div className="page-heading">
        <div>
          <div className="eyebrow">STEP 06</div>

          <h1>Evidence Capture</h1>

          <p className="page-description">
            Add evidence that supports the skills identified from your
            experience.
          </p>
        </div>

        <button
          className="primary-button small"
          onClick={onNext}
        >
          Send for review
          <ArrowRight size={16} />
        </button>
      </div>

      {/* READINESS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gap: "18px",
          marginBottom: "20px",
        }}
      >
        <div className="panel" style={{ padding: "24px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <div>
              <div className="eyebrow">EVIDENCE READINESS</div>

              <h3 style={{ margin: "5px 0" }}>
                Evidence profile
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#7b8798",
                  fontSize: "13px",
                }}
              >
                2 of 3 evidence requirements verified
              </p>
            </div>

            <strong
              style={{
                fontSize: "28px",
                color: "#2563eb",
              }}
            >
              82%
            </strong>
          </div>

          <div className="progress-track">
            <div style={{ width: "82%" }} />
          </div>
        </div>

        <div
          className="panel"
          style={{
            padding: "24px",
            background:
              "linear-gradient(135deg, #eef5ff, #edfbf7)",
          }}
        >
          <div className="eyebrow">AI INSIGHT</div>

          <h3 style={{ margin: "7px 0" }}>
            Strong supporting evidence
          </h3>

          <p
            style={{
              margin: 0,
              fontSize: "13px",
              color: "#667085",
              lineHeight: 1.55,
            }}
          >
            Current evidence strongly supports masonry,
            measurement and safety competencies.
          </p>
        </div>
      </div>

      {/* EVIDENCE CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          marginBottom: "20px",
        }}
      >
        {evidence.map((item) => (
          <div
            className="panel"
            key={item.title}
            style={{
              padding: "22px",
            }}
          >
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#edf4ff",
                color: "#2864d7",
                marginBottom: "15px",
              }}
            >
              {item.icon}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <div>
                <h3 style={{ margin: 0 }}>
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: "5px 0",
                    fontSize: "12px",
                    color: "#8993a4",
                  }}
                >
                  {item.subtitle}
                </p>
              </div>

              <span
                style={{
                  height: "fit-content",
                  padding: "5px 9px",
                  borderRadius: "999px",
                  fontSize: "10px",
                  fontWeight: 800,
                  background:
                    item.status === "Verified"
                      ? "#eafaf3"
                      : "#fff6df",
                  color:
                    item.status === "Verified"
                      ? "#16845a"
                      : "#a66a00",
                }}
              >
                {item.status}
              </span>
            </div>

            <p
              style={{
                fontSize: "13px",
                color: "#68758a",
                lineHeight: 1.55,
                minHeight: "42px",
              }}
            >
              {item.description}
            </p>

            <div
              style={{
                borderTop: "1px solid #edf0f5",
                paddingTop: "13px",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "12px",
              }}
            >
              <span style={{ color: "#8993a4" }}>
                AI relevance
              </span>

              <strong style={{ color: "#2563eb" }}>
                {item.score}
              </strong>
            </div>
          </div>
        ))}
      </div>

      {/* UPLOAD */}
      <div
        className="panel"
        style={{
          padding: "38px",
          textAlign: "center",
          border: "1.5px dashed #b8c9e7",
          background:
            "linear-gradient(135deg, #f8fbff, #ffffff)",
        }}
      >
        <div
          style={{
            width: "62px",
            height: "62px",
            margin: "0 auto 15px",
            borderRadius: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#eaf2ff",
            color: "#2864d7",
          }}
        >
          <Upload size={28} />
        </div>

        <h3 style={{ margin: "0 0 7px" }}>
          Upload supporting evidence
        </h3>

        <p
          style={{
            color: "#7a8597",
            fontSize: "13px",
            margin: "0 0 20px",
          }}
        >
          Add photos, documents or other proof of your
          workplace experience.
        </p>

        <label
          className="secondary-button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
          }}
        >
          <Upload size={16} />
          Choose file

          <input
            type="file"
            hidden
            accept="image/*,.pdf,.doc,.docx"
            onChange={handleFile}
          />
        </label>

        {files.length > 0 && (
          <div
            style={{
              marginTop: "18px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {files.map((file, index) => (
              <div
                key={`${file}-${index}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "#edfbf5",
                  color: "#16845a",
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                <CheckCircle2 size={16} />
                {file}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* TRUST BAR */}
      <div
        style={{
          marginTop: "18px",
          padding: "16px 18px",
          borderRadius: "14px",
          background: "#f8faff",
          border: "1px solid #e6ebf4",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <ShieldCheck size={20} color="#16845a" />

        <span
          style={{
            fontSize: "13px",
            color: "#68758a",
          }}
        >
          Evidence is reviewed by a human assessor before
          certification.
        </span>

        <strong
          style={{
            marginLeft: "auto",
            fontSize: "11px",
            color: "#16845a",
          }}
        >
          HUMAN VERIFIED
        </strong>
      </div>

      <div
        style={{
          marginTop: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#7a8597",
          fontSize: "12px",
        }}
      >
        <Sparkles size={15} color="#2864d7" />
        AI assists with evidence relevance; final verification
        remains with the assessor.
      </div>

      <div
        style={{
          marginTop: "18px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          className="primary-button"
          onClick={onNext}
        >
          Continue to Assessor Review
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}
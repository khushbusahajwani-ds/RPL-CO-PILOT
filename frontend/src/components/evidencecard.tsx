import { CheckCircle2, FileCheck2 } from "lucide-react";

type EvidenceCardProps = {
  title: string;
  description: string;
  type?: string;
  verified?: boolean;
};

export default function EvidenceCard({
  title,
  description,
  type = "Evidence",
  verified = true,
}: EvidenceCardProps) {
  return (
    <div className="evidence-card">
      <div className="evidence-card-icon">
        <FileCheck2 size={20} />
      </div>

      <div className="evidence-card-content">
        <div className="evidence-card-heading">
          <span>{type}</span>

          {verified && (
            <strong>
              <CheckCircle2 size={14} />
              Verified
            </strong>
          )}
        </div>

        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
import { CheckCircle2 } from "lucide-react";

type ScoreCardProps = {
  title: string;
  score: number;
  status?: string;
};

export default function ScoreCard({
  title,
  score,
  status = "Competent",
}: ScoreCardProps) {
  return (
    <div className="score-card">
      <div className="score-card-top">
        <div>
          <span className="score-label">ASSESSMENT SCORE</span>
          <h3>{title}</h3>
        </div>

        <div className="score-status">
          <CheckCircle2 size={15} />
          {status}
        </div>
      </div>

      <div className="score-value">
        {score}%
      </div>

      <div className="score-progress">
        <div style={{ width: `${score}%` }} />
      </div>

      <span className="score-caption">
        Assessment score
      </span>
    </div>
  );
}
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  ClipboardCheck,
  Sparkles,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import ScoreCard from "../components/scorecard";

type AssessmentProps = {
  onNext?: () => void;
};

type Question = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const questions: Question[] = [
  {
    question: "Before starting brick masonry, what should you check first?",
    options: [
      "Material quantity and quality",
      "Only the wall colour",
      "The weather forecast only",
      "Nothing — start immediately",
    ],
    answer: 0,
    explanation:
      "Checking material quality and quantity helps ensure the masonry work can start safely and correctly.",
  },
  {
    question: "What is important when preparing mortar for brick masonry?",
    options: [
      "Use any ratio available",
      "Follow the required mix ratio",
      "Add water until it becomes very thin",
      "Do not mix the materials",
    ],
    answer: 1,
    explanation:
      "The correct mix ratio helps achieve the required strength and workability.",
  },
  {
    question: "How should bricks be positioned during masonry?",
    options: [
      "Randomly",
      "Only by colour",
      "According to the required bond and alignment",
      "As quickly as possible",
    ],
    answer: 2,
    explanation:
      "Correct bond and alignment are essential for strength, stability and a proper finish.",
  },
  {
    question: "What should a worker do before working at height?",
    options: [
      "Ignore safety equipment",
      "Check required safety measures and equipment",
      "Work faster",
      "Ask another worker to do it",
    ],
    answer: 1,
    explanation:
      "Safety equipment and workplace precautions should be checked before working at height.",
  },
  {
    question: "Why is site measurement important?",
    options: [
      "Only for decoration",
      "To estimate and verify dimensions accurately",
      "It is not important",
      "Only for taking photographs",
    ],
    answer: 1,
    explanation:
      "Accurate measurements help workers plan materials, dimensions and execution correctly.",
  },
];

export default function Assessment({ onNext }: AssessmentProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  const chooseAnswer = (index: number) => {
    if (selected !== null) return;

    setSelected(index);

    if (index === question.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (selected === null) return;

    if (current === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrent((prev) => prev + 1);
    setSelected(null);
  };

  const restartAssessment = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div style={styles.page}>
        <div style={styles.topHeader}>
          <div>
            <div style={styles.eyebrow}>RPL JOURNEY</div>
            <div style={styles.smallTitle}>Assessment</div>
          </div>

          <div style={styles.stepBadge}>STEP 05 • COMPLETED</div>
        </div>

        <div style={styles.resultCard}>
          <div style={styles.trophyCircle}>
            <Trophy size={34} />
          </div>

          <div style={styles.eyebrow}>ASSESSMENT COMPLETE</div>

          <h1 style={styles.resultTitle}>
            Your practical assessment is complete.
          </h1>

          <p style={styles.resultText}>
            Your responses have been recorded and are ready for evidence
            verification.
          </p>

          <ScoreCard
  title="Practical Competency Assessment"
  score={percentage}
  status={percentage >= 70 ? "Competent" : "Needs Review"}
/>

            <div style={styles.scorePercentage}>{percentage}%</div>
          </div>

          <div style={styles.resultGrid}>
            <div style={styles.resultItem}>
              <CheckCircle2 size={20} />
              <div>
                <strong>Practical knowledge</strong>
                <span>Responses evaluated</span>
              </div>
            </div>

            <div style={styles.resultItem}>
              <ShieldCheck size={20} />
              <div>
                <strong>Evidence ready</strong>
                <span>Human verification follows</span>
              </div>
            </div>
          </div>

          <div style={styles.buttonRow}>
            <button style={styles.secondaryButton} onClick={restartAssessment}>
              Retake assessment
            </button>

            <button style={styles.primaryButton} onClick={onNext}>
              Continue to Evidence
              <ArrowRight size={18} />
            </button>
          </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.topHeader}>
        <div>
          <div style={styles.eyebrow}>RPL JOURNEY</div>
          <div style={styles.smallTitle}>Assessment</div>
        </div>

        <div style={styles.secureBadge}>
          <ShieldCheck size={15} />
          Human-verified pathway
        </div>
      </div>

      <div style={styles.hero}>
        <div>
          <div style={styles.stepBadge}>STEP 05</div>

          <h1 style={styles.title}>Practical Assessment</h1>

          <p style={styles.subtitle}>
            Demonstrate how you would handle real workplace situations.
          </p>
        </div>

        <div style={styles.aiBadge}>
          <Sparkles size={17} />
          AI-assisted assessment
        </div>
      </div>

      <div style={styles.progressCard}>
        <div style={styles.progressTop}>
          <div>
            <strong>
              Question {current + 1} of {questions.length}
            </strong>
            <span>Practical competency check</span>
          </div>

          <strong>{Math.round(progress)}%</strong>
        </div>

        <div style={styles.progressTrack}>
          <div
            style={{
              ...styles.progressFill,
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      <div style={styles.questionCard}>
        <div style={styles.questionTop}>
          <div style={styles.questionIcon}>
            <ClipboardCheck size={24} />
          </div>

          <div>
            <div style={styles.questionLabel}>PRACTICAL QUESTION</div>
            <div style={styles.questionHint}>
              Select the response that best matches workplace practice.
            </div>
          </div>
        </div>

        <h2 style={styles.question}>{question.question}</h2>

        <div style={styles.options}>
          {question.options.map((option, index) => {
            const isSelected = selected === index;
            const isCorrect = index === question.answer;
            const showCorrect = selected !== null && isCorrect;
            const showWrong = isSelected && !isCorrect;

            return (
              <button
                key={option}
                onClick={() => chooseAnswer(index)}
                style={{
                  ...styles.option,
                  ...(isSelected ? styles.optionSelected : {}),
                  ...(showCorrect ? styles.optionCorrect : {}),
                  ...(showWrong ? styles.optionWrong : {}),
                }}
              >
                <div
                  style={{
                    ...styles.optionNumber,
                    ...(isSelected ? styles.optionNumberSelected : {}),
                  }}
                >
                  {String.fromCharCode(65 + index)}
                </div>

                <span style={styles.optionText}>{option}</span>

                {showCorrect && (
                  <CheckCircle2 size={21} style={{ marginLeft: "auto" }} />
                )}

                {showWrong && (
                  <CircleAlert size={21} style={{ marginLeft: "auto" }} />
                )}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div
            style={{
              ...styles.feedback,
              ...(selected === question.answer
                ? styles.feedbackCorrect
                : styles.feedbackWrong),
            }}
          >
            {selected === question.answer ? (
              <CheckCircle2 size={20} />
            ) : (
              <CircleAlert size={20} />
            )}

            <div>
              <strong>
                {selected === question.answer
                  ? "Correct response"
                  : "Let's learn from this"}
              </strong>

              <p>{question.explanation}</p>
            </div>
          </div>
        )}

        <div style={styles.bottomRow}>
          <div style={styles.tip}>
            <Sparkles size={17} />
            <span>
              Your assessment helps build an evidence-based skill profile.
            </span>
          </div>

          <button
            style={{
              ...styles.primaryButton,
              opacity: selected === null ? 0.5 : 1,
              cursor: selected === null ? "not-allowed" : "pointer",
            }}
            disabled={selected === null}
            onClick={nextQuestion}
          >
            {current === questions.length - 1
              ? "Finish assessment"
              : "Next question"}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div style={styles.footerCards}>
        <div style={styles.miniCard}>
          <ShieldCheck size={20} />
          <div>
            <strong>Fair evaluation</strong>
            <span>Evidence-based assessment flow</span>
          </div>
        </div>

        <div style={styles.miniCard}>
          <Sparkles size={20} />
          <div>
            <strong>AI assisted</strong>
            <span>Designed for competency discovery</span>
          </div>
        </div>

        <div style={styles.miniCard}>
          <ClipboardCheck size={20} />
          <div>
            <strong>5 questions</strong>
            <span>Practical workplace scenarios</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    padding: "28px 34px 42px",
    background:
      "linear-gradient(135deg, #f8fbff 0%, #ffffff 48%, #f4f8ff 100%)",
    color: "#13203a",
    fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  },

  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "32px",
  },

  eyebrow: {
    fontSize: "11px",
    fontWeight: 800,
    letterSpacing: "0.16em",
    color: "#2864d7",
    marginBottom: "6px",
  },

  smallTitle: {
    fontSize: "15px",
    fontWeight: 700,
  },

  stepBadge: {
    display: "inline-flex",
    padding: "8px 12px",
    borderRadius: "999px",
    background: "#e9f1ff",
    color: "#2864d7",
    fontSize: "11px",
    fontWeight: 800,
    letterSpacing: "0.06em",
  },

  secureBadge: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    padding: "9px 13px",
    borderRadius: "999px",
    background: "#effaf5",
    color: "#16845a",
    fontSize: "12px",
    fontWeight: 700,
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: "20px",
    marginBottom: "24px",
  },

  title: {
    fontSize: "42px",
    lineHeight: 1.05,
    margin: "10px 0 10px",
    letterSpacing: "-0.04em",
  },

  subtitle: {
    color: "#667085",
    fontSize: "15px",
    margin: 0,
  },

  aiBadge: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 16px",
    borderRadius: "14px",
    background: "linear-gradient(135deg, #e8f1ff, #effcf7)",
    color: "#2864d7",
    fontSize: "12px",
    fontWeight: 800,
    whiteSpace: "nowrap",
  },

  progressCard: {
    padding: "18px 20px",
    borderRadius: "18px",
    background: "#ffffff",
    border: "1px solid #e5eaf2",
    boxShadow: "0 10px 30px rgba(30, 65, 120, 0.06)",
    marginBottom: "20px",
  },

  progressTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },

  progressTrack: {
    height: "8px",
    background: "#e9eef7",
    borderRadius: "99px",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: "99px",
    background: "linear-gradient(90deg, #2563eb, #22c7c7)",
    transition: "width 0.35s ease",
  },

  questionCard: {
    background: "#ffffff",
    border: "1px solid #e3e9f3",
    borderRadius: "24px",
    padding: "30px",
    boxShadow: "0 18px 45px rgba(34, 73, 125, 0.08)",
  },

  questionTop: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "22px",
  },

  questionIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #dceaff, #dffaf4)",
    color: "#2463d4",
  },

  questionLabel: {
    fontSize: "11px",
    fontWeight: 800,
    letterSpacing: "0.12em",
    color: "#2864d7",
  },

  questionHint: {
    marginTop: "4px",
    fontSize: "12px",
    color: "#8a94a6",
  },

  question: {
    fontSize: "24px",
    lineHeight: 1.3,
    margin: "0 0 24px",
    letterSpacing: "-0.02em",
  },

  options: {
    display: "grid",
    gap: "12px",
  },

  option: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "15px 17px",
    borderRadius: "15px",
    border: "1px solid #e2e8f0",
    background: "#ffffff",
    color: "#24324a",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.2s ease",
  },

  optionSelected: {
    borderColor: "#4d7ff0",
    background: "#eef4ff",
  },

  optionCorrect: {
    borderColor: "#3dbb88",
    background: "#edfbf5",
    color: "#126f4c",
  },

  optionWrong: {
    borderColor: "#ed7c7c",
    background: "#fff2f2",
    color: "#a33a3a",
  },

  optionNumber: {
    width: "32px",
    height: "32px",
    minWidth: "32px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f1f4f8",
    color: "#68758a",
    fontWeight: 800,
  },

  optionNumberSelected: {
    background: "#2864d7",
    color: "#ffffff",
  },

  optionText: {
    flex: 1,
    fontWeight: 600,
  },

  feedback: {
    display: "flex",
    gap: "12px",
    padding: "15px 17px",
    borderRadius: "15px",
    marginTop: "18px",
    fontSize: "13px",
  },

  feedbackCorrect: {
    background: "#edfbf5",
    color: "#126f4c",
  },

  feedbackWrong: {
    background: "#fff4f1",
    color: "#9b4938",
  },

 bottomRow: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  marginTop: "24px",
  paddingTop: "20px",
  borderTop: "1px solid #edf0f5",
  position: "sticky",
  bottom: "0",
  background: "#ffffff",
  zIndex: 10,
  paddingBottom: "10px",
},
  tip: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#788398",
    fontSize: "12px",
  },

  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    border: "none",
    borderRadius: "12px",
    padding: "13px 18px",
    background: "linear-gradient(135deg, #2563eb, #2878e8)",
    color: "#ffffff",
    fontWeight: 800,
    fontSize: "13px",
    boxShadow: "0 8px 20px rgba(37, 99, 235, 0.22)",
  },

  footerCards: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "14px",
    marginTop: "18px",
  },

  miniCard: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "15px",
    borderRadius: "16px",
    background: "#ffffff",
    border: "1px solid #e5eaf2",
    color: "#2864d7",
  },

  resultCard: {
    maxWidth: "760px",
    margin: "50px auto",
    padding: "42px",
    borderRadius: "28px",
    background: "#ffffff",
    border: "1px solid #e3e9f3",
    boxShadow: "0 20px 55px rgba(30, 65, 120, 0.1)",
    textAlign: "center",
  },

  trophyCircle: {
    width: "72px",
    height: "72px",
    margin: "0 auto 22px",
    borderRadius: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #dbeafe, #dffaf1)",
    color: "#2563eb",
  },

  resultTitle: {
    fontSize: "34px",
    margin: "8px 0",
    letterSpacing: "-0.03em",
  },

  resultText: {
    color: "#748096",
    fontSize: "14px",
    marginBottom: "28px",
  },

  scoreBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    borderRadius: "18px",
    background: "linear-gradient(135deg, #eff5ff, #edfbf7)",
    marginBottom: "18px",
  },

  scoreLabel: {
    fontSize: "10px",
    fontWeight: 800,
    letterSpacing: "0.12em",
    color: "#71809a",
  },

  scoreNumber: {
    fontSize: "30px",
    fontWeight: 900,
    color: "#1f4fb4",
  },

  scorePercentage: {
    fontSize: "42px",
    fontWeight: 900,
    color: "#22a77a",
  },

  resultGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    marginBottom: "24px",
  },

  resultItem: {
    display: "flex",
    gap: "10px",
    textAlign: "left",
    padding: "15px",
    border: "1px solid #e8edf4",
    borderRadius: "14px",
    color: "#25815f",
  },

  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
  },

  secondaryButton: {
    border: "1px solid #dce3ed",
    background: "#ffffff",
    color: "#44516a",
    borderRadius: "12px",
    padding: "13px 18px",
    fontWeight: 700,
    cursor: "pointer",
  },
};

type ProgressBarProps = {
  value: number;
};

export default function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="component-progress">
      <div
        className="component-progress-fill"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
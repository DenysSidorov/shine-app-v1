import s from "./CompletionProgress.module.scss";

interface CompletionProgressProps {
  percent: number;
  size?: "small" | "medium" | "large";
  showLabel?: boolean;
}

function CompletionProgress({ percent, size = "medium", showLabel = true }: CompletionProgressProps) {
  const clampedPercent = Math.min(Math.max(percent, 0), 100);

  return (
    <div className={`${s.progress} ${s[size]}`} data-testid="completion-progress">
      <div className={s.bar}>
        <div className={s.fill} style={{ width: `${clampedPercent}%` }} data-testid="progress-fill" />
      </div>
      {showLabel && (
        <span className={s.label} data-testid="progress-label">
          {clampedPercent}%
        </span>
      )}
    </div>
  );
}

export default CompletionProgress;

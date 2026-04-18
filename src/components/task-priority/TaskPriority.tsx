import s from "./TaskPriority.module.scss";
import type { TaskPriority } from "@/types/task.ts";

interface TaskPriorityProps {
  priority?: TaskPriority;
  onChange?: (priority: TaskPriority) => void;
  disabled?: boolean;
  size?: "small" | "medium";
}

function TaskPriority({ priority = "medium", onChange, disabled = false, size = "medium" }: TaskPriorityProps) {
  const priorities: TaskPriority[] = ["low", "medium", "high"];

  const handleChange = (p: TaskPriority) => {
    if (!disabled && onChange) {
      onChange(p);
    }
  };

  const getColor = (p: TaskPriority) => {
    if (p === "high") return "#D04230";
    if (p === "medium") return "#f7aa41";
    return "#57a656";
  };

  return (
    <div className={`${s.priority} ${s[size]}`} data-testid="task-priority">
      {priorities.map((p) => (
        <button
          key={p}
          className={`${s.button} ${priority === p ? s.active : ""}`}
          style={{ backgroundColor: priority === p ? getColor(p) : "transparent" }}
          onClick={() => handleChange(p)}
          disabled={disabled}
          title={`${p.charAt(0).toUpperCase() + p.slice(1)} priority`}
          data-testid={`priority-${p}`}
        >
          <span className={s.dot} style={{ borderColor: getColor(p) }} />
        </button>
      ))}
    </div>
  );
}

export default TaskPriority;

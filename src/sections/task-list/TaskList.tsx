import s from "./TaskList.module.scss";
import { TaskType } from "@/types/task.ts";
import Task from "@/sections/task";

interface TaskListProps {
  tasks: TaskType[];
  color?: string;
  title: string;
}

const TaskList = ({ tasks, color, title }: TaskListProps) => {
  return (
    <div className={s.category}>
      {tasks.map((task: TaskType) => {
        return <Task key={task.id} task={task} categoryTitle={title} color={color} />;
      })}
    </div>
  );
};

export default TaskList;

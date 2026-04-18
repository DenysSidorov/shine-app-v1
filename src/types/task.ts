import { TodoType } from "@/types/todo.ts";

export type TaskPriority = "low" | "medium" | "high";

export type TaskType = {
  id: string;
  name: string;
  date: string | Date;
  completed: boolean;
  todos: TodoType[];
  priority?: TaskPriority;
  isDeleted?: boolean;
};

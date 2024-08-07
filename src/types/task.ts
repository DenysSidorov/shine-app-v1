import { TodoType } from "@/types/todo.ts";

export type TaskType = {
  id: string;
  name: string;
  date: string | Date;
  completed: boolean;
  todos: TodoType[];
};

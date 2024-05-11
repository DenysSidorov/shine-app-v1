import { TaskType } from "@/types/task.ts";

export type CategoryType = CategoryListType | CategoryCountType;

export type CategoryListType = {
  id: string;
  title: string;
  color: string;
  date: string | Date;
  tasks: TaskType[];
};

export type CategoryCountType = {
  id: string;
  title: string;
  color: string;
  date: string | Date;
  goalCount: number;
  currentCount: number;
};

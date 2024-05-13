import { TaskType } from "@/types/task.ts";

export type AllCategoryTypes = CategoryListType | CategoryCountType;
export interface CategoryType {
  id: string;
  type: CategoryTypes;
  title: string;
  color: string;
  date: string | Date;
}

export interface CategoryListType extends CategoryType {
  tasks: TaskType[];
}

export interface CategoryCountType extends CategoryType {
  goalCount: number;
  currentCount: number;
};

type CategoryTypes = "list" | "count";

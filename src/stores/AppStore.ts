import { CategoryType } from "@/types/category.ts";
import {
  AddTaskTodosServiceType,
  CategoryTaskStatusType,
  DeleteTaskServiceType,
  DeleteTodoServiceType,
  SetActionsTaskIdType,
  TaskTodosServiceType,
  UpdateTodoStatusType,
} from "@/services/types.ts";
import { TodoType } from "@/types/todo.ts";

export abstract class AppStore {
  abstract getCategories(): CategoryType[];
  abstract getCurrentCategory(): CategoryType | undefined;
  abstract loadCategories(): Promise<void>;
  abstract updateTaskStatusCategory({ status, categoryId, idTask }: CategoryTaskStatusType): Promise<void>;

  abstract removeTask({ categoryId, idTask }: DeleteTaskServiceType): Promise<boolean>;
  abstract loadCurrentCategory(id: string): Promise<void>;
  abstract updateTaskStatusInCurrentCategory({ status, categoryId, idTask }: CategoryTaskStatusType): Promise<void>;

  abstract getTaskTodos(): TodoType[] | undefined;
  abstract loadTaskTodos({ categoryId, idTask }: TaskTodosServiceType): Promise<void>;
  abstract addNewTodo({ categoryId, idTask, text }: AddTaskTodosServiceType): Promise<boolean>;
  abstract deleteTodo({ categoryId, idTask, idTodo }: DeleteTodoServiceType): Promise<boolean>;
  abstract updateTodoStatus({ status, categoryId, idTask, idTodo }: UpdateTodoStatusType): Promise<boolean>;
  abstract setActionsTaskId({ id }: SetActionsTaskIdType): void;
  abstract getActionsTaskId(): string;

  abstract addNewTodoForNewTask(title: string): void;
  abstract removeTodoForNewTask(id: string): void;
  abstract changeStatusTodoForNewTask(id: string, completed: boolean): void;
  abstract getTodosOfNewTask(): TodoType[];
  abstract initCategoryIdForNewTask(id: string): void;
  abstract saveNewTask(): Promise<boolean>;
  abstract setNewTitle(title: string): void;
  abstract getNewTitle(): string;
  abstract setIsLoadingNewTaskStatus(isLoading: boolean): void;
  abstract getIsLoadingNewTaskStatus(): boolean;
  abstract getCategoryIdOfNewTask(): string;
  abstract resetNewTask(): void;

  abstract addNewCategory(): Promise<void>;
}

export interface Todo {
  id: string;
  name: string;
  date: Date;
  completed: boolean;
  description: string;
}

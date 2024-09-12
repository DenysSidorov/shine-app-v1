import { makeAutoObservable, runInAction } from "mobx";
import * as todosService from "@/services/TodosService.ts";
import { TodoType } from "@/types/todo.ts";
import { AddTaskTodosServiceType, DeleteTodoServiceType, TaskTodosServiceType } from "@/services/types.ts";

class MobXTodosStore {
  todos: TodoType[] = [];
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  loadTaskTodos = async ({ categoryId, idTask }: TaskTodosServiceType): Promise<void> => {
    try {
      const data: TodoType[] = await todosService.fetchTodos(categoryId, idTask);
      runInAction(() => {
        this.todos = data;
      });
    } catch (error) {
      console.log(error);
      this.setError("Failed to load todos");
    }
  };

  addNewTodo = async ({ categoryId, idTask, text }: AddTaskTodosServiceType): Promise<boolean> => {
    try {
      const data: boolean = await todosService.fetchNewTodo(categoryId, idTask, text);
      return data;
    } catch (error) {
      console.log(error);
      this.setError("Failed to add new todo");
      return false;
    }
  };

  deleteTodo = async ({ categoryId, idTask, idTodo }: DeleteTodoServiceType): Promise<boolean> => {
    try {
      const data: boolean = await todosService.fetchDeleteTodo(categoryId, idTask, idTodo);
      return data;
    } catch (error) {
      console.log(error);
      this.setError("Failed to delete todo");
      return false;
    }
  };

  setError(error: string | null): void {
    this.error = error;
  }

  getTaskTodos = (): TodoType[] | undefined => {
    return this.todos;
  };

  // updateTaskStatusCategory = async ({ status, categoryId, idTask }: CategoryTaskStatusType) => {
  //   try {
  //     const data: CategoryType = await categoryService.updateCategoryTaskStatus({
  //       status,
  //       categoryId,
  //       idTask,
  //     });
  //
  //     runInAction(() => {
  //       const categories = this.categories.map((category: CategoryType) => {
  //         if (category.id === data.id) {
  //           return data;
  //         }
  //         return category;
  //       });
  //
  //       this.categories = categories;
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     this.setError("Failed to set task status");
  //   }
  // };
}

export default new MobXTodosStore();

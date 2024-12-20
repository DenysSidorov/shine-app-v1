import { makeAutoObservable, runInAction } from "mobx";
import { TodoType } from "@/types/todo.ts";
import { fetchNewTask } from "@/services/TaskService.ts";

const testData: TodoType[] = [
  {
    id: "11",
    name: "New item",
    date: new Date(),
    completed: false,
  },
  {
    id: "22",
    name: "New item 22",
    date: new Date(),
    completed: false,
  },
];

class MobXTasksStore {
  todos: TodoType[] = [...testData];
  title: string = "";
  categoryId: string = "";
  error: string | null = null;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getTodosOfNewTask = (): TodoType[] => {
    return this.todos;
  };

  initCategoryIdForNewTask = (id: string) => {
    this.categoryId = id;
  };

  setNewTitle = (title: string) => {
    runInAction(() => {
      this.title = title;
    });
  };

  getNewTitle = (): string => {
    return this.title;
  };

  resetNewTask = () => {
    this.todos = [];
    this.title = "";
    this.categoryId = "";
    this.error = null;
    this.isLoading = false;
  };

  addNewTodoForNewTask = (title: string) => {
    const newTodo: TodoType = {
      id: Date.now().toString(),
      name: title,
      date: new Date(),
      completed: false,
    };

    runInAction(() => {
      this.todos = [...this.todos, newTodo];
    });
  };

  removeTodoForNewTask = (id: string) => {
    const newTodos = this.todos.filter((item: TodoType) => item.id !== id);
    runInAction(() => {
      this.todos = newTodos;
    });
  };

  changeStatusTodoForNewTask = (id: string, completed: boolean) => {
    const newTodos: TodoType[] = this.todos.map((todo: TodoType) => {
      if (todo.id === id) {
        return { ...todo, completed: !completed };
      }
      return todo;
    });

    runInAction(() => {
      this.todos = newTodos;
    });
  };

  saveNewTask = async (): Promise<boolean> => {
    this.isLoading = true;
    console.log(this.categoryId, this.title, this.todos);
    return await fetchNewTask(this.categoryId, this.title, this.todos);
  };

  setIsLoadingNewTaskStatus = (isLoading: boolean) => {
    this.isLoading = isLoading;
  };

  getIsLoadingNewTaskStatus = (): boolean => {
    return this.isLoading;
  };

  getCategoryIdOfNewTask = (): string => {
    return this.categoryId;
  };

  // loadTaskTodos = async ({ categoryId, idTask }: TaskTodosServiceType): Promise<void> => {
  //   try {
  //     const data: TodoType[] = await todosService.fetchTodos(categoryId, idTask);
  //     runInAction(() => {
  //       this.todos = data;
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     this.setError("Failed to load todos");
  //   }
  // };
  //
  // addNewTodo = async ({ categoryId, idTask, text }: AddTaskTodosServiceType): Promise<boolean> => {
  //   try {
  //     const data: boolean = await todosService.fetchNewTodo(categoryId, idTask, text);
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //     this.setError("Failed to add new todo");
  //     return false;
  //   }
  // };
  //
  // deleteTodo = async ({ categoryId, idTask, idTodo }: DeleteTodoServiceType): Promise<boolean> => {
  //   try {
  //     const data: boolean = await todosService.fetchDeleteTodo(categoryId, idTask, idTodo);
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //     this.setError("Failed to delete todo");
  //     return false;
  //   }
  // };
  //
  // setError(error: string | null): void {
  //   this.error = error;
  // }
  //
  // getTaskTodos = (): TodoType[] | undefined => {
  //   return this.todos;
  // };
  //
  // updateTodoStatus = async ({ status, categoryId, idTask, idTodo }: UpdateTodoStatusType) => {
  //   try {
  //     const data: boolean = await todoService.updateTaskTodoStatus({
  //       status,
  //       categoryId,
  //       idTask,
  //       idTodo,
  //     });
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //     this.setError("Failed to set task status");
  //     return false;
  //   }
  // };

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

export default new MobXTasksStore();

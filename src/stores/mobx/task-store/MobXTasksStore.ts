import { makeAutoObservable, runInAction } from "mobx";
import { TodoType } from "@/types/todo.ts";
import { fetchNewTask } from "@/services/TaskService.ts";

class MobXTasksStore {
  todos: TodoType[] = [];
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
}

export default new MobXTasksStore();

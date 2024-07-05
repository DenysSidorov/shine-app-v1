// stores/MobXTodoStore.ts
import { makeAutoObservable } from "mobx";
import { Todo, AppStore } from "@/stores/AppStore.ts";

class MobXTodoStore implements AppStore {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  removeTodo(id: string): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

export default MobXTodoStore;

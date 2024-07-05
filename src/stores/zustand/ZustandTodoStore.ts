// stores/ZustandTodoStore.ts
import { create } from "zustand";
import { Todo, AppStore } from "@/stores/AppStore.ts";

const useZustandStore = create<AppStore>((set, get) => ({
  todos: [] as Todo[],
  getTodos: () => {
    return get().todos;
  },
  addTodo: (todo: Todo) =>
    set((state: AppStore) => ({ todos: [...state.todos, todo] })),
  removeTodo: () => ({}),
  // removeTodo: (id) => ({})
  // set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));

class ZustandTodoStore implements AppStore {
  getTodos(): Todo[] {
    return useZustandStore.getState().getTodos();
  }

  addTodo(todo: Todo) {
    useZustandStore.getState().addTodo(todo);
  }

  removeTodo(id: string) {
    useZustandStore.getState().removeTodo(id);
  }
}

export default ZustandTodoStore;

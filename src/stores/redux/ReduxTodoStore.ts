// stores/ReduxTodoStore.ts
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, AppStore } from "@/stores/AppStore.ts";

const todoSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

class ReduxTodoStore implements AppStore {
  getTodos() {
    return store.getState().todos;
  }

  addTodo(todo: Todo) {
    store.dispatch(todoSlice.actions.addTodo(todo));
  }

  removeTodo(id: string) {
    store.dispatch(todoSlice.actions.removeTodo(id));
  }
}

export default ReduxTodoStore;

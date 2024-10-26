import { makeAutoObservable } from "mobx";
import { AppStore } from "@/stores/AppStore.ts";
import MobXCategoriesStore from "@/stores/mobx/categories-store/MobXCategoriesStore.ts";
import MobXCategoryStore from "@/stores/mobx/category-store/MobXCategoryStore.ts";
import MobXTodosStore from "@/stores/mobx/todos-store/MobXTodosStore.ts";

class MobXRootStore implements AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  getCategories = MobXCategoriesStore.getCategories;
  loadCategories = MobXCategoriesStore.loadCategories;
  updateTaskStatusCategory = MobXCategoriesStore.updateTaskStatusCategory;

  getCurrentCategory = MobXCategoryStore.getCurrentCategory;
  loadCurrentCategory = MobXCategoryStore.loadCurrentCategory;
  updateTaskStatusInCurrentCategory = MobXCategoryStore.updateTaskStatusInCurrentCategory;
  setActionsTaskId = MobXCategoryStore.setActionsTaskId;
  getActionsTaskId = MobXCategoryStore.getActionsTaskId;
  removeTask = MobXCategoryStore.removeTask;

  loadTaskTodos = MobXTodosStore.loadTaskTodos;
  getTaskTodos = MobXTodosStore.getTaskTodos;
  addNewTodo = MobXTodosStore.addNewTodo;
  deleteTodo = MobXTodosStore.deleteTodo;
  updateTodoStatus = MobXTodosStore.updateTodoStatus;

  /*
  ({categoryId, idTask}: TaskTodosServiceType): Promise<void> {
    return Promise.resolve(undefined);
  }
  *
  * */

  // addTodo(todo: Todo): void {
  //   console.log(todo);
  //   // this.todos.push(todo);
  // }
  //
  // removeTodo(id: string): void {
  //   console.log(id);
  //   // this.todos = this.todos.filter((todo) => todo.id !== id);
  // }
}

export default MobXRootStore;

import { makeAutoObservable } from "mobx";
import { AppStore } from "@/stores/AppStore.ts";
import MobXCategoriesStore from "@/stores/mobx/categories-store/MobXCategoriesStore.ts";
import MobXCategoryStore from "@/stores/mobx/category-store/MobXCategoryStore.ts";

class MobXRootStore implements AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  getCategories = MobXCategoriesStore.getCategories;
  loadCategories = MobXCategoriesStore.loadCategories;

  getCurrentCategory = MobXCategoryStore.getCurrentCategory;
  loadCurrentCategory = MobXCategoryStore.loadCurrentCategory;
  updateTaskStatusInCurrentCategory = MobXCategoryStore.updateTaskStatusInCurrentCategory;

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

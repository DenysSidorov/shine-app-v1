import { makeAutoObservable } from "mobx";
import { AppStore } from "@/stores/AppStore.ts";
import MobXCategoriesStore from "@/stores/mobx/categories-store/MobXCategoriesStore.ts";
import MobXCategoryStore from "@/stores/mobx/category-store/MobXCategoryStore.ts";
import MobXTodosStore from "@/stores/mobx/todos-store/MobXTodosStore.ts";
import MobXTasksStore from "@/stores/mobx/task-store/MobXTasksStore.ts";

class MobXRootStore implements AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  getCategories = MobXCategoriesStore.getCategories;
  loadCategories = MobXCategoriesStore.loadCategories;
  updateTaskStatusCategory = MobXCategoriesStore.updateTaskStatusCategory;
  addNewCategory = MobXCategoriesStore.addNewCategory;

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

  addNewTodoForNewTask = MobXTasksStore.addNewTodoForNewTask;
  removeTodoForNewTask = MobXTasksStore.removeTodoForNewTask;
  changeStatusTodoForNewTask = MobXTasksStore.changeStatusTodoForNewTask;
  saveNewTask = MobXTasksStore.saveNewTask;
  getTodosOfNewTask = MobXTasksStore.getTodosOfNewTask;
  initCategoryIdForNewTask = MobXTasksStore.initCategoryIdForNewTask;
  setNewTitle = MobXTasksStore.setNewTitle;
  getNewTitle = MobXTasksStore.getNewTitle;
  resetNewTask = MobXTasksStore.resetNewTask;
  setIsLoadingNewTaskStatus = MobXTasksStore.setIsLoadingNewTaskStatus;
  getIsLoadingNewTaskStatus = MobXTasksStore.getIsLoadingNewTaskStatus;
  getCategoryIdOfNewTask = MobXTasksStore.getCategoryIdOfNewTask;

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

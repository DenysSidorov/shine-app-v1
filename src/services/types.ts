export type CategoryTaskStatusType = {
  status: boolean;
  categoryId: string;
  idTask: string;
};

export type TaskTodosServiceType = {
  categoryId: string;
  idTask: string;
};

export type AddTaskTodosServiceType = {
  categoryId: string;
  idTask: string;
  text: string;
};

export type DeleteTodoServiceType = {
  categoryId: string;
  idTask: string;
  idTodo: string;
};

export type DeleteTaskServiceType = {
  categoryId: string;
  idTask: string;
};

export type UpdateTodoStatusType = {
  status: boolean;
  categoryId: string;
  idTask: string;
  idTodo: string;
};

export type SetActionsTaskIdType = {
  id: string;
};

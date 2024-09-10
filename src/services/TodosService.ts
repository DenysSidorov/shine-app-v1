import axios from "axios";
import { TodoType } from "@/types/todo.ts";

const { SERVER_DOMAIN, SERVER_PORT } = process.env;
const API_URL = ` ${SERVER_DOMAIN}:${SERVER_PORT}/api`;

export const fetchTodos = async (): Promise<TodoType[]> => {
  const response = await axios.get(`${API_URL}/categories`);
  return response.data;
};

// export const fetchCategoryById = async (id: string): Promise<CategoryType> => {
//   const response = await axios.get(`${API_URL}/categories/${id}`);
//   return response.data;
// };
//
// export const updateCategoryTaskStatus = async ({
//   status,
//   categoryId,
//   idTask,
// }: CategoryTaskStatusType): Promise<CategoryType> => {
//   const response = await axios.patch(`${API_URL}/categories/${categoryId}`, {
//     status,
//     idTask,
//   });
//   return response.data;
// };

// export const addTodo = async (todo: Todo): Promise<Todo> => {
//   const response = await axios.post(API_URL, todo);
//   return response.data;
// };
//
// export const updateTodo = async (id: string, updatedTodo: Partial<Todo>): Promise<Todo> => {
//   const response = await axios.put(`${API_URL}/${id}`, updatedTodo);
//   return response.data;
// };
//
// export const deleteTodo = async (id: string): Promise<void> => {
//   await axios.delete(`${API_URL}/${id}`);
// };
//
// export const toggleTodoCompletion = async (id: string): Promise<Todo> => {
//   const response = await axios.patch(`${API_URL}/${id}/toggle`);
//   return response.data;
// };

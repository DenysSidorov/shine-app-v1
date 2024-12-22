import axios from "axios";
import { CategoryType } from "@/types/category.ts";
import { CategoryTaskStatusType } from "@/services/types.ts";

const { SERVER_DOMAIN, SERVER_PORT } = process.env;
const API_URL = ` ${SERVER_DOMAIN}:${SERVER_PORT}/api`;

export const fetchCategories = async (): Promise<CategoryType[]> => {
  const response = await axios.get(`${API_URL}/categories`);
  return response.data.categories;
};

export const fetchCategoryById = async (id: string): Promise<CategoryType> => {
  const response = await axios.get(`${API_URL}/categories/${id}`);
  return response.data;
};

export const updateCategoryTaskStatus = async ({
  status,
  categoryId,
  idTask,
}: CategoryTaskStatusType): Promise<CategoryType> => {
  const response = await axios.patch(`${API_URL}/categories/${categoryId}`, {
    status,
    idTask,
  });
  return response.data;
};

export const fetchAddNewCategory = async (): Promise<CategoryType> => {
  const response = await axios.post(`${API_URL}/categories`);
  return response.data;
};

export const fetchDeleteTask = async (categoryId: string, idTask: string): Promise<boolean> => {
  const response = await axios.delete(`${API_URL}/categories/${categoryId}/tasks/${idTask}`);
  return response.data;
};

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

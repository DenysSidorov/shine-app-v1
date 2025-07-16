import axios from "axios";
import { CategoryType } from "@/types/category.ts";
import { CategoryTaskStatusType } from "@/services/types.ts";

const { SERVER_DOMAIN, SERVER_PORT } = process.env;
console.log("SERVER_DOMAIN", SERVER_DOMAIN);
console.log("SERVER_PORT", SERVER_PORT);
const s_port = SERVER_PORT !== undefined && SERVER_PORT !== "undefined" ? SERVER_PORT : "";
const API_URL = `${SERVER_DOMAIN}${s_port ? ":" + s_port : ""}/api`;
// const API_URL = ` ${SERVER_DOMAIN}:${SERVER_PORT}/api`;

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
  const response = await axios.patch(`${API_URL}/categories/${categoryId}/tasks/${idTask}`, {
    status,
  });
  return response.data;
};

export const fetchAddNewCategory = async (): Promise<CategoryType> => {
  const response = await axios.post(`${API_URL}/categories`);
  return response.data;
};

export const fetchDeleteCategory = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/categories/${id}`);
};

export const fetchSaveCategoryTitle = async ({
  categoryId,
  title,
}: {
  categoryId: string;
  title: string;
}): Promise<CategoryType> => {
  const response = await axios.patch(`${API_URL}/categories/${categoryId}`, {
    title,
  });
  return response.data;
};

export const fetchDeleteTask = async (categoryId: string, idTask: string): Promise<boolean> => {
  const response = await axios.delete(`${API_URL}/categories/${categoryId}/tasks/${idTask}`);
  return response.data;
};

import axios from "axios";
import { TodoType } from "@/types/todo.ts";

const { SERVER_DOMAIN, SERVER_PORT } = process.env;
const API_URL = ` ${SERVER_DOMAIN}:${SERVER_PORT}/api`;

export const fetchNewTask = async (categoryId: string, title: string, todos: TodoType[]): Promise<boolean> => {
  const response = await axios.post(`${API_URL}/categories/${categoryId}/tasks/`, { title, todos });

  return response.data;
};

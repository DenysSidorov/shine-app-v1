import { useAppStore } from "@/hooks/useAppStore.tsx";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function useGetTodos() {
  const { getTaskTodos, loadTaskTodos } = useAppStore();
  const { categoryId = "", idTask = "" } = useParams();

  useEffect(() => {
    (async () => {
      await loadTaskTodos({ categoryId: categoryId ?? "", idTask: idTask ?? "" });
    })();
  }, [categoryId, idTask, loadTaskTodos]);

  const todos = getTaskTodos();

  return { todos };
}

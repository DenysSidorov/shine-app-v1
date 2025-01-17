import { useAppStore } from "@/hooks/useAppStore.tsx";
import { useEffect } from "react";

export function useResetNewTask() {
  const { resetNewTask } = useAppStore();
  useEffect(() => {
    return () => {
      resetNewTask();
    };
  }, [resetNewTask]);
}

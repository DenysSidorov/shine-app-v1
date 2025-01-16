import { useAppStore } from "@/hooks/useAppStore.tsx";
import { useEffect } from "react";

export function useRemoveTaskId() {
  const { setActionsTaskId } = useAppStore();

  useEffect(() => {
    return () => setActionsTaskId({ id: "" });
  }, [setActionsTaskId]);
}

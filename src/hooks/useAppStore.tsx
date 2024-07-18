import { useContext } from "react";
import { StoreContext } from "@/providers/StoreProvider.tsx";

export const useAppStore = () => {
  const store = useContext(StoreContext);
  if (!store) throw new Error("useAppStore must be used within a StoreProvider");
  return store;
};

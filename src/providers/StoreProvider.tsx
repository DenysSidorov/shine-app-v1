import React, { createContext, ReactNode } from "react";
import { AppStore } from "@/stores/AppStore.ts";

export const StoreContext = createContext<AppStore | null>(null);

export const StoreProvider: React.FC<{
  store: AppStore;
  children: ReactNode;
}> = ({ store, children }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

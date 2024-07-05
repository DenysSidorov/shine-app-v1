import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import { Router } from "./providers/RouterProvider.tsx";
import AppLayout from "@/layouts/app-layout";
import { StoreProvider } from "@/providers/StoreProvider.tsx";
import { createStore } from "@/stores/createStore.ts";

const storeType = import.meta.env.REACT_APP_STORE_TYPE || "mobx";
const store = createStore(storeType);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppLayout>
      <StoreProvider store={store}>
        <Router />
      </StoreProvider>
    </AppLayout>
  </React.StrictMode>,
);

console.info(`Store type: ${storeType}`);

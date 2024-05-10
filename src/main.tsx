import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import { Router } from "./providers/RouterProvider.tsx";
import AppLayout from "@/layouts/app-layout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppLayout>
      <Router />
    </AppLayout>
  </React.StrictMode>,
);

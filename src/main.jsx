import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRouter from "./AppRouter";
import LoginProvider from "./context/LoginProvider";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <AppRouter />
      </LoginProvider>
    </BrowserRouter>
  </StrictMode>,
);

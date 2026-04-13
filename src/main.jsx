import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRouter from "./AppRouter";
import LoginProvider from "./context/LoginProvider";
import store from "./redux/store";
import { Provider } from "react-redux";



createRoot(document.getElementById("root")).render(
 <Provider store={store}>
 <StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <AppRouter />
      </LoginProvider>
    </BrowserRouter>
  </StrictMode>,
 </Provider>
);

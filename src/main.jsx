import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRouter from "./AppRouter";
import LoginProvider from "./context/LoginProvider";
import store, { persistor } from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <BrowserRouter>
          <LoginProvider>
            <AppRouter />
          </LoginProvider>
        </BrowserRouter>
      </StrictMode>
    </PersistGate>
  </ReduxProvider>,
);

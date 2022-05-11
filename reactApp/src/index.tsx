import React from "react";
import "./index.scss";
import App from "./App";
import "./translation/i18n";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./services/store/store";
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider
          breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        >
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

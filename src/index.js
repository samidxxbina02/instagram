import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import ModalProvider from "./context/ModalContext/ModalProvider";
import ThemeProvider from "./context/ThemeContext/ThemeProvider";
import StoreProvider from "./context/Store/StoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ModalProvider>
      <ThemeProvider>
        <StoreProvider>
          <App />
        </StoreProvider>
      </ThemeProvider>
    </ModalProvider>
  </BrowserRouter>
);

import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./contexts/userContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
        <App />
    </UserProvider>
  </React.StrictMode>
);

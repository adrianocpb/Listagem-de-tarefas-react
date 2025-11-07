import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TarefasProvider } from "./context/TarefasContext.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TarefasProvider>
      <App />
    </TarefasProvider>
  </React.StrictMode>
);

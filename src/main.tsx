import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StepContextWrapper } from "./context/StepContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StepContextWrapper>
      <App />
    </StepContextWrapper>
  </React.StrictMode>
);

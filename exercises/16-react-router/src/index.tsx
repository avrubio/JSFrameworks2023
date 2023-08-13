import React from "react";

import { createRoot } from "react-dom/client";
// Import something here
import { BrowserRouter } from "react-router-dom";

import App from "./components/App/App";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}
const root = createRoot(rootElement);
root.render(
  // Add something here
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

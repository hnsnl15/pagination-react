import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PostProvider from "./context/PostContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PostProvider>
      <App />
    </PostProvider>
  </React.StrictMode>
);

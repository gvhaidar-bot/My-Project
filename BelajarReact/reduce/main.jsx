import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NoteApp from "./noteApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NoteApp />
  </StrictMode>,
);

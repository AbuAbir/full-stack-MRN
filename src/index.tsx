import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app";

const container = document.getElementById("app")!; //this #id=app is in index.ejs file, the ! at the end is for null check in TS
const root = createRoot(container);

root.render(<App />);


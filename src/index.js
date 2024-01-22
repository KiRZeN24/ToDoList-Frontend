import React from "react"; // importamos react
import { createRoot } from 'react-dom/client';
import App from "./App";

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(<App />);

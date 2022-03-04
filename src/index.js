import React from "react";
import ReactDOM from "react-dom";
import "./assets/fonts/JetBrains Mono/index.css";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./color-theme/ThemeContext";
import Background from "./color-theme/Background";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Background from "./color-theme/Background";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/*<ThemeProvider>*/}
      <Background>
        <App />
      </Background>
      {/*</ThemeProvider>*/}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);

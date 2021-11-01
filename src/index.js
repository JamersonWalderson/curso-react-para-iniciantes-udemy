import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App mensagem={"chique e confortável"}/>
  </React.StrictMode>,
  rootElement
);
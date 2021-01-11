import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    {/* provider 같은 느낌 */}
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);

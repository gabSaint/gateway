import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ListGateways from "./containers/gateways/list";
import ShowGateway from "./containers/gateways/show";

ReactDOM.render(
  <React.StrictMode>
    <ListGateways />
  </React.StrictMode>,
  document.getElementById("root")
);

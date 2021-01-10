import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ListGateways from "./containers/gateways/list";
import GatewayForm from "./containers/gateways/form";
import ShowGateway from "./containers/gateways/show";

ReactDOM.render(
  <React.StrictMode>
    <ListGateways />
    <GatewayForm />
    <ShowGateway />
  </React.StrictMode>,
  document.getElementById("root")
);

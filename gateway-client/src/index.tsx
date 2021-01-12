import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ListGateways from "./containers/gateways/list";
import GatewayForm from "./containers/gateways/form";
import ShowGateway from "./containers/gateways/show";

ReactDOM.render(
  <React.StrictMode>
    <ListGateways />
    <GatewayForm
      gateway={{
        id: 1,
        serial: "24589",
        name: "gateway1",
        address: "127.0.27.1",
      }}
    />
    <ShowGateway />
  </React.StrictMode>,
  document.getElementById("root")
);

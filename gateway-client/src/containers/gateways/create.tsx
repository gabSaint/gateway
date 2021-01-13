import React from "react";
import Gateway from "../../models/gateway";
import GatewayForm from "./form";

function CreateGateway() {
  const handleSubmit = (gateway: Gateway) => {
    console.log("Gateway created", gateway);
  };

  return <GatewayForm gateway={{} as Gateway} handleSubmit={handleSubmit} />;
}

export default CreateGateway;

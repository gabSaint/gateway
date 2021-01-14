import React from "react";
import Gateway from "../../models/gateway";
import GatewayForm from "./form";

function CreateGateway() {
  const handleSubmit = (gateway: Gateway) => {
    console.log("Gateway created", gateway);
  };

  return (
    <React.Fragment>
      <h2>New Gateway</h2>
      <GatewayForm gateway={{} as Gateway} handleSubmit={handleSubmit} />
    </React.Fragment>
  );
}

export default CreateGateway;

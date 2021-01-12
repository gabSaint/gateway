import React from "react";
import Gateway from "../../models/gateway";
import GatewayForm from "./form";

function CreateGateway() {
  const handleSubmit = (gateway: Gateway) => {
    console.log("Gateway created", gateway);
  };

  return (
    <React.Fragment>
      <GatewayForm
        gateway={{
          id: -1,
          serial: "",
          name: "",
          address: "",
        }}
        handleSubmit={handleSubmit}
      />
    </React.Fragment>
  );
}

export default CreateGateway;

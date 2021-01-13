import Gateway from "models/gateway";
import React from "react";
import { useParams } from "react-router-dom";
import GatewayForm from "./form";

interface Params {
  id: string;
}

function UpdateGateway() {
  const { id } = useParams<Params>();

  function handleRemove() {
    // const newList = gateways.filter((item) => item.id != id);
    // setGateways(newList);
  }

  const handleSubmit = (gateway: Gateway) => {
    console.log("Gateway edited", gateway);
  };

  return (
    <React.Fragment>
      <button
        type="button"
        data-test="form-button-delete"
        onClick={handleRemove}
      >
        Delete
      </button>
      <GatewayForm
        gateway={new Gateway(JSON.parse(id), "", "", "")}
        handleSubmit={handleSubmit}
      />
    </React.Fragment>
  );
}

export default UpdateGateway;

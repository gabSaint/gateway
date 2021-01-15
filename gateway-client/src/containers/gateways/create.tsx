import React from "react";
import axios from "axios";

import Gateway from "../../models/gateway";
import GatewayForm from "./form";
import { useHistory } from "react-router-dom";

export const postGateway = async (data: Gateway) => {
  const response = await axios.post(`/gateways`, data);

  if (response.status === 201) {
    return response.data;
  }
};

function CreateGateway() {
  const history = useHistory();

  const handleSubmit = async (gateway: Gateway) => {
    const data = await postGateway(gateway);

    if (data) {
      history.push("/gateways");
    }
  };

  return (
    <React.Fragment>
      <h2>New Gateway</h2>
      <GatewayForm gateway={{} as Gateway} handleSubmit={handleSubmit} />
    </React.Fragment>
  );
}

export default CreateGateway;

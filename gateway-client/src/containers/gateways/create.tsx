import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import Gateway from "../../models/gateway";
import GatewayForm from "./form";
import Message from "components/message";

function CreateGateway() {
  const history = useHistory();

  const handleSubmit = useCallback((gateway: Gateway) => {
    Gateway.create(gateway).then((error) => {
      <Message error={error} />;
      history.push("/gateways");
    });
  }, []);

  return (
    <React.Fragment>
      <h2>New Gateway</h2>
      <GatewayForm gateway={{} as Gateway} handleSubmit={handleSubmit} />
    </React.Fragment>
  );
}

export default CreateGateway;

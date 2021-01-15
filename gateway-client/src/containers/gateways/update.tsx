import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Gateway from "models/gateway";
import GatewayForm from "./form";

function UpdateGateway() {
  const [gateway, setGateway] = useState<Gateway>();

  const { id } = useParams<any>();
  const history = useHistory();

  useEffect(() => {
    Gateway.getById(id).then((data) => setGateway(data));
  }, []);

  const handleRemove = useCallback(async () => {
    const data = await Gateway.delete(id);

    if (data) {
      history.push("/gateways");
    }
  }, []);

  const handleSubmit = useCallback(async (gatway: Gateway) => {
    const data = await Gateway.update(id, gateway || ({} as Gateway));

    if (data) {
      history.push("/gateways");
    }
  }, []);

  return (
    <React.Fragment>
      <div className="contain-row">
        <h2>Edit Gateway</h2>
        <button
          data-test="form-button-delete"
          onClick={handleRemove}
          className="negative"
        >
          Delete
        </button>
      </div>
      <GatewayForm gateway={gateway} handleSubmit={handleSubmit} />
    </React.Fragment>
  );
}

export default UpdateGateway;

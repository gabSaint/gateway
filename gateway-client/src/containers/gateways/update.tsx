import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

import Gateway from "models/gateway";
import GatewayForm from "./form";

export const getGateway = async (id: number) => {
  const response = await axios.get(`/gateways/${id}`);

  if (response.status === 200) {
    return response.data;
  }
  return {} as Gateway;
};

export const putGateway = async (data: Gateway, id: number) => {
  const response = await axios.put(`/gateways/${id}`, data);

  if (response.status === 200) {
    return response.data;
  }
};

export const deleteGateway = async (id: number) => {
  const response = await axios.delete(`/gateways/${id}`);

  if (response.status === 200) {
    return response.data;
  }
};

function UpdateGateway() {
  const [gateway, setGateway] = useState<Gateway>();

  const { id } = useParams<any>();
  const history = useHistory();

  useEffect(() => {
    getGateway(id).then((data) => setGateway(data));
  }, []);

  const handleRemove = useCallback(async () => {
    const data = await deleteGateway(id);

    if (data) {
      history.push("/gateways");
    }
  }, []);

  const handleSubmit = useCallback(async (gateway: Gateway) => {
    const data = await putGateway(gateway, id);

    if (data) {
      history.push("/gateways");
    }
  }, []);

  return (
    <React.Fragment>
      <div className="contain-row">
        <h2>Edit Gateway</h2>
        <button
          type="button"
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

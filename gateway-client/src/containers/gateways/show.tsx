import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Gateway from "../../models/gateway";
import Peripheral from "../../models/peripheral";
import ListPeripherals from "../peripherals/list";

export const getGateway = async (id: number) => {
  const response = await axios.get(`/gateways/${id}`);

  if (response.status === 200) {
    return response.data;
  }
  return {} as Gateway;
};

export const getGatewayPeripherals = async (id: number) => {
  const response = await axios.get(`/gateways/${id}/peripherals`);

  if (response.status === 200) {
    return response.data;
  }
  return [];
};

function ShowGateway() {
  const [gateway, setGateway] = useState({} as Gateway);
  const [peripherals, setPeripherals] = useState<Peripheral[]>([]);

  const { id } = useParams<any>();

  useEffect(() => {
    getGateway(id).then((data) => setGateway(data));
    getGatewayPeripherals(id).then((data) => setPeripherals(data));
  }, [id]);

  return (
    <React.Fragment>
      <h2>
        <Link to="/">Gateways</Link> - {gateway.name}
      </h2>
      <ListPeripherals peripherals={peripherals} />
      <Link to={`/gateways/${gateway.id}/peripherals/create`}>
        <button data-test="button-add-peripheral">Add peripheral</button>
      </Link>
    </React.Fragment>
  );
}

export default ShowGateway;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Gateway from "../../models/gateway";
import Peripheral from "../../models/peripheral";
import ListPeripherals from "../peripherals/list";

function ShowGateway() {
  const [gateway, setGateway] = useState({} as Gateway);
  const [peripherals, setPeripherals] = useState<Peripheral[]>([]);

  const { id } = useParams<any>();

  useEffect(() => {
    Gateway.getById(id).then((data) => setGateway(data));
    Gateway.getPeripherals(id).then((data) => setPeripherals(data));
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

import React from "react";
import { Link } from "react-router-dom";
import Gateway from "../../models/gateway";
import Peripheral from "../../models/peripheral";
import ListPeripherals from "../peripherals/list";

function ShowGateway() {
  const gateway = new Gateway(1, "1234oi78", "gate1", "127.0.0.1");
  const peripherals = [
    new Peripheral(1, "ASF", "21/23/24", "online", 1),
    new Peripheral(2, "ASFX", "21/23/24", "offline", 2),
  ];

  return (
    <React.Fragment>
      <h4>
        {gateway.name} - {gateway.serial} - {gateway.address}
      </h4>
      <ListPeripherals peripherals={peripherals} />
      <Link to={`/gateways/${gateway.id}/peripherals/create`}>
        <button id="button-add-peripheral">Add peripheral</button>
      </Link>
    </React.Fragment>
  );
}

export default ShowGateway;

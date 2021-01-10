import React, { useState } from "react";

import Table from "../../components/table";
import Gateway from "../../models/gateway";

function ListGateways() {
  const [gateways, setGateways] = useState([
    new Gateway("1234oi78", "gate1", "127.0.0.1"),
    new Gateway("1234oi72", "gate2", "127.1.0.1"),
  ]);

  return (
    <React.Fragment>
      <h4>Gateways</h4>
      <button id="new-gateway">Add gateway</button>
      <Table headers={["Serial number", "Name", "Ipv4 Address", "Operations"]}>
        {gateways.map((gate, k) => (
          <tr key={k}>
            <td>{gate.serialNumber}</td>
            <td>{gate.name}</td>
            <td>{gate.address}</td>
            <td>
              <button className="button-view">view</button>
              <button className="button-edit">edit</button>
              <button className="button-delete">delette</button>
            </td>
          </tr>
        ))}
      </Table>
    </React.Fragment>
  );
}

export default ListGateways;

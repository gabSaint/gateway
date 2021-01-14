import React, { useState } from "react";
import { Link } from "react-router-dom";

import Table, { Header } from "../../components/table";
import Gateway from "../../models/gateway";

function ListGateways() {
  const [gateways, setGateways] = useState([
    new Gateway(1, "1234oi78", "gate1", "127.0.0.1"),
    new Gateway(2, "1234oi72", "gate2", "127.1.0.1"),
  ]);

  return (
    <React.Fragment>
      {/* <h4></h4> */}
      <Link to="/gateways/create">
        <button id="button-new-gateway">Add gateway</button>
      </Link>
      <Table
        headers={[
          new Header("Gateways"),
          new Header("Serial number"),
          new Header("Name"),
          new Header("Ipv4 Address"),
          new Header("Operations", "right aligned"),
        ]}
      >
        {gateways.map((gate, k) => (
          <tr key={k}>
            <td>{gate.id}</td>
            <td>{gate.serial}</td>
            <td>{gate.name}</td>
            <td>{gate.address}</td>
            <td className="right aligned">
              <Link to={`/gateways/${gate.id}`}>
                <button className="button-view">view</button>
              </Link>
              <Link to={`/gateways/${gate.id}/edit`}>
                <button className="button-edit">edit</button>
              </Link>
            </td>
          </tr>
        ))}
      </Table>
    </React.Fragment>
  );
}

export default ListGateways;

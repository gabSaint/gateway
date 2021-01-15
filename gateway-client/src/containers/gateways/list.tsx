import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Table from "../../components/table";
import Gateway from "../../models/gateway";

function ListGateways() {
  const [gateways, setGateways] = useState<Gateway[]>([]);

  useEffect(() => {
    Gateway.getAll().then((data) => setGateways(data));
  }, []);

  return (
    <React.Fragment>
      <h2>Gateways</h2>
      <Table
        headers={["Id", "Serial number", "Name", "Ipv4 address", "Operations"]}
      >
        {gateways.map((gate, k) => (
          <tr key={k}>
            <td>{gate.id}</td>
            <td>{gate.serial}</td>
            <td>{gate.name}</td>
            <td>{gate.address}</td>
            <td>
              <Link to={`/gateways/${gate.id}`}>
                <button data-test="button-view">details</button>
              </Link>
              <Link to={`/gateways/${gate.id}/edit`}>
                <button data-test="button-edit">edit</button>
              </Link>
            </td>
          </tr>
        ))}
      </Table>
      <Link to="/gateways/create">
        <button data-test="button-new-gateway">New Gateway</button>
      </Link>
    </React.Fragment>
  );
}

export default ListGateways;

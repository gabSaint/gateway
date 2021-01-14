import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Table, { Header } from "../../components/table";
import Gateway from "../../models/gateway";

export const getGateways = async () => {
  const response = await axios.get(`/gateways`);

  if (response.status === 200) {
    return response.data;
  }
  return [];
};

function ListGateways() {
  const [gateways, setGateways] = useState<Gateway[]>([]);

  useEffect(() => {
    getGateways().then((data) => setGateways(data));
  }, []);

  return (
    <React.Fragment>
      <h2>Gateways</h2>
      <Table
        headers={[
          new Header("Id"),
          new Header("Serial number"),
          new Header("Name"),
          new Header("Ipv4 Address"),
          new Header("Operations"),
        ]}
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

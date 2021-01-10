import React from "react";

import Table from "../../components/table";

function ListGateways() {
  return (
    <React.Fragment>
      <h4>Gateways</h4>
      <button id="new-gateway">Add gateway</button>
      <Table headers={["Serial number", "Name", "Ipv4 Address", "Operations"]}>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <button className="button-view">view</button>
            <button className="button-edit">edit</button>
            <button className="button-delete">delette</button>
          </td>
        </tr>
      </Table>
    </React.Fragment>
  );
}

export default ListGateways;

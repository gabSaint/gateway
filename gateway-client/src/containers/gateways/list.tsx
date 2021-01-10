import React from "react";

function ListGateways() {
  return (
    <React.Fragment>
      <button id="new-gateway">Add gateway</button>
      <table>
        <thead>
          <tr>
            <th>Serial number</th>
            <th>Name</th>
            <th>IPv4 Address</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default ListGateways;

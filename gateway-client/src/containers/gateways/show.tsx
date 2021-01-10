import React from "react";

function ShowGateway() {
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>UID</th>
            <th>Vendor</th>
            <th>Date</th>
            <th>Status</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="button-edit">edit</button>
              <button className="button-delete">delette</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="button-edit">edit</button>
              <button className="button-delete">delette</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button id="add-peripheral">Add peripheral</button>
    </React.Fragment>
  );
}

export default ShowGateway;

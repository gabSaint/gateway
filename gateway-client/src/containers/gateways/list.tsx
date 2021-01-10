import React from "react";

function ListGateways() {
  return (
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
            <button className="button-view"></button>
            <button className="button-edit"></button>
            <button className="button-delete"></button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <button className="button-view"></button>
            <button className="button-edit"></button>
            <button className="button-delete"></button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ListGateways;

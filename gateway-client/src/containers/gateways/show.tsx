import React from "react";
import Table from "../../components/table";
import Gateway from "../../models/gateway";
import Peripheral, { Status } from "../../models/peripheral";

function ShowGateway() {
  const gateway = new Gateway("1234oi78", "gate1", "127.0.0.1");
  const peripherals = [
    new Peripheral(1, "ASF", "21/23/24", Status.online),
    new Peripheral(2, "ASFX", "21/23/24", Status.offline),
  ];

  return (
    <React.Fragment>
      <h4>
        {gateway.name} - {gateway.serialNumber} - {gateway.address}
      </h4>
      <Table headers={["UID", "Vendor", "Date", "Status", "Operations"]}>
        {peripherals.map((peripheral, k) => (
          <tr key={k}>
            <td>{peripheral.uid}</td>
            <td>{peripheral.vendor}</td>
            <td>{peripheral.date}</td>
            <td>{peripheral.status}</td>
            <td>
              <button className="button-edit">edit</button>
              <button className="button-delete">delette</button>
            </td>
          </tr>
        ))}
      </Table>
      <button id="button-add-peripheral">Add peripheral</button>
    </React.Fragment>
  );
}

export default ShowGateway;

import React from "react";

import Table from "../../components/table";
import Peripheral from "../../models/peripheral";

export interface Props {
  peripherals: Peripheral[];
}

function ListPeripherals(props: Props) {
  const { peripherals } = props;

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default ListPeripherals;

import React from "react";
import { Link } from "react-router-dom";

import Table, { Header } from "../../components/table";
import Peripheral from "../../models/peripheral";

export interface Props {
  peripherals: Peripheral[];
}

function ListPeripherals(props: Props) {
  const { peripherals } = props;

  return (
    <Table
      headers={[
        new Header("UID"),
        new Header("Vendor"),
        new Header("Date"),
        new Header("Status"),
        new Header("Operations"),
      ]}
    >
      {peripherals.map((peripheral, k) => (
        <tr key={k}>
          <td>{peripheral.uid}</td>
          <td>{peripheral.vendor}</td>
          <td>{peripheral.date}</td>
          <td>{peripheral.status}</td>
          <td>
            <Link
              to={`/gateways/${peripheral.gatewayId}/peripherals/${peripheral.uid}/edit`}
            >
              <button className="button-edit" data-test="form-button-edit">
                edit
              </button>
            </Link>
          </td>
        </tr>
      ))}
    </Table>
  );
}

export default ListPeripherals;

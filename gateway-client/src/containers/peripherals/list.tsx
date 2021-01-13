import React from "react";
import { Link } from "react-router-dom";

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
    </React.Fragment>
  );
}

export default ListPeripherals;

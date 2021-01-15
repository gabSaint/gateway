import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Table, { Header } from "../../components/table";
import Peripheral from "../../models/peripheral";

export interface Props {
  peripherals: Peripheral[];
}

function ListPeripherals(props: Props) {
  const [peripherals, setPeripherals] = useState<Peripheral[]>(
    props.peripherals
  );

  useEffect(() => {
    if (props.peripherals.length === 0) {
      Peripheral.getAll().then((data) => setPeripherals(data));
    }
  }, []);

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
          <td>{peripheral.id}</td>
          <td>{peripheral.vendor}</td>
          <td>{peripheral.date}</td>
          <td>{peripheral.status}</td>
          <td>
            <Link
              to={`/gateways/${peripheral.gatewayId}/peripherals/${peripheral.id}/edit`}
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

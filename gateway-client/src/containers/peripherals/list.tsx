import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Table from "../../components/table";
import Peripheral from "../../models/peripheral";

export interface Props {
  peripherals: Peripheral[];
  all?: boolean;
}

function ListPeripherals(props: Props) {
  const all = props;

  const [peripherals, setPeripherals] = useState<Peripheral[]>(
    props.peripherals
  );
  const [headers, setHeaders] = useState([
    "UID",
    "Vendor",
    "Date",
    "Status",
    "Operations",
  ]);

  useEffect(() => {
    if (all) {
      Peripheral.getAll().then((data) => setPeripherals(data));
      setHeaders([
        "UID",
        "Vendor",
        "Date",
        "Status",
        "GatewayId",
        "Operations",
      ]);
    }
  }, []);

  return (
    <React.Fragment>
      {all && <h2>Peripherals</h2>}
      <Table headers={headers}>
        {peripherals.map((peripheral, k) => (
          <tr key={k}>
            <td>{peripheral.id}</td>
            <td>{peripheral.vendor}</td>
            <td>{peripheral.date}</td>
            <td>{peripheral.status}</td>
            {all && <td>{peripheral.gatewayId}</td>}
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
    </React.Fragment>
  );
}

export default ListPeripherals;

import React from "react";
import { Link, useParams } from "react-router-dom";

import Table from "../../components/table";
import Peripheral from "../../models/peripheral";

interface Params {
  gateway_id: string;
  id: string;
}

export interface Props {
  peripherals: Peripheral[];
}

function ListPeripherals(props: Props) {
  const { id, gateway_id } = useParams<Params>();

  const { peripherals } = props;

  const handleClick = () => {};

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
              <Link to={`/gateways/${gateway_id}/peripherals/${id}/edit`}>
                <button className="button-edit">edit</button>
              </Link>
              <button className="button-delete" onClick={handleClick}>
                delette
              </button>
            </td>
          </tr>
        ))}
      </Table>
    </React.Fragment>
  );
}

export default ListPeripherals;

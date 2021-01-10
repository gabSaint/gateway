import React, { FunctionComponent } from "react";

export interface Props {
  headers: string[];
}

const Table: FunctionComponent<Props> = (props) => {
  return (
    <table>
      <thead>
        <tr>
          {props.headers.map((column, k) => (
            <th key={k}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default Table;

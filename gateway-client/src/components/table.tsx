import React, { FunctionComponent } from "react";

export interface Props {
  headers: string[];
}

const Table: FunctionComponent<Props> = (props) => {
  return (
    <table className="ui definition table">
      <thead>
        <tr>
          {props.headers.map((header, k) => (
            <th key={k}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default Table;

import React, { FunctionComponent } from "react";

export class Header {
  constructor(public title: string, public align?: string) {}
}

export interface Props {
  headers: Header[];
}

const Table: FunctionComponent<Props> = (props) => {
  return (
    <table className="ui definition table">
      <thead>
        <tr>
          {props.headers.map((header, k) => (
            <th key={k} className={header.align}>
              {header.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default Table;

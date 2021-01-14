import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import React from "react";

import Table, { Header, Props as TableProps } from "../table";

describe("Table", () => {
  let mountedTable: ReactWrapper | ShallowWrapper;

  beforeEach(() => {
    mountedTable = shallow(<Table headers={[]} />);
  });

  it("renders a table element", () => {
    const tables = mountedTable.find("table");
    expect(tables).toHaveLength(1);
  });

  it("renders a table head element", () => {
    const tableheaders = mountedTable.find("thead");
    expect(tableheaders).toHaveLength(1);
  });

  it("renders a table body element", () => {
    const tablebodies = mountedTable.find("tbody");
    expect(tablebodies).toHaveLength(1);
  });
});

describe("When a header is passed to the component", () => {
  let mountedTable: ReactWrapper | ShallowWrapper;
  let props: TableProps;

  beforeEach(() => {
    props = {
      headers: [new Header("name"), new Header("age")],
    };
    mountedTable = shallow(<Table {...props} />);
  });

  it("displays table headers correctly", () => {
    const tableheaders = mountedTable.find("th");
    expect(tableheaders).toHaveLength(props.headers.length);

    tableheaders.forEach((th: any) => {
      const headers = props.headers.map((h) => h.title);
      expect(headers).toContain(th.text());
    });
  });
});

describe("When a children is passed to the component", () => {
  let mountedTable: ReactWrapper | ShallowWrapper;
  let props;

  beforeEach(() => {
    props = {
      headers: [],
      children: <p id="test-table-body-child"></p>,
    };
    mountedTable = shallow(<Table {...props} />);
  });

  it("display children inside table body", () => {
    const tablebodychild = mountedTable.find("tbody>p#test-table-body-child");
    expect(tablebodychild).toHaveLength(1);
  });
});

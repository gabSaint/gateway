import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import Table, { Header, Props as TableProps } from "../table";

describe("Table", () => {
  let wrapperTable: ReactWrapper | ShallowWrapper;

  beforeEach(() => {
    wrapperTable = shallow(<Table headers={[]} />);
  });

  it("renders a table element", () => {
    const tables = wrapperTable.find("table");
    expect(tables).toHaveLength(1);
  });

  it("renders a table head element", () => {
    const tableHeaders = wrapperTable.find("thead");
    expect(tableHeaders).toHaveLength(1);
  });

  it("renders a table body element", () => {
    const tableBodies = wrapperTable.find("tbody");
    expect(tableBodies).toHaveLength(1);
  });
});

describe("When a header is passed to the component", () => {
  let wrapperTable: ReactWrapper | ShallowWrapper;
  let props: TableProps;

  beforeEach(() => {
    props = {
      headers: [new Header("name"), new Header("age")],
    };
    wrapperTable = shallow(<Table {...props} />);
  });

  it("displays table headers correctly", () => {
    const tableHeaders = wrapperTable.find("th");
    expect(tableHeaders).toHaveLength(props.headers.length);

    tableHeaders.forEach((th: any) => {
      const headers = props.headers.map((h) => h.title);
      expect(headers).toContain(th.text());
    });
  });
});

describe("When a children is passed to the component", () => {
  let wrapperTable: ReactWrapper | ShallowWrapper;
  let props;

  beforeEach(() => {
    props = {
      headers: [],
      children: <p id="test-table-body-child"></p>,
    };
    wrapperTable = shallow(<Table {...props} />);
  });

  it("displays children inside table body", () => {
    const tableBodyChild = wrapperTable.find("tbody>p#test-table-body-child");
    expect(tableBodyChild).toHaveLength(1);
  });
});

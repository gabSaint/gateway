import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import Table from "../table";

describe("Table", () => {
  let wrapperTable: ReactWrapper | ShallowWrapper;
  let props: any;

  beforeEach(() => {
    props = {
      headers: ["name", "age"],
      children: <p id="test-table-body-child"></p>,
    };
    wrapperTable = shallow(<Table {...props} />);
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

  describe("When a header is passed to the component", () => {
    it("displays table headers correctly", () => {
      const tableHeaders = wrapperTable.find("th");
      expect(tableHeaders).toHaveLength(props.headers.length);

      tableHeaders.forEach((th: any) => {
        expect(props.headers).toContain(th.text());
      });
    });
  });

  describe("When children is passed to the component", () => {
    it("displays children inside table body", () => {
      const tableBodyChild = wrapperTable.find("tbody>p#test-table-body-child");
      expect(tableBodyChild).toHaveLength(1);
    });
  });
});

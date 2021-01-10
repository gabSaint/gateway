import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import ListGateways from "../list";

describe("ListGateways", () => {
  let mountedListGateways: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    mountedListGateways = shallow(<ListGateways />);
  });

  describe("table", () => {
    it("renders a table", () => {
      const tables = mountedListGateways.find("table");
      expect(tables).toHaveLength(1);
    });

    it("renders a table header", () => {
      const tableheaders = mountedListGateways.find("thead");
      expect(tableheaders).toHaveLength(1);
    });

    it("renders 4 table head columns", () => {
      const tableheadcolumns = mountedListGateways.find("th");
      expect(tableheadcolumns).toHaveLength(4);
    });

    it("renders a table body", () => {
      const tablebodies = mountedListGateways.find("tbody");
      expect(tablebodies).toHaveLength(1);
    });

    it("renders more than one & less than 11 table rows", () => {
      const tablerows = mountedListGateways.find("tr");
      expect(tablerows.length).toBeGreaterThanOrEqual(1);
      expect(tablerows.length).toBeLessThanOrEqual(11);
    });

    it("renders 4 td foreach tr in body", () => {
      const tablebodyrows = mountedListGateways.find("tbody>tr");
      const tablebodycolumns = mountedListGateways.find("tbody>tr>td");
      expect(tablebodycolumns.length).toBe(4 * tablebodyrows.length);
    });
  });
});

import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import ListGateways from "../list";
import Gateway from "../../../models/gateway";

describe("ListGateways", () => {
  let mountedListGateways: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    mountedListGateways = shallow(<ListGateways />);
  });

  describe("Header", () => {
    it("renders title", () => {
      const title = mountedListGateways.find("h4");
      expect(title).toHaveLength(1);
    });

    it("renders create new gateway button", () => {
      const newgatewaybuttons = mountedListGateways.find("#button-new-gateway");
      expect(newgatewaybuttons).toHaveLength(1);
      expect(newgatewaybuttons.text()).toBe("Add gateway");
    });
  });

  describe("Table", () => {
    it("renders Table", () => {
      const tables = mountedListGateways.find("Table");
      expect(tables).toHaveLength(1);
    });

    it("renders 5 td foreach tr in body", () => {
      const tablebodyrows = mountedListGateways.find("tbody>tr");
      const tablebodycolumns = mountedListGateways.find("tbody>tr>td");
      expect(tablebodycolumns.length).toBe(5 * tablebodyrows.length);
    });
  });

  describe("Buttons", () => {
    let tablebodyLastcolumns;

    beforeEach(() => {
      tablebodyLastcolumns = mountedListGateways.find("td:last-child");
    });

    it("renders view buttons for each gateway", () => {
      const viewbuttons = mountedListGateways.find("button.button-view");
      expect(viewbuttons).toHaveLength(tablebodyLastcolumns.length);
    });

    it("renders edit buttons for each gateway", () => {
      const editbuttons = mountedListGateways.find("button.button-edit");
      expect(editbuttons).toHaveLength(tablebodyLastcolumns.length);
    });
  });
});

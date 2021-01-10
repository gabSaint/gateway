import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import ShowGateway from "../show";

describe("ShowGateway", () => {
  let mountedShowGateway: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    mountedShowGateway = shallow(<ShowGateway />);
  });

  describe("Header", () => {
    it("renders title", () => {
      const title = mountedShowGateway.find("h4");
      expect(title).toHaveLength(1);
    });

    it("renders create new gateway button", () => {
      const newgatewaybuttons = mountedShowGateway.find(
        "button#button-add-peripheral"
      );
      expect(newgatewaybuttons).toHaveLength(1);
      expect(newgatewaybuttons.text()).toBe("Add peripheral");
    });
  });

  describe("Table for peripherals", () => {
    it("renders a table", () => {
      const tables = mountedShowGateway.find("Table");
      expect(tables).toHaveLength(1);
    });

    it("renders less than 11 table rows", () => {
      const tablerows = mountedShowGateway.find("tr");
      expect(tablerows.length).toBeLessThanOrEqual(11);
    });

    it("renders 5 td foreach tr in body", () => {
      const tablebodyrows = mountedShowGateway.find("tbody>tr");
      const tablebodycolumns = mountedShowGateway.find("tbody>tr>td");
      expect(tablebodycolumns.length).toBe(5 * tablebodyrows.length);
    });
  });

  describe("Buttons", () => {
    let tablebodyLastcolumns;

    beforeEach(() => {
      tablebodyLastcolumns = mountedShowGateway.find("td:last-child");
    });

    it("renders edit buttons for each gateway", () => {
      const editbuttons = mountedShowGateway.find("button.button-edit");
      expect(editbuttons).toHaveLength(tablebodyLastcolumns.length);
    });

    it("renders delete buttons for each gateway", () => {
      const deletebuttons = mountedShowGateway.find("button.button-delete");
      expect(deletebuttons).toHaveLength(tablebodyLastcolumns.length);
    });
  });
});

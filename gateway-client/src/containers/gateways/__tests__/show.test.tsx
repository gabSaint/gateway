import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import ShowGateway from "../show";

describe("ShowGateway", () => {
  let mountedShowGateway: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    mountedShowGateway = shallow(<ShowGateway />);
  });

  //test the header

  describe("Table for peripherals", () => {
    it("renders a table", () => {
      const tables = mountedShowGateway.find("table");
      expect(tables).toHaveLength(1);
    });

    it("renders a table header", () => {
      const tableheaders = mountedShowGateway.find("thead");
      expect(tableheaders).toHaveLength(1);
    });

    it("renders 5 table head columns", () => {
      const tableheadcolumns = mountedShowGateway.find("th");
      expect(tableheadcolumns).toHaveLength(5);
    });

    it("renders a table body", () => {
      const tablebodies = mountedShowGateway.find("tbody");
      expect(tablebodies).toHaveLength(1);
    });

    it("renders more than one & less than 11 table rows", () => {
      const tablerows = mountedShowGateway.find("tr");
      expect(tablerows.length).toBeGreaterThanOrEqual(1);
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

    // Operation buttons
    it("renders edit buttons for each gateway", () => {
      const editbuttons = mountedShowGateway.find("button.button-edit");
      expect(editbuttons).toHaveLength(tablebodyLastcolumns.length);
    });

    it("renders delete buttons for each gateway", () => {
      const deletebuttons = mountedShowGateway.find("button.button-delete");
      expect(deletebuttons).toHaveLength(tablebodyLastcolumns.length);
    });

    // add peripheral
    it("renders add new periferal button", () => {
      const newperiferalbuttons = mountedShowGateway.find(
        "button#add-peripheral"
      );
      expect(newperiferalbuttons).toHaveLength(1);
      expect(newperiferalbuttons.text()).toBe("Add peripheral");
    });
  });
});

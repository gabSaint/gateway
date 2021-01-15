import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import ListPeripherals, { Props as PeripheralProps } from "../list";
import Peripheral from "../../../models/peripheral";

describe("ListPeripherals", () => {
  let wrapperListPeripherals: ShallowWrapper | ReactWrapper;
  let wrapperListGatewayPeripherals: ShallowWrapper | ReactWrapper;
  let props: PeripheralProps;

  beforeEach(() => {
    props = {
      peripherals: [new Peripheral(1, "ASF", "21/23/24", "online", 1)],
    };

    wrapperListPeripherals = shallow(<ListPeripherals peripherals={[]} all />);
    wrapperListGatewayPeripherals = shallow(<ListPeripherals {...props} />);
  });

  describe("Table", () => {
    let renderAll;

    it("renders Table", () => {
      const table = wrapperListPeripherals.find("Table");
      expect(table).toHaveLength(1);
    });

    it("renders less than 11 table rows", () => {
      const tableRows = wrapperListGatewayPeripherals.find("tr");
      expect(tableRows.length).toBeLessThanOrEqual(11);
    });

    it("renders 5 td foreach tr in body when showing peripheral", () => {
      const tableBodyRows = wrapperListGatewayPeripherals.find("tbody>tr");
      const tableBodyColumns = wrapperListGatewayPeripherals.find(
        "tbody>tr>td"
      );
      expect(tableBodyColumns.length).toBe(5 * tableBodyRows.length);
    });

    it("renders 6 td foreach tr in body when showing all", () => {
      const tableBodyRows = wrapperListPeripherals.find("tbody>tr");
      const tableBodyColumns = wrapperListPeripherals.find("tbody>tr>td");
      expect(tableBodyColumns.length).toBe(6 * tableBodyRows.length);
    });
  });

  describe("Buttons", () => {
    let tablebodyLastcolumns;

    beforeEach(() => {
      tablebodyLastcolumns = wrapperListPeripherals.find("td:last-child");
    });

    it("renders edit buttons for each peripheral", () => {
      const editButtons = wrapperListPeripherals.find(
        "[data-test='form-button-edit']"
      );
      expect(editButtons).toHaveLength(tablebodyLastcolumns.length);
    });
  });

  describe("When a peripheral is passed to the component", () => {
    it("displays the peripheral in the table", () => {
      const tableRowsColumns = wrapperListGatewayPeripherals.find(
        "tbody>tr>td"
      );

      const attributes = ["1", "ASF", "21/23/24", "online"];
      attributes.forEach((attr: string, i: number) => {
        expect(tableRowsColumns.at(i).text()).toBe(attr);
      });
    });
  });
});

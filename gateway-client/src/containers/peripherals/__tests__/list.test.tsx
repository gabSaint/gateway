import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import ListPeripherals, { Props as PeriferalProps } from "../list";
import Peripheral from "../../../models/peripheral";

describe("ListPeripherals", () => {
  let wrapperListPeripherals: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    wrapperListPeripherals = shallow(<ListPeripherals peripherals={[]} />);
  });

  describe("Table", () => {
    it("renders Table", () => {
      const table = wrapperListPeripherals.find("Table");
      expect(table).toHaveLength(1);
    });

    it("renders less than 11 table rows", () => {
      const tableRows = wrapperListPeripherals.find("tr");
      expect(tableRows.length).toBeLessThanOrEqual(11);
    });

    it("renders 5 td foreach tr in body", () => {
      const tableBodyRows = wrapperListPeripherals.find("tbody>tr");
      const tableBodycolumns = wrapperListPeripherals.find("tbody>tr>td");
      expect(tableBodycolumns.length).toBe(5 * tableBodyRows.length);
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
});

describe("When a peripheral is passed to the component", () => {
  let wrapperListPeripherals: ReactWrapper | ShallowWrapper;
  let props: PeriferalProps;

  beforeEach(() => {
    props = {
      peripherals: [new Peripheral(1, "ASF", "21/23/24", "online", 1)],
    };
    wrapperListPeripherals = shallow(<ListPeripherals {...props} />);
  });

  it("displays the peripheral in the table", () => {
    const tableRowsColumns = wrapperListPeripherals.find("tr>td");
    expect(tableRowsColumns).toHaveLength(props.peripherals.length * 5);

    const attr = ["1", "ASF", "21/23/24", "online"];
    attr.forEach((at: string, i: number) => {
      expect(tableRowsColumns.at(i).text()).toBe(at);
    });
  });
});

import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import ListPeripherals, { Props as PeriferalProps } from "../list";
import Peripheral, { Status } from "../../../models/peripheral";

describe("ListPeripherals", () => {
  let mountedListPeripherals: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    mountedListPeripherals = shallow(<ListPeripherals peripherals={[]} />);
  });

  describe("Table", () => {
    it("renders Table", () => {
      const tables = mountedListPeripherals.find("Table");
      expect(tables).toHaveLength(1);
    });

    it("renders less than 11 table rows", () => {
      const tablerows = mountedListPeripherals.find("tr");
      expect(tablerows.length).toBeLessThanOrEqual(11);
    });

    it("renders 5 td foreach tr in body", () => {
      const tablebodyrows = mountedListPeripherals.find("tbody>tr");
      const tablebodycolumns = mountedListPeripherals.find("tbody>tr>td");
      expect(tablebodycolumns.length).toBe(5 * tablebodyrows.length);
    });
  });

  describe("Buttons", () => {
    let tablebodyLastcolumns;

    beforeEach(() => {
      tablebodyLastcolumns = mountedListPeripherals.find("td:last-child");
    });

    it("renders edit buttons for each gateway", () => {
      const editbuttons = mountedListPeripherals.find("button.button-edit");
      expect(editbuttons).toHaveLength(tablebodyLastcolumns.length);
    });

    it("renders delete buttons for each gateway", () => {
      const deletebuttons = mountedListPeripherals.find("button.button-delete");
      expect(deletebuttons).toHaveLength(tablebodyLastcolumns.length);
    });
  });
});

describe("When a peripheral is passed to the component", () => {
  let mountedListPeripherals: ReactWrapper | ShallowWrapper;
  let props: PeriferalProps;

  beforeEach(() => {
    props = {
      peripherals: [new Peripheral(1, "ASF", "21/23/24", Status.online)],
    };
    mountedListPeripherals = shallow(<ListPeripherals {...props} />);
  });

  it("displays the peripheral in the table", () => {
    const tablerowscolumns = mountedListPeripherals.find("tr>td");
    expect(tablerowscolumns).toHaveLength(props.peripherals.length * 5);

    const attr = ["1", "ASF", "21/23/24", "0", "editdelette"];
    tablerowscolumns.forEach((td: any, i: number) => {
      expect(td.text()).toBe(attr[i]);
    });
  });
});

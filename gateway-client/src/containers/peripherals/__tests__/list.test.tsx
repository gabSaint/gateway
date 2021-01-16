import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import renderer from "react-test-renderer";

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

    wrapperListPeripherals = shallow(<ListPeripherals />);
    wrapperListGatewayPeripherals = shallow(
      <ListPeripherals {...props} fromGate />
    );
  });

  it("renders correctly when listing all peripherals", () => {
    const tree = renderer.create(<ListPeripherals />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when listing a gateway's peripherals", () => {
    const tree = renderer.create(<ListPeripherals {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("Table", () => {
    it("renders Table", () => {
      const table = wrapperListPeripherals.find("Table");
      expect(table).toHaveLength(1);
    });

    it("renders less than 11 table rows", () => {
      const tableRows = wrapperListGatewayPeripherals.find("tr");
      expect(tableRows.length).toBeLessThanOrEqual(11);
    });

    it("renders 5 td foreach tr in body when showing peripheral", () => {
      const tableBodyRows = wrapperListGatewayPeripherals.find("tr");
      const tableBodyColumns = wrapperListGatewayPeripherals.find("tr>td");
      expect(tableBodyColumns.length).toBe(5 * tableBodyRows.length);
    });

    it("renders correctly the peripheral", () => {
      const tableBodyColumns = wrapperListGatewayPeripherals.find("tr>td");

      const attributes = ["1", "ASF", "21/23/24", "online"];
      attributes.forEach((attr: string, i: number) => {
        expect(tableBodyColumns.at(i).text()).toBe(attr);
      });
    });

    it("renders 6 td foreach tr in body when showing all", () => {
      const tableBodyRows = wrapperListPeripherals.find("tr");
      const tableBodyColumns = wrapperListPeripherals.find("tr>td");
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
});

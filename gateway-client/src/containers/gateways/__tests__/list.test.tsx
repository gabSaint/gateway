import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import renderer from "react-test-renderer";

import ListGateways from "../list";

describe("ListGateways", () => {
  let wrapperListGateways: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    wrapperListGateways = shallow(<ListGateways />);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<ListGateways />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("Header", () => {
    it("renders title", () => {
      const title = wrapperListGateways.find("h2");
      expect(title).toHaveLength(1);
    });

    it("renders create new gateway button", () => {
      const newGatewayButton = wrapperListGateways.find(
        "[data-test='button-new-gateway']"
      );
      expect(newGatewayButton).toHaveLength(1);
    });
  });

  describe("Table", () => {
    it("renders Table", () => {
      const table = wrapperListGateways.find("Table");
      expect(table).toHaveLength(1);
    });

    it("renders 5 td foreach tr in body", () => {
      const tableBodyRows = wrapperListGateways.find("tbody>tr");
      const tableBodyColumns = wrapperListGateways.find("tbody>tr>td");
      expect(tableBodyColumns.length).toBe(5 * tableBodyRows.length);
    });
  });

  describe("Buttons", () => {
    let tablebodyLastcolumns;

    beforeEach(() => {
      tablebodyLastcolumns = wrapperListGateways.find("td:last-child");
    });

    it("renders view buttons for each gateway", () => {
      const viewButtons = wrapperListGateways.find("[data-test='button-view']");
      expect(viewButtons).toHaveLength(tablebodyLastcolumns.length);
    });

    it("renders edit buttons for each gateway", () => {
      const editButtons = wrapperListGateways.find("[data-test='button-edit']");
      expect(editButtons).toHaveLength(tablebodyLastcolumns.length);
    });
  });
});

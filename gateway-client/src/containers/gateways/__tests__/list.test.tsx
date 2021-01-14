import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import ListGateways, { getGateways } from "../list";
import Gateway from "models/gateway";
import axios from "__mocks__/axios";

describe("ListGateways", () => {
  let wrapperListGateways: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    wrapperListGateways = shallow(<ListGateways />);
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

describe("getGateways", () => {
  let data: Gateway[];

  beforeEach(() => {
    data = [new Gateway(1, "testSerial", "testName", "127.0.0.1")];
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ status: 200, data })
    );
  });

  it("calls axios with correct url", async () => {
    await getGateways();
    expect(axios.get).toHaveBeenCalledWith("/gateways");
  });

  it("returns data on correct status code", async () => {
    const response = await getGateways();

    expect(axios.get).toHaveBeenCalled();
    expect(response).toEqual(data);
  });
});

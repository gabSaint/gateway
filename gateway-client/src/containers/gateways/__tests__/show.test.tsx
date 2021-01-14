import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import ShowGateway, { getGateway, getGatewayPeripherals } from "../show";
import Gateway from "models/gateway";
import axios from "__mocks__/axios";
import { useParams } from "__mocks__/react-router-dom";
import Peripheral from "models/peripheral";

describe("ShowGateway", () => {
  let wrapperShowGateway: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    useParams.mockImplementationOnce(() => ({ id: "1" }));

    wrapperShowGateway = shallow(<ShowGateway />);
  });

  describe("Header & Footer", () => {
    it("renders title", () => {
      const title = wrapperShowGateway.find("h2");
      expect(title).toHaveLength(1);
    });

    it("renders create new peripheral button", () => {
      const newPeripheralButton = wrapperShowGateway.find(
        "[data-test='button-add-peripheral']"
      );
      expect(newPeripheralButton).toHaveLength(1);
    });
  });

  describe("List Peripherals", () => {
    it("renders a list of Peripherals", () => {
      const listPeripherals = wrapperShowGateway.find("ListPeripherals");
      expect(listPeripherals).toHaveLength(1);
    });
  });
});

describe("getGateway", () => {
  let data: Gateway;

  beforeEach(() => {
    data = new Gateway(1, "testSerial", "testName", "127.0.0.1");
    useParams.mockImplementationOnce(() => ({ id: "1" }));

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ status: 200, data })
    );
  });

  it("calls axios with correct url", async () => {
    await getGateway(1);
    expect(axios.get).toHaveBeenCalledWith("/gateways/1");
  });

  it("returns data on correct status code", async () => {
    const response = await getGateway(1);

    expect(axios.get).toHaveBeenCalled();
    expect(response).toEqual(data);
  });
});

describe("getGateway's Peripherals", () => {
  let data: Peripheral[];

  beforeEach(() => {
    data = [
      new Peripheral(1, "ASM", new Date().toString(), "online", 2),
      new Peripheral(2, "AST", new Date().toString(), "offline", 2),
    ];

    useParams.mockImplementationOnce(() => ({ id: "2" }));
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ status: 200, data })
    );
  });

  it("calls axios with correct url", async () => {
    await getGatewayPeripherals(2);
    expect(axios.get).toHaveBeenCalledWith("/gateways/2/peripherals");
  });

  it("returns data on correct status code", async () => {
    const response = await getGatewayPeripherals(2);

    expect(axios.get).toHaveBeenCalled();
    expect(response).toEqual(data);
  });
});

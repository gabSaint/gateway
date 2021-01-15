import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import { useParams } from "__mocks__/react-router-dom";

import UpdateGateways, { deleteGateway, putGateway } from "../update";
import Gateway from "models/gateway";
import axios from "__mocks__/axios";

describe("UpdateGateways", () => {
  let wrapperUpdateGateways: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    useParams.mockImplementationOnce(() => ({ id: "1" }));

    wrapperUpdateGateways = shallow(<UpdateGateways />);
  });

  it("renders delete button", () => {
    const deleteButtons = wrapperUpdateGateways.find(
      "[data-test='form-button-delete']"
    );
    expect(deleteButtons).toHaveLength(1);
  });

  it("renders gateway form", () => {
    const form = wrapperUpdateGateways.find("GatewayForm");
    expect(form).toHaveLength(1);
  });
});

describe("putGateway", () => {
  let data: Gateway;

  beforeEach(() => {
    data = new Gateway(1, "testSerial", "testName", "127.0.0.1");
    useParams.mockImplementationOnce(() => ({ id: "1" }));

    axios.put.mockImplementationOnce(() =>
      Promise.resolve({ status: 200, data })
    );
  });

  it("calls axios with correct url", async () => {
    await putGateway(data, 1);
    expect(axios.put).toHaveBeenCalledWith("/gateways/1", data);
  });

  it("returns data on correct status code", async () => {
    const response = await putGateway(data, 1);

    expect(axios.put).toHaveBeenCalled();
    expect(response).toEqual(data);
  });
});

describe("deleteGateway", () => {
  let data: Gateway[];

  beforeEach(() => {
    data = [new Gateway(1, "testSerial", "testName", "127.0.0.1")];

    useParams.mockImplementationOnce(() => ({ id: "1" }));
    axios.delete.mockImplementationOnce(() =>
      Promise.resolve({ status: 200, data })
    );
  });

  it("calls axios with correct url", async () => {
    await deleteGateway(1);
    expect(axios.delete).toHaveBeenCalledWith("/gateways/1");
  });

  it("returns data on correct status code", async () => {
    const response = await deleteGateway(1);

    expect(axios.delete).toHaveBeenCalled();
    expect(response).toEqual(data);
  });
});

import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import CreateGateways, { postGateway } from "../create";
import Gateway from "models/gateway";
import axios from "__mocks__/axios";

describe("CreateGateways", () => {
  let wrapperCreateGateways: ReactWrapper | ShallowWrapper;

  beforeEach(() => {
    wrapperCreateGateways = shallow(<CreateGateways />);
  });

  it("renders form", () => {
    const form = wrapperCreateGateways.find("GatewayForm");
    expect(form).toHaveLength(1);
  });

  it("renders title", () => {
    const title = wrapperCreateGateways.find("h2");
    expect(title).toHaveLength(1);
  });
});

describe("postGateway", () => {
  let data: Gateway;

  beforeEach(() => {
    data = new Gateway(1, "testSerial", "testName", "127.0.0.1");

    axios.post.mockImplementationOnce(() =>
      Promise.resolve({ status: 201, data })
    );
  });

  it("calls axios with correct url", async () => {
    await postGateway(data);
    expect(axios.post).toHaveBeenCalledWith("/gateways", data);
  });

  it("returns data on correct status code", async () => {
    const response = await postGateway(data);

    expect(axios.post).toHaveBeenCalled();
    expect(response).toEqual(data);
  });
});

import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import CreateGateways from "../create";

describe("CreateGateways", () => {
  let wrapperCreateGateways: ReactWrapper | ShallowWrapper;

  beforeEach(() => {
    wrapperCreateGateways = shallow(<CreateGateways />);
  });

  it("renders title", () => {
    const title = wrapperCreateGateways.find("h2");
    expect(title).toHaveLength(1);
  });

  it("renders form", () => {
    const form = wrapperCreateGateways.find("GatewayForm");
    expect(form).toHaveLength(1);
  });
});

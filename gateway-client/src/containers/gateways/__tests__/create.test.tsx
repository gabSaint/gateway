import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import CreateGateways from "../create";

describe("CreateGateways", () => {
  let mountedCreateGateways: ReactWrapper | ShallowWrapper;

  beforeEach(() => {
    mountedCreateGateways = shallow(<CreateGateways />);
  });

  it("renders form", () => {
    const form = mountedCreateGateways.find("GatewayForm");
    expect(form).toHaveLength(1);
  });

  it("renders title", () => {
    const title = mountedCreateGateways.find("h2");
    expect(title).toHaveLength(1);
  });
});

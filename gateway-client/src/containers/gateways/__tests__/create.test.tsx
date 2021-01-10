import React from "react";
import { shallow } from "enzyme";

import CreateGateways from "../create";

describe("CreateGateways", () => {
  it("renders without crashing", () => {
    let mountedCreateGateways = shallow(<CreateGateways />);
  });
});

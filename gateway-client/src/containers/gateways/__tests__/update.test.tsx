import React from "react";
import { shallow } from "enzyme";

import UpdateGateways from "../update";

describe("UpdateGateways", () => {
  it("renders without crashing", () => {
    let mountedUpdateGateways = shallow(<UpdateGateways />);
  });
});

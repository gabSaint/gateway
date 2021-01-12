import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import UpdateGateways from "../update";

describe("UpdateGateways", () => {
  let mountedUpdateGateways: ShallowWrapper | ReactWrapper;

  beforeAll(() => {
    mountedUpdateGateways = shallow(<UpdateGateways />);
  });

  it("renders delete button", () => {
    const deletebuttons = mountedUpdateGateways.find(
      "[data-test='form-button-delete']"
    );
    expect(deletebuttons).toHaveLength(1);
  });
});

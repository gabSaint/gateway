import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import UpdateGateways from "../update";
import { useParams } from "react-router-dom";

describe("UpdateGateways", () => {
  // @ts-ignore
  useParams.mockImplementationOnce(() => ({ id: "1" }));

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

  it("renders gateway form", () => {
    const form = mountedUpdateGateways.find("GatewayForm");
    expect(form).toHaveLength(1);
  });
});

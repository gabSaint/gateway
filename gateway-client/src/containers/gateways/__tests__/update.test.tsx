import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import { useParams } from "__mocks__/react-router-dom";

import UpdateGateways from "../update";

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

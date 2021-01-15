import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import renderer from "react-test-renderer";
import { useParams } from "react-router-dom";

import UpdateGateways from "../update";

describe("UpdateGateways", () => {
  let wrapperUpdateGateways: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    // @ts-ignore
    useParams.mockImplementationOnce(() => ({ id: "1" }));

    wrapperUpdateGateways = shallow(<UpdateGateways />);
  });

  it("renders correctly", () => {
    // @ts-ignore
    useParams.mockImplementationOnce(() => ({ id: "1" }));

    const tree = renderer.create(<UpdateGateways />).toJSON();
    expect(tree).toMatchSnapshot();
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

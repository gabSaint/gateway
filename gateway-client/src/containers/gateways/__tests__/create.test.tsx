import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import renderer from "react-test-renderer";

import CreateGateway from "../create";

describe("CreateGateways", () => {
  let wrapperCreateGateway: ReactWrapper | ShallowWrapper;

  beforeEach(() => {
    wrapperCreateGateway = shallow(<CreateGateway />);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<CreateGateway />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders title", () => {
    const title = wrapperCreateGateway.find("h2");
    expect(title).toHaveLength(1);
  });

  it("renders form", () => {
    const form = wrapperCreateGateway.find("GatewayForm");
    expect(form).toHaveLength(1);
  });
});

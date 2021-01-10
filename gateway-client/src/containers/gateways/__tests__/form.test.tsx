import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import Form from "../form";

describe("FormGateways", () => {
  let mountedGatewayForm: ReactWrapper | ShallowWrapper;

  beforeEach(() => {
    mountedGatewayForm = shallow(<Form />);
  });

  it("renders serial number input", () => {
    const inputserialnumbers = mountedGatewayForm.find("input#input-serialnum");
    expect(inputserialnumbers).toHaveLength(1);
  });

  it("renders name input", () => {
    const inputnames = mountedGatewayForm.find("input#input-name");
    expect(inputnames).toHaveLength(1);
  });

  it("renders address input", () => {
    const inputaddress = mountedGatewayForm.find("input#input-address");
    expect(inputaddress).toHaveLength(1);
  });

  it("renders add gateway button", () => {
    const buttoncreate = mountedGatewayForm.find("button");
    expect(buttoncreate).toHaveLength(1);
  });
});

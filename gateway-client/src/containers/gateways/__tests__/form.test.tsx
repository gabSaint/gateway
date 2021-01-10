import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import Form from "../form";

describe("FormGateways", () => {
  let mountedGatewayForm: ReactWrapper | ShallowWrapper;

  beforeEach(() => {
    mountedGatewayForm = shallow(<Form />);
  });

  it("renders form", () => {
    const forms = mountedGatewayForm.find("form");
    expect(forms).toHaveLength(1);
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

  it("renders submit button", () => {
    const buttonsubmit = mountedGatewayForm.find("button#button-submit-form");
    expect(buttonsubmit).toHaveLength(1);
  });

  it("renders cancel button", () => {
    const buttoncancel = mountedGatewayForm.find("button#button-cancel-form");
    expect(buttoncancel).toHaveLength(1);
  });
});

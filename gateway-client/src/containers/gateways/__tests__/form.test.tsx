import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import Form, { Props as FormGatewaysProps } from "../form";
import Gateway from "../../../models/gateway";

describe("FormGateways", () => {
  let mountedGatewayForm: ReactWrapper | ShallowWrapper;
  let props: FormGatewaysProps;

  beforeEach(() => {
    props = {
      gateway: {
        id: 1,
        serial: "24589",
        name: "gateway1",
        address: "127.0.27.1",
      },
      handleSubmit: jest.fn(),
    };
    mountedGatewayForm = shallow(<Form {...props} />);
  });

  describe("Form", () => {
    it("renders form", () => {
      const formik = mountedGatewayForm.find("Formik");
      expect(formik).toHaveLength(1);
    });

    it("renders serial number input", () => {
      const inputserialnumbers = mountedGatewayForm.find("#input-serial");
      expect(inputserialnumbers).toHaveLength(1);
    });

    it("renders name input", () => {
      const inputnames = mountedGatewayForm.find("#input-name");
      expect(inputnames).toHaveLength(1);
    });

    it("renders address input", () => {
      const inputaddress = mountedGatewayForm.find("#input-address");
      expect(inputaddress).toHaveLength(1);
    });

    it("renders submit button", () => {
      const buttonsubmit = mountedGatewayForm.find("button[type='submit']");
      expect(buttonsubmit).toHaveLength(1);
    });

    it("renders cancel button", () => {
      const buttoncancel = mountedGatewayForm.find("button[type='button']");
      expect(buttoncancel).toHaveLength(1);
    });
  });
});

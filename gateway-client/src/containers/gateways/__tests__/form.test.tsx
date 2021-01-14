import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import Form, {
  FormContent,
  Props as FormGatewaysProps,
  validate,
} from "../form";
import { FormikState } from "formik";
import Gateway from "models/gateway";

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

  it("renders form", () => {
    const formik = mountedGatewayForm.find("Formik");
    expect(formik).toHaveLength(1);
  });
});

describe("FormContent", () => {
  let mountedGatewayFormContent: ReactWrapper | ShallowWrapper;
  let props: FormikState<Gateway>;

  beforeEach(() => {
    props = {
      errors: { serial: "error", name: "error", address: "error" },
      touched: { serial: true, name: true, address: true },
      values: { id: 1, name: "gate1", serial: "123", address: "127.0.0.1" },
    } as FormikState<Gateway>;
    mountedGatewayFormContent = shallow(<FormContent {...props} />);
  });

  describe("Form", () => {
    it("renders submit button", () => {
      const buttonsubmit = mountedGatewayFormContent.find(
        "button[type='submit']"
      );
      expect(buttonsubmit).toHaveLength(1);
    });

    it("renders cancel button", () => {
      const buttoncancel = mountedGatewayFormContent.find(
        "button[type='button']"
      );
      expect(buttoncancel).toHaveLength(1);
    });

    it("renders serial number FormInput", () => {
      const inputserialnumbers = mountedGatewayFormContent.find(
        "FormInput[name='serial']"
      );
      expect(inputserialnumbers).toHaveLength(1);
    });

    it("renders name FormInput", () => {
      const inputnames = mountedGatewayFormContent.find(
        "FormInput[name='name']"
      );
      expect(inputnames).toHaveLength(1);
    });

    it("renders address FormInput", () => {
      const inputaddress = mountedGatewayFormContent.find(
        "FormInput[name='address']"
      );
      expect(inputaddress).toHaveLength(1);
    });
  });

  describe("Function Validate", () => {
    let correctGateway: any;
    let wrongGateway: any;

    beforeEach(() => {
      correctGateway = validate(new Gateway(1, "12345", "gate1", "127.0.0.1"));
      wrongGateway = validate(new Gateway(2, "", "", "127.1"));
    });

    it("validates correctly the serial input", () => {
      expect(correctGateway.serial).toBeUndefined();
      expect(wrongGateway.serial).toBeDefined();
    });

    it("validates correctly the name input", () => {
      expect(correctGateway.name).toBeUndefined();
      expect(wrongGateway.name).toBeDefined();
    });

    it("validates correctly the address input", () => {
      expect(correctGateway.address).toBeUndefined();
      expect(wrongGateway.address).toBeDefined();
    });
  });
});

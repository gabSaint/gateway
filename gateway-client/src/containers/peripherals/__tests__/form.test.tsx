import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import renderer from "react-test-renderer";

import PeripheralForm, {
  FormContent,
  Props as PeripheralProps,
  validate,
} from "../form";
import Peripheral from "models/peripheral";
import { FormikState } from "formik";

describe("PeripheralForm", () => {
  let wrapperPeripheralForm: ShallowWrapper | ReactWrapper;
  let props: PeripheralProps;

  beforeEach(() => {
    props = {
      peripheral: {} as Peripheral,
      handleSubmit: jest.fn(),
    };
    wrapperPeripheralForm = shallow(<PeripheralForm {...props} />);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<PeripheralForm {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders form Formik", () => {
    const formik = wrapperPeripheralForm.find("Formik");
    expect(formik).toHaveLength(1);
  });
});

describe("FormContent", () => {
  let wrapperPeripheralFormContent: ReactWrapper | ShallowWrapper;
  let props: FormikState<Peripheral>;

  beforeEach(() => {
    props = {
      errors: { id: "error", vendor: "error", status: "error" },
      touched: { id: true, vendor: true, status: true },
      values: { id: 123, vendor: "ATS", status: "online" },
    } as FormikState<Peripheral>;
    wrapperPeripheralFormContent = shallow(<FormContent {...props} />);
  });

  describe("Form", () => {
    it("renders submit button", () => {
      const buttonSubmit = wrapperPeripheralFormContent.find(
        "[data-test='button-submit']"
      );
      expect(buttonSubmit).toHaveLength(1);
    });

    it("renders cancel button", () => {
      const buttoncancel = wrapperPeripheralFormContent.find(
        "[data-test='button-cancel']"
      );
      expect(buttoncancel).toHaveLength(1);
    });

    it("renders vendor FormInput", () => {
      const inputVendors = wrapperPeripheralFormContent.find(
        "FormInput[name='vendor']"
      );
      expect(inputVendors).toHaveLength(1);
    });

    it("renders status FormRadio", () => {
      const inputStatus = wrapperPeripheralFormContent.find(
        "FormRadio[label='Status']"
      );
      expect(inputStatus).toHaveLength(1);
    });

    it("renders 2 RadioInput", () => {
      const inputRadios = wrapperPeripheralFormContent.find("RadioInput");
      expect(inputRadios).toHaveLength(2);
    });
  });

  describe("Function Validate", () => {
    let correctPeripheral: any;
    let wrongPeripheral: any;

    beforeEach(() => {
      correctPeripheral = validate(
        new Peripheral(1234, "AID", "24/1/2020", "online", 1)
      );
      wrongPeripheral = validate({} as Peripheral);
    });

    it("validates correctly the vendor input", () => {
      expect(correctPeripheral.vendor).toBeUndefined();
      expect(wrongPeripheral.vendor).toBeDefined();
    });

    it("validates correctly the status input", () => {
      expect(correctPeripheral.status).toBeUndefined();
      expect(wrongPeripheral.status).toBeDefined();
    });
  });
});

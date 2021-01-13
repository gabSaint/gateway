import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import PeripheralForm, {
  FormContent,
  Props as PeripheralProps,
  validate,
} from "../form";
import Peripheral from "models/peripheral";
import { FormikState } from "formik";

describe("PeripheralForm", () => {
  let mountedPeripheralForm: ShallowWrapper | ReactWrapper;
  let props: PeripheralProps;

  beforeEach(() => {
    props = {
      peripheral: {} as Peripheral,
      handleSubmit: jest.fn(),
    };
    mountedPeripheralForm = shallow(<PeripheralForm {...props} />);
  });

  it("renders form Formik", () => {
    const formik = mountedPeripheralForm.find("Formik");
    expect(formik).toHaveLength(1);
  });

  it("renders cancel button", () => {
    const buttoncancel = mountedPeripheralForm.find("button[type='button']");
    expect(buttoncancel).toHaveLength(1);
  });
});

describe("FormContent", () => {
  let mountedPeripheralFormContent: ReactWrapper | ShallowWrapper;
  let props: FormikState<Peripheral>;

  beforeEach(() => {
    props = {
      errors: { uid: "error", vendor: "error", status: "error" },
      touched: { uid: true, vendor: true, status: true },
    } as FormikState<Peripheral>;
    mountedPeripheralFormContent = shallow(<FormContent {...props} />);
  });

  describe("Form", () => {
    it("renders submit button", () => {
      const buttonsubmit = mountedPeripheralFormContent.find(
        "button[type='submit']"
      );
      expect(buttonsubmit).toHaveLength(1);
    });

    it("renders uid input", () => {
      const inputUid = mountedPeripheralFormContent.find("#input-uid");
      expect(inputUid).toHaveLength(1);
    });

    it("renders vendor input", () => {
      const inputvendors = mountedPeripheralFormContent.find("#input-vendor");
      expect(inputvendors).toHaveLength(1);
    });

    it("renders status input", () => {
      const inputstatus = mountedPeripheralFormContent.find("#input-status");
      expect(inputstatus).toHaveLength(1);
    });
  });

  describe("Behaviour", () => {
    it("shows error when wrong uid", () => {
      const uid = mountedPeripheralFormContent.find(
        "[data-test='show-uid-error']"
      );
      expect(uid).toHaveLength(1);
    });

    it("shows error when wrong vendor", () => {
      const vendor = mountedPeripheralFormContent.find(
        "[data-test='show-vendor-error']"
      );
      expect(vendor).toHaveLength(1);
    });

    it("shows error when wrong status", () => {
      const status = mountedPeripheralFormContent.find(
        "[data-test='show-status-error']"
      );
      expect(status).toHaveLength(1);
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

      it("validates correctly the uid input", () => {
        expect(correctPeripheral.uid).toBeUndefined();
        expect(wrongPeripheral.uid).toBeDefined();
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
});

import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import FormInput, { Props as FormInputProps } from "components/formInput";

describe("Form Input", () => {
  let mountedInputForm: ShallowWrapper | ReactWrapper;
  let props;

  beforeEach(() => {
    props = {} as FormInputProps;
    mountedInputForm = shallow(<FormInput {...props} />);
  });

  it("render a label", () => {
    const label = mountedInputForm.find("label");
    expect(label).toHaveLength(1);
  });

  it("render a field component", () => {
    const field = mountedInputForm.find("Field");
    expect(field).toHaveLength(1);
  });

  describe("Behaviour", () => {
    let wrongInputWrapper: ReactWrapper | ShallowWrapper;
    let correctInputWrapper: ReactWrapper | ShallowWrapper;

    beforeEach(() => {
      const wrongInput = {
        id: "",
        name: "",
        field: "",
        error: "error",
        touched: true,
        value: "",
        submitCount: 2,
      };
      const correctInput = {
        id: "",
        name: "",
        field: "",
        error: "",
        touched: false,
        value: "",
        submitCount: 0,
      };

      wrongInputWrapper = shallow(<FormInput {...wrongInput} />);
      correctInputWrapper = shallow(<FormInput {...correctInput} />);
    });

    it("shows error just when necessary", () => {
      const error = wrongInputWrapper.find("[data-test]");
      expect(error).toHaveLength(1);

      const noterror = correctInputWrapper.find("[data-test]");
      expect(noterror).toHaveLength(0);
    });
  });
});

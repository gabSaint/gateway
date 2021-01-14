import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import FormInput, { Props as FormInputProps } from "components/formInput";

describe("Form Input", () => {
  let wrapperInputForm: ShallowWrapper | ReactWrapper;
  let props;

  beforeEach(() => {
    props = {} as FormInputProps;
    wrapperInputForm = shallow(<FormInput {...props} />);
  });

  it("renders a label", () => {
    const label = wrapperInputForm.find("label");
    expect(label).toHaveLength(1);
  });

  it("renders a field component", () => {
    const field = wrapperInputForm.find("Field");
    expect(field).toHaveLength(1);
  });

  describe("Behaviour", () => {
    let wrongInputWrapper: ReactWrapper | ShallowWrapper;
    let correctInputWrapper: ReactWrapper | ShallowWrapper;

    beforeEach(() => {
      const wrongInput = {
        name: "",
        field: "",
        error: "error",
        touched: true,
        value: "",
        submitCount: 2,
      };
      const correctInput = {
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

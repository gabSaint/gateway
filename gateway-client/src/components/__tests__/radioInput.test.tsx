import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import RadioInput, { Props as RadioInputProps } from "components/radioInput";

describe("RadioInput", () => {
  let wrapperRadioInput: ShallowWrapper | ReactWrapper;
  let props: RadioInputProps;

  beforeEach(() => {
    props = {} as RadioInputProps;
    wrapperRadioInput = shallow(<RadioInput {...props} />);
  });

  it("renders a div field", () => {
    const field = wrapperRadioInput.find("div.field");
    expect(field).toHaveLength(1);
  });

  it("renders a Formik Field", () => {
    const field = wrapperRadioInput.find("Field[type='radio']");
    expect(field).toHaveLength(1);
  });

  it("renders a label", () => {
    const label = wrapperRadioInput.find("label");
    expect(label).toHaveLength(1);
  });
});

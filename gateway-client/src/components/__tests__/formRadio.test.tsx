import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import FormRadio, { Props as FormRadioProps } from "components/formradio";

describe("FormRadio", () => {
  let wrapperFormRadio: ReactWrapper | ShallowWrapper;
  let props: any;

  beforeEach(() => {
    props = {} as FormRadioProps;
    wrapperFormRadio = shallow(<FormRadio {...props} />);
  });

  it("renders a div group", () => {
    const groupsDiv = wrapperFormRadio.find("div[role='group']");
    expect(groupsDiv).toHaveLength(1);
  });

  it("renders a label", () => {
    const label = wrapperFormRadio.find("label");
    expect(label).toHaveLength(1);
  });

  describe("when children is passed to the component", () => {
    beforeEach(() => {
      wrapperFormRadio = shallow(
        <FormRadio {...props}>
          <p id="test-form-radio-child"></p>
        </FormRadio>
      );
    });

    it("displays children inside form radio", () => {
      const children = wrapperFormRadio.find("p#test-form-radio-child");
      expect(children).toHaveLength(1);
    });
  });
});

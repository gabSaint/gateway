import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import Message, { Props as MessageProps } from "components/message";

describe("Message", () => {
  let wrapperMessage: ReactWrapper | ShallowWrapper;
  let props: MessageProps;

  beforeEach(() => {
    props = {
      error: "",
    };
    wrapperMessage = shallow(<Message {...props} />);
  });

  it("renders div.message", () => {
    const divMessage = wrapperMessage.find("div.message");
    expect(divMessage).toHaveLength(1);
  });

  it("renders an icon", () => {
    const icon = wrapperMessage.find("i.icon");
    expect(icon).toHaveLength(1);
  });

  it("renders a header", () => {
    const header = wrapperMessage.find("div.header");
    expect(header).toHaveLength(1);
  });
});

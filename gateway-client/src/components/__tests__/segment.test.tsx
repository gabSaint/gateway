import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import Segment from "components/segment";

describe("Initial Segment", () => {
  let wrapperSegment: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    wrapperSegment = shallow(<Segment />);
  });

  it("renders Link", () => {
    const link = wrapperSegment.find("Link");
    expect(link).toHaveLength(1);
  });
});

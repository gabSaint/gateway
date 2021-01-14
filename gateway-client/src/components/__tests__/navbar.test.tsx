import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import Navbar from "components/navbar";

describe("Navbar", () => {
  let wrapperNavbar: ReactWrapper | ShallowWrapper;

  beforeEach(() => {
    wrapperNavbar = shallow(<Navbar />);
  });

  it("renders a div.menu", () => {
    let menu = wrapperNavbar.find("div.menu");
    expect(menu).toHaveLength(1);
  });
});

import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import Navbar from "components/navbar";

describe("Navbar", () => {
  let mountedNavbar: ReactWrapper | ShallowWrapper;

  beforeEach(() => {
    mountedNavbar = shallow(<Navbar />);
  });

  it("renders a div.menu", () => {
    let menu = mountedNavbar.find("div.menu");
    expect(menu).toHaveLength(1);
  });
});

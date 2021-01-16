import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import renderer from "react-test-renderer";

import Layout from "../layout";

describe("Layout", () => {
  let wrapperLayout: ShallowWrapper | ReactWrapper;
  let props: any;

  beforeEach(() => {
    props = {
      children: <p id="child" />,
    };
    wrapperLayout = shallow(<Layout {...props} />);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Layout {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders Navbar", () => {
    const navbar = wrapperLayout.find("Navbar");
    expect(navbar).toHaveLength(1);
  });

  it("renders flex container", () => {
    const flexcontainer = wrapperLayout.find("div#flex-container");
    expect(flexcontainer).toHaveLength(1);
  });

  it("renders children", () => {
    const children = wrapperLayout.find("p#child");
    expect(children).toHaveLength(1);
  });
});

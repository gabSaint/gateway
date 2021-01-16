import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import renderer from "react-test-renderer";

import Routes from "../routes";

describe("Routes", () => {
  let wrapperRoutes: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    wrapperRoutes = shallow(<Routes />);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Routes />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a BrowserRouter", () => {
    const router = wrapperRoutes.find("BrowserRouter");
    expect(router).toHaveLength(1);
  });

  it("renders a Layout", () => {
    const layout = wrapperRoutes.find("Layout");
    expect(layout).toHaveLength(1);
  });

  it("renders a Switch", () => {
    const swit = wrapperRoutes.find("Switch");
    expect(swit).toHaveLength(1);
  });

  it("renders all paths", () => {
    const paths = [
      "/api/",
      "/api/gateways",
      "/api/gateways/create",
      "/api/gateways/:id",
      "/api/gateways/:id/edit",
      "/api/gateways/:id/peripherals/create",
      "/api/gateways/:gateway_id/peripherals/:id/edit",
      "/api/peripherals",
    ];

    const routes = wrapperRoutes.find("Route");
    expect(routes).toHaveLength(8);

    paths.forEach((path: any) => {
      expect(routes.find(`[path='${path}']`)).toHaveLength(1);
    });
  });
});

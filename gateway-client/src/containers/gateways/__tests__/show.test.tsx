import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import ShowGateway from "../show";

describe("ShowGateway", () => {
  let mountedShowGateway: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    mountedShowGateway = shallow(<ShowGateway />);
  });

  describe("Header & Footer", () => {
    it("renders title", () => {
      const title = mountedShowGateway.find("h2");
      expect(title).toHaveLength(1);
    });

    it("renders create new peripheral button", () => {
      const newperipheralbuttons = mountedShowGateway.find(
        "button#button-add-peripheral"
      );
      expect(newperipheralbuttons).toHaveLength(1);
      expect(newperipheralbuttons.text()).toBe("Add peripheral");
    });
  });

  describe("List Peripherals", () => {
    it("renders a list of Peripherals", () => {
      const listperipherals = mountedShowGateway.find("ListPeripherals");
      expect(listperipherals).toHaveLength(1);
    });
  });
});

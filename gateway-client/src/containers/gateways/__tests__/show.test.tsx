import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";

import ShowGateway from "../show";

describe("ShowGateway", () => {
  let wrapperShowGateway: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    wrapperShowGateway = shallow(<ShowGateway />);
  });

  describe("Header & Footer", () => {
    it("renders title", () => {
      const title = wrapperShowGateway.find("h2");
      expect(title).toHaveLength(1);
    });

    it("renders create new peripheral button", () => {
      const newPeripheralButton = wrapperShowGateway.find(
        "[data-test='button-add-peripheral']"
      );
      expect(newPeripheralButton).toHaveLength(1);
    });
  });

  describe("List Peripherals", () => {
    it("renders a list of Peripherals", () => {
      const listPeripherals = wrapperShowGateway.find("ListPeripherals");
      expect(listPeripherals).toHaveLength(1);
    });
  });
});

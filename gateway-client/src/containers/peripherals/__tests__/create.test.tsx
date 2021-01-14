import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import CreatePeripheral from "../create";

describe("CreatePeripheral", () => {
  let wrapperCreatePeripheral: ReactWrapper | ShallowWrapper;

  beforeEach(() => {
    wrapperCreatePeripheral = shallow(<CreatePeripheral />);
  });

  it("renders form", () => {
    const form = wrapperCreatePeripheral.find("PeripheralForm");
    expect(form).toHaveLength(1);
  });

  it("renders title", () => {
    const title = wrapperCreatePeripheral.find("h2");
    expect(title).toHaveLength(1);
  });
});

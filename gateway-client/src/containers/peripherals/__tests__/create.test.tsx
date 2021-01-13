import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import CreatePeripheral from "../create";

describe("CreatePeripheral", () => {
  let mountedCreatePeripheral: ReactWrapper | ShallowWrapper;

  beforeEach(() => {
    mountedCreatePeripheral = shallow(<CreatePeripheral />);
  });

  it("renders form", () => {
    const form = mountedCreatePeripheral.find("PeripheralForm");
    expect(form).toHaveLength(1);
  });
});

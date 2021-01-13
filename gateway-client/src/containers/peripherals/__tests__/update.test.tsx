import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import { useParams } from "react-router-dom";

import UpdatePeripheral from "../update";

describe("UpdatePeripheral", () => {
  let mountedUpdatePeripheral: ReactWrapper | ShallowWrapper;

  beforeEach(() => {
    // @ts-ignore
    useParams.mockImplementationOnce(() => ({ id: "1" }));

    mountedUpdatePeripheral = shallow(<UpdatePeripheral />);
  });

  it("renders Peripheral form", () => {
    const form = mountedUpdatePeripheral.find("PeripheralForm");
    expect(form).toHaveLength(1);
  });

  it("renders delete button", () => {
    const deletebuttons = mountedUpdatePeripheral.find(
      "[data-test='form-button-delete']"
    );
    expect(deletebuttons).toHaveLength(1);
  });
});

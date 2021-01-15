import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import renderer from "react-test-renderer";
import { useParams } from "react-router-dom";

import UpdatePeripheral from "../update";

describe("UpdatePeripheral", () => {
  let mountedUpdatePeripheral: ReactWrapper | ShallowWrapper;

  beforeEach(() => {
    // @ts-ignore
    useParams.mockImplementationOnce(() => ({ id: "1" }));

    mountedUpdatePeripheral = shallow(<UpdatePeripheral />);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<UpdatePeripheral />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders Peripheral form", () => {
    const form = mountedUpdatePeripheral.find("PeripheralForm");
    expect(form).toHaveLength(1);
  });

  it("renders delete button", () => {
    const deleteButton = mountedUpdatePeripheral.find(
      "[data-test='form-button-delete']"
    );
    expect(deleteButton).toHaveLength(1);
  });
});

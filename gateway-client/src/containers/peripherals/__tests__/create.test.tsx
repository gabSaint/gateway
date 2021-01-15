import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import { useParams } from "react-router-dom";
import renderer from "react-test-renderer";

import CreatePeripheral from "../create";

describe("CreatePeripheral", () => {
  let wrapperCreatePeripheral: ReactWrapper | ShallowWrapper;

  beforeEach(() => {
    // @ts-ignore
    useParams.mockImplementationOnce(() => ({ id: 1 }));
    wrapperCreatePeripheral = shallow(<CreatePeripheral />);
  });

  it("renders correctly", () => {
    // @ts-ignore
    useParams.mockImplementationOnce(() => ({ id: "1" }));

    const tree = renderer.create(<CreatePeripheral />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders title", () => {
    const title = wrapperCreatePeripheral.find("h2");
    expect(title).toHaveLength(1);
  });

  it("renders form", () => {
    const form = wrapperCreatePeripheral.find("PeripheralForm");
    expect(form).toHaveLength(1);
  });
});

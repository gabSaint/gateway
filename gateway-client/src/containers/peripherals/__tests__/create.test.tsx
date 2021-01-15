import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import { useParams } from "__mocks__/react-router-dom";

import CreatePeripheral from "../create";

describe("CreatePeripheral", () => {
  let wrapperCreatePeripheral: ReactWrapper | ShallowWrapper;

  beforeEach(() => {
    useParams.mockImplementationOnce(() => ({ id: 1 }));
    wrapperCreatePeripheral = shallow(<CreatePeripheral />);
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

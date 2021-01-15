import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import renderer from "react-test-renderer";
import { useParams } from "react-router-dom";

import ShowGateway from "../show";

describe("ShowGateway", () => {
  let wrapperShowGateway: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    // @ts-ignore
    useParams.mockImplementationOnce(() => ({ id: "1" }));

    wrapperShowGateway = shallow(<ShowGateway />);
  });

  it("renders correctly", () => {
    // @ts-ignore
    useParams.mockImplementationOnce(() => ({ id: "1" }));

    const tree = renderer.create(<ShowGateway />).toJSON();
    expect(tree).toMatchSnapshot();
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
});

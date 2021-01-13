import React, { FunctionComponent } from "react";

const useParams = jest.fn();
const useHistory = jest.fn();

const Link: FunctionComponent = ({ children }) =>
  React.createElement("div", null, children);

export { useParams, useHistory, Link };

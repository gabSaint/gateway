import React, { FunctionComponent } from "react";

const useParams = jest.fn();
const useHistory = jest.fn();

const Link: FunctionComponent = ({ children }) =>
  React.createElement("div", null, children);

const BrowserRouter: FunctionComponent = ({ children }) =>
  React.createElement("div", null, children);

const Route: FunctionComponent = ({ children }) =>
  React.createElement("div", null, children);

const Switch: FunctionComponent = ({ children }) =>
  React.createElement("div", null, children);

export { useParams, useHistory, Link, BrowserRouter, Route, Switch };

import React from "react";
import ReactDOM from "react-dom";
import Routes from "routes";
import FlexContainer from "containers/container";
import "index.scss";

ReactDOM.render(
  <React.StrictMode>
    <FlexContainer>
      <Routes />
    </FlexContainer>
  </React.StrictMode>,

  document.getElementById("root")
);

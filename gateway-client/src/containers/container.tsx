import React, { FunctionComponent } from "react";

const FlexContainer: FunctionComponent = (props: any) => {
  return (
    <div id="flex-container" className="ui container">
      {props.children}
    </div>
  );
};

export default FlexContainer;

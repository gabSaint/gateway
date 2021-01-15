import React from "react";
import Navbar from "components/navbar";

const Layout = (props: any) => {
  return (
    <React.Fragment>
      <Navbar />
      <div id="flex-container" className="ui container">
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Layout;

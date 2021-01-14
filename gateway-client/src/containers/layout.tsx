import React from "react";
import Navbar from "components/navbar";

const Layout = (props: any) => {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
};

export default Layout;

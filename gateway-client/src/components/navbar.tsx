import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="ui menu">
      <Link to="/" className="active item">
        Home
      </Link>
    </div>
  );
}

export default Navbar;

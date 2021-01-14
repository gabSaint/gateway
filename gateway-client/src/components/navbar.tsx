import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="ui menu">
      <Link to="/" className="active item">
        Home
      </Link>
      <Link to="/gateways" className="item">
        Gateways
      </Link>
      <div className="right item">
        <div className="ui icon input">
          <input type="text" placeholder="Search Gateway..." />
          <i className="search icon"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function InitialSegment() {
  return (
    <div className="ui placeholder segment">
      <div className="ui two column stackable center aligned grid">
        <div className="ui vertical divider">Or</div>
        <div className="middle aligned row">
          <div className="column">
            <div className="ui icon header">
              <i className="search icon"></i>
              Select Gateway
            </div>
            <div className="field">
              <div className="ui search">
                <div className="ui icon input">
                  <input
                    className="prompt"
                    type="text"
                    placeholder="Search gateways..."
                  />
                  <i className="search icon"></i>
                </div>
                <div className="results"></div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="ui icon header">
              <i className="plug icon"></i>
              Add New Gateway
            </div>
            <Link to="/gateways/create">
              <div className="ui primary button">Create</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InitialSegment;

import React from "react";

function UpdateGateway() {
  function handleRemove(id: number) {
    // const newList = gateways.filter((item) => item.id != id);
    // setGateways(newList);
  }

  return (
    <React.Fragment>
      <button
        type="button"
        data-test="form-button-delete"
        onClick={() => handleRemove(1)}
      >
        Delete
      </button>
    </React.Fragment>
  );
}

export default UpdateGateway;

import React from "react";

function GatewayForm() {
  return (
    <form>
      <h5>Serial Number</h5>
      <input id="input-serialnum" />

      <h5>Name</h5>
      <input id="input-name" />

      <h5>IPv4 Address</h5>
      <input id="input-address" />

      <button>Add gateway</button>
    </form>
  );
}

export default GatewayForm;

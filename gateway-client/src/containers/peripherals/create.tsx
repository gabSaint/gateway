import React from "react";
import PeripheralForm from "./form";
import Peripheral from "models/peripheral";

function CreatePeripheral() {
  const handleSubmit = (peripheral: Peripheral) => {
    console.log("Peripheral created", peripheral);
  };

  return (
    <PeripheralForm
      peripheral={{} as Peripheral}
      handleSubmit={handleSubmit}
    ></PeripheralForm>
  );
}

export default CreatePeripheral;

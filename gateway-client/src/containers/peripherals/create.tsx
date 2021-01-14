import React from "react";
import PeripheralForm from "./form";
import Peripheral from "models/peripheral";

function CreatePeripheral() {
  const handleSubmit = (peripheral: Peripheral) => {
    console.log("Peripheral created", peripheral);
  };

  return (
    <React.Fragment>
      <h2>Create Peripheral</h2>
      <PeripheralForm
        peripheral={
          { status: "online", date: new Date().toString() } as Peripheral
        }
        handleSubmit={handleSubmit}
      ></PeripheralForm>
    </React.Fragment>
  );
}

export default CreatePeripheral;

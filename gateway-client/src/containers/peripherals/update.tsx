import Peripheral from "models/peripheral";
import React from "react";
import { useParams } from "react-router-dom";
import PeripheralForm from "./form";

interface Params {
  id: string;
}

function UpdatePeripheral() {
  const { id } = useParams<Params>();

  const handleRemove = () => {};

  const handleSubmit = (peripheral: Peripheral) => {
    console.log("Peripheral edited", peripheral);
  };

  return (
    <React.Fragment>
      <button
        className="button-delete"
        data-test="form-button-delete"
        onClick={handleRemove}
      >
        Delette Peripheral
      </button>
      <PeripheralForm
        peripheral={{} as Peripheral}
        handleSubmit={handleSubmit}
      />
    </React.Fragment>
  );
}

export default UpdatePeripheral;

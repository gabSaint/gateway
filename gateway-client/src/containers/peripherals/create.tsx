import React from "react";
import { useParams, useHistory } from "react-router-dom";

import PeripheralForm from "./form";
import Peripheral from "models/peripheral";

function CreatePeripheral() {
  const { id } = useParams<any>();
  const history = useHistory();

  const handleSubmit = async (peripheral: Peripheral) => {
    const error = await Peripheral.create(peripheral);

    if (error) {
      alert(error);
    } else {
      history.goBack();
    }
  };

  return (
    <React.Fragment>
      <h2>Create Peripheral</h2>
      <PeripheralForm
        peripheral={
          {
            status: "online",
            date: new Date().toDateString(),
            gatewayId: Number(id),
          } as Peripheral
        }
        handleSubmit={handleSubmit}
      ></PeripheralForm>
    </React.Fragment>
  );
}

export default CreatePeripheral;

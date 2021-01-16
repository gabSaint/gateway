import React, { useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";

import PeripheralForm from "./form";
import Peripheral from "models/peripheral";
import Message from "components/message";

function CreatePeripheral() {
  const { id } = useParams<any>();
  const history = useHistory();

  const handleSubmit = useCallback((peripheral: Peripheral) => {
    Peripheral.create(id, peripheral).then((error) => {
      <Message error={error} />;
      history.push(`/gateways/${id}`);
    });
  }, []);

  return (
    <React.Fragment>
      <h2>Create Peripheral</h2>
      <PeripheralForm
        peripheral={
          {
            status: "online",
            date: new Date().toDateString(),
            gatewayId: id,
          } as Peripheral
        }
        handleSubmit={handleSubmit}
      ></PeripheralForm>
    </React.Fragment>
  );
}

export default CreatePeripheral;

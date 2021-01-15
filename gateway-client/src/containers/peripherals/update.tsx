import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "__mocks__/react-router-dom";

import Peripheral from "models/peripheral";
import PeripheralForm from "./form";

function UpdatePeripheral() {
  const [peripheral, setPeripheral] = useState<Peripheral>();

  const { gateway_id, id } = useParams<any>();
  const history = useHistory();

  useEffect(() => {
    Peripheral.getById(id).then((data) => setPeripheral(data));
  }, []);

  const handleRemove = useCallback(async () => {
    const data = await Peripheral.delete(id);

    if (data) {
      history.push(`/gateways/${gateway_id}`);
    }
  }, []);

  const handleSubmit = useCallback(async (peripheral: Peripheral) => {
    const data = await Peripheral.update(id, peripheral || ({} as Peripheral));

    if (data) {
      history.push(`/gateways/${gateway_id}`);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="contain-row">
        <h2>Edit Peripheral</h2>
        <button
          data-test="form-button-delete"
          onClick={handleRemove}
          className="negative"
        >
          Delete
        </button>
      </div>
      <PeripheralForm
        peripheral={{} as Peripheral}
        handleSubmit={handleSubmit}
      />
    </React.Fragment>
  );
}

export default UpdatePeripheral;

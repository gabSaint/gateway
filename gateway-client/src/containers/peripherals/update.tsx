import React, { useCallback, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import Peripheral from "models/peripheral";
import PeripheralForm from "./form";

function UpdatePeripheral() {
  const [peripheral, setPeripheral] = useState<Peripheral>();

  const { id } = useParams<any>();
  const history = useHistory();

  useEffect(() => {
    Peripheral.getById(id).then((data) => setPeripheral(data));
  }, []);

  const handleRemove = useCallback(() => {
    Peripheral.delete(id).then((error) => {
      if (error) {
        alert(error);
      } else {
        history.goBack();
      }
    });
  }, []);

  const handleSubmit = useCallback((peripheral: Peripheral) => {
    Peripheral.update(id, peripheral || ({} as Peripheral)).then((error) => {
      if (error) {
        alert(error);
      } else {
        history.goBack();
      }
    });
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
      <PeripheralForm peripheral={peripheral} handleSubmit={handleSubmit} />
    </React.Fragment>
  );
}

export default UpdatePeripheral;

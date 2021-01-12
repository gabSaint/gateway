import React from "react";
import { Formik, Field, Form } from "formik";
import Gateway from "../../models/gateway";

export interface Props {
  gateway: Gateway;
}

function GatewayForm(props: Props) {
  const initialValues = {
    id: props.gateway.id,
    serial: "",
    name: "",
    address: "",
  };

  const handlerSubmit = (gateway: Gateway) => {
    setTimeout(() => {
      alert(JSON.stringify(gateway, null, 2));
    }, 500);
  };

  return (
    <React.Fragment>
      <Formik initialValues={props.gateway} onSubmit={handlerSubmit}>
        <Form>
          <label htmlFor="input-serial">Serial Number</label>
          <Field id="input-serial" name="serial" />

          <label htmlFor="input-name">Last Name</label>
          <Field id="input-name" name="name" />

          <label htmlFor="input-address">IPv4 Address</label>
          <Field id="input-address" name="address" />

          <button type="submit">Submit</button>
          <button type="button">Cancel</button>
        </Form>
      </Formik>
    </React.Fragment>
  );
}

export default GatewayForm;

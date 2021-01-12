import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import Gateway from "../../models/gateway";

interface Props {
  gateway: Gateway;
}

function GatewayForm(props: Props) {
  const initialValues = { id: "", serial: "", name: "", address: "" };

  // const handlerSubmit = (gateway: Gateway) => {};

  return (
    <React.Fragment>
      <Formik initialValues={props.gateway} onSubmit={(g) => {}}>
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

import React from "react";
import { Formik, Field, Form, FormikState } from "formik";
import Gateway from "../../models/gateway";
import { Link } from "react-router-dom";

export interface Props {
  gateway: Gateway;
  handleSubmit(g: Gateway): void;
}

function GatewayForm(props: Props) {
  const { gateway, handleSubmit } = props;

  return (
    <Formik initialValues={gateway} onSubmit={handleSubmit} validate={validate}>
      {(formikProps) => <FormContent {...formikProps} />}
    </Formik>
  );
}

export function FormContent({ errors, touched, values }: FormikState<Gateway>) {
  return (
    <Form className="ui form">
      <div className="field">
        <label htmlFor="input-serial">Serial Number</label>
        <Field id="input-serial" name="serial" value={values.serial || ""} />
      </div>
      {errors.serial && touched.serial && (
        <div data-test="show-serial-error">{errors.serial}</div>
      )}

      <div className="field">
        <label htmlFor="input-name">Name</label>
        <Field id="input-name" name="name" value={values.name || ""} />
      </div>
      {errors.name && touched.name && (
        <div data-test="show-name-error">{errors.name}</div>
      )}

      <div className="field">
        <label htmlFor="input-address">IPv4 Address</label>
        <Field id="input-address" name="address" value={values.address || ""} />
      </div>
      {errors.address && touched.address && (
        <div data-test="show-address-error">{errors.address}</div>
      )}

      <button type="submit">Submit</button>

      <Link to="/">
        <button type="button">Cancel</button>
      </Link>
    </Form>
  );
}

export const validate = (values: Gateway) => {
  const errors: any = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.serial) {
    errors.serial = "Serial Number is requiered";
  }

  if (!values.address) {
    errors.address = "Address is required";
  } else if (
    !/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i.test(
      values.address
    )
  ) {
    errors.address = "Invalid IPv4 address format";
  }
  return errors;
};

export default GatewayForm;

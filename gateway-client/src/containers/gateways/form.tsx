import React from "react";
import { Formik, Field, Form, FormikProps, FormikState } from "formik";
import Gateway from "../../models/gateway";

export interface Props {
  gateway: Gateway;
  handleSubmit(g: Gateway): void;
}

function GatewayForm(props: Props) {
  const { gateway, handleSubmit } = props;

  return (
    <React.Fragment>
      <Formik
        initialValues={gateway}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {(formikProps) => <FormContent {...formikProps} />}
      </Formik>
    </React.Fragment>
  );
}

export function FormContent({ errors, touched }: FormikState<Gateway>) {
  return (
    <Form>
      <label htmlFor="input-serial">Serial Number</label>
      <Field id="input-serial" name="serial" />
      {errors.serial && touched.serial && (
        <div data-test="show-serial-error">{errors.serial}</div>
      )}

      <label htmlFor="input-name">Name</label>
      <Field id="input-name" name="name" />
      {errors.name && touched.name && (
        <div data-test="show-name-error">{errors.name}</div>
      )}

      <label htmlFor="input-address">IPv4 Address</label>
      <Field id="input-address" name="address" />
      {errors.address && touched.address && (
        <div data-test="show-address-error">{errors.address}</div>
      )}

      <button type="submit">Submit</button>

      <button type="button">Cancel</button>
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

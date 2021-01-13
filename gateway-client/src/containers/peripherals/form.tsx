import React from "react";
import { Formik, Field, Form, FormikState } from "formik";
import Peripheral from "models/peripheral";
import { Link } from "react-router-dom";

export interface Props {
  peripheral: Peripheral;
  handleSubmit(p: Peripheral): void;
}

function PeripheralForm(props: Props) {
  const { peripheral, handleSubmit } = props;

  return (
    <Formik
      initialValues={peripheral}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {(formikProps) => <FormContent {...formikProps} />}
    </Formik>
  );
}

export function FormContent({
  errors,
  touched,
  values,
}: FormikState<Peripheral>) {
  return (
    <Form>
      <label htmlFor="input-uid">UID</label>
      <Field id="input-uid" name="uid" value={values.uid || ""} />
      {errors.uid && touched.uid && (
        <div data-test="show-uid-error">{errors.uid}</div>
      )}

      <label htmlFor="input-vendor">Vendor</label>
      <Field id="input-vendor" name="vendor" value={values.vendor || ""} />
      {errors.vendor && touched.vendor && (
        <div data-test="show-vendor-error">{errors.vendor}</div>
      )}

      <label htmlFor="input-status">Status</label>
      <Field id="input-status" name="status" value={values.status || ""} />
      {errors.status && touched.status && (
        <div data-test="show-status-error">{errors.status}</div>
      )}

      <button type="submit" data-test="button-submit">
        Submit
      </button>

      <Link to={`/gateways/${values.gatewayId}`}>
        <button type="button" data-test="button-cancel">
          Cancel
        </button>
      </Link>
    </Form>
  );
}

export const validate = (values: Peripheral) => {
  const errors: any = {};

  if (!values.uid) {
    errors.uid = "Uid is required";
  }

  if (!values.vendor) {
    errors.vendor = "Vendor is requiered";
  }

  if (!values.status) {
    errors.status = "Status is required";
  }
  return errors;
};

export default PeripheralForm;

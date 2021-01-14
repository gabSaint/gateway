import React from "react";
import { Formik, Field, Form, FormikState } from "formik";
import Peripheral from "models/peripheral";
import { Link } from "react-router-dom";
import FormInput from "components/formInput";

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
  submitCount,
}: FormikState<Peripheral>) {
  return (
    <Form className="ui form">
      <FormInput
        name="uid"
        field="UID"
        error={errors.uid}
        touched={touched.uid}
        value={values.uid}
        submitCount={submitCount}
      />

      <FormInput
        name="vendor"
        field="Vendor"
        error={errors.vendor}
        touched={touched.vendor}
        value={values.vendor}
        submitCount={submitCount}
      />

      <FormInput
        name="status"
        field="Status"
        error={errors.status}
        touched={touched.status}
        value={values.status}
        submitCount={submitCount}
      />

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
    errors.uid = "UID is required";
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

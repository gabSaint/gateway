import React from "react";
import { Formik, Form, FormikState } from "formik";
import Peripheral from "models/peripheral";
import { Link } from "react-router-dom";
import FormInput from "components/formInput";
import FormRadio from "components/formradio";
import RadioInput from "components/radioInput";

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
        name="vendor"
        label="Vendor"
        error={errors.vendor}
        touched={touched.vendor}
        value={values.vendor}
        submitCount={submitCount}
      />

      <FormRadio label="Status">
        <RadioInput label="Online" value="online" name="status" />
        <RadioInput label="Offline" value="offline" name="status" />
      </FormRadio>

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

  if (!values.vendor) {
    errors.vendor = "Vendor is requiered";
  }

  if (!values.status) {
    errors.status = "Status is required";
  }
  return errors;
};

export default PeripheralForm;

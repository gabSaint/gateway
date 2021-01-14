import React from "react";
import { Formik, Field, Form, FormikState } from "formik";
import Gateway from "../../models/gateway";
import { Link } from "react-router-dom";
import FormInput from "components/formInput";

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

export function FormContent({
  errors,
  touched,
  values,
  submitCount,
}: FormikState<Gateway>) {
  return (
    <Form className="ui form">
      <FormInput
        name="serial"
        field="Serial Number"
        error={errors.serial}
        touched={touched.serial}
        value={values.serial}
        submitCount={submitCount}
      />

      <FormInput
        name="name"
        field="Name"
        error={errors.name}
        touched={touched.name}
        value={values.name}
        submitCount={submitCount}
      />

      <FormInput
        name="address"
        field="IPv4 Address"
        error={errors.address}
        touched={touched.address}
        value={values.address}
        submitCount={submitCount}
      />

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
    errors.serial = "Serial number is requiered";
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

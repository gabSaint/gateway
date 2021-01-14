import React from "react";
import classNames from "classnames";
import { Field, FormikErrors, FormikState } from "formik";

export interface Props {
  id: string;
  name: string;
  field: string;
  error: string | undefined;
  touched: boolean | undefined;
  value: any;
  submitCount: number;
}

function FormInput(props: Props) {
  const { id, error, touched, value, submitCount, field, name } = props;

  return (
    <React.Fragment>
      <div
        className={classNames("field", {
          error: error && (touched || submitCount),
        })}
      >
        <label htmlFor={id}>{field}</label>
        <Field id={id} name={name} value={value || ""} />
      </div>
      {error && (touched || submitCount) && (
        <div data-test={"show" + name + "error"} className="error-message">
          {error} *
        </div>
      )}
    </React.Fragment>
  );
}

export default FormInput;

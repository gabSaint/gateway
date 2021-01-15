import React from "react";
import classNames from "classnames";
import { Field } from "formik";

export interface Props {
  name: string;
  label: string;
  error: string | undefined;
  touched: boolean | undefined;
  value: any;
  submitCount: number;
}

function FormInput(props: Props) {
  const { error, touched, value, submitCount, label, name } = props;

  return (
    <React.Fragment>
      <div
        className={classNames("field", {
          error: error && (touched || submitCount > 0),
        })}
      >
        <label htmlFor={"input-" + name}>{label}</label>
        <Field id={"input-" + name} name={name} value={value || ""} />
        {/* <Field id={"input-" + name} name={name} /> */}
      </div>
      {error && (touched || submitCount > 0) && (
        <div data-test={"show" + name + "error"} className="error-message">
          {error} *
        </div>
      )}
    </React.Fragment>
  );
}

export default FormInput;

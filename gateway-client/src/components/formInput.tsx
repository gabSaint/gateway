import React from "react";
import classNames from "classnames";
import { Field, FormikErrors, FormikState } from "formik";

export interface Props {
  name: string;
  field: string;
  error: string | undefined;
  touched: boolean | undefined;
  value: any;
  submitCount: number;
  type?: string;
}

function FormInput(props: Props) {
  const { error, touched, value, submitCount, field, name, type } = props;

  return (
    <React.Fragment>
      <div
        className={classNames("field", {
          error: error && (touched || submitCount > 0),
        })}
      >
        {type ? (
          <div className="ui checkbox">
            <Field
              id={"input-" + name}
              name={name}
              value={value || ""}
              type="checkbox"
              tabindex="0"
              className="hidden"
            />
            <b>
              <label htmlFor={"input-" + name}>{field}</label>
            </b>
          </div>
        ) : (
          <>
            <label htmlFor={"input-" + name}>{field}</label>
            <Field id={"input-" + name} name={name} value={value || ""} />
          </>
        )}
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

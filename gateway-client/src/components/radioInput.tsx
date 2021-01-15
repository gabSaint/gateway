import React from "react";
import { Field } from "formik";

export interface Props {
  name: string;
  value: string;
  label: string;
}

function RadioInput(props: Props) {
  const { name, value, label } = props;

  return (
    <div className="field">
      <div className="ui radio checkbox">
        <Field
          type="radio"
          name={name}
          value={value}
          tabIndex="0"
          className="radio-item"
        />
        <label>{label}</label>
      </div>
    </div>
  );
}

export default RadioInput;

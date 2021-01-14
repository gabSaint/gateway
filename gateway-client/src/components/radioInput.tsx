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
      <div className="ui radio align">
        <Field
          type="radio"
          name={name}
          value={value}
          tabindex="0"
          className="radio-item"
        />
        <label>{label}</label>
      </div>
    </div>
  );
}

export default RadioInput;

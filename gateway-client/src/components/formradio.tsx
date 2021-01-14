import React, { FunctionComponent } from "react";

export interface Props {
  label: string;
}

const FormRadio: FunctionComponent<Props> = (props) => {
  const { label, children } = props;

  return (
    <div className="inline fields" role="group">
      <label>{label}</label>
      {children}
    </div>
  );
};

export default FormRadio;

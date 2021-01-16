import React, { FunctionComponent } from "react";
import classNames from "classnames";

export interface Props {
  error: string;
}

const Message: FunctionComponent<Props> = (props) => {
  const { error } = props;

  const header = error ? "Request went wrong!" : "Request succeded!";
  const status = error ? "negative" : "positive";
  const icon = error ? "cancel" : "check";

  return (
    <div className={classNames("ui message", status)}>
      <i className={classNames(icon, "icon")}></i>
      <div className="header">{header}</div>
      <p>{error}</p>
    </div>
  );
};

export default Message;

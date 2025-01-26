import { FC } from "react";
import { ErrorMessageProps } from "../../types/type.form.ts";

const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  if (!error) return null;

  return <p className="input-error">This field is required!</p>;
};

export default ErrorMessage;

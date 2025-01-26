import { ChangeEvent, JSX } from "react";

export interface InputProps {
  type: string;
  label: string;
  htmlFor: string;
  value: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (value: ChangeEvent<HTMLInputElement>) => void;
  errorMessage: JSX.Element;
}

export interface ErrorMessageProps {
  error: boolean;
}

export interface IValidations {
  isEmpty: boolean;
}

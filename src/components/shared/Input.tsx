import { ChangeEvent, JSX } from "react";

interface Props {
  type: string;
  label: string;
  htmlFor: string;
  value: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (value: ChangeEvent<HTMLInputElement>) => void;
  errorMessage: JSX.Element;
}

const Input = ({
  type,
  label,
  htmlFor,
  value,
  onChange,
  onBlur,
  errorMessage,
}: Props) => {
  return (
    <div className="input-container">
      <label htmlFor={htmlFor}>{label}</label>

      <input
        id={htmlFor}
        type={type}
        name={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      {errorMessage}
    </div>
  );
};

export default Input;

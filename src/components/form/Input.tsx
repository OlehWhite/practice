import { FC } from "react";
import { InputProps } from "../../types/type.form.ts";

const Input: FC<InputProps> = ({
  type,
  label,
  htmlFor,
  value,
  onChange,
  onBlur,
  errorMessage,
}) => {
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

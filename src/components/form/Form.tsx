import { FC, FormEvent } from "react";
import Input from "./Input.tsx";
import useInput from "../../hooks/useInput.ts";
import ErrorMessage from "./ErrorMessage.tsx";
import "../../styles/form.css";

const Form: FC = () => {
  const email = useInput("", { isEmpty: true });
  const password = useInput("", { isEmpty: true });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ email: email.value, password: password.value });
  };

  return (
    <form
      className="form-container"
      action=""
      method="POS"
      onSubmit={handleSubmit}
    >
      <Input
        type="email"
        label="Email"
        htmlFor="email"
        value={email.value}
        onChange={email.onChange}
        onBlur={email.onBlur}
        errorMessage={<ErrorMessage error={email.isDirty && email.isEmpty} />}
      />

      <Input
        type="password"
        label="Password"
        htmlFor="password"
        value={password.value}
        onChange={password.onChange}
        onBlur={password.onBlur}
        errorMessage={
          <ErrorMessage error={password.isDirty && password.isEmpty} />
        }
      />

      <button
        className="button-submit"
        type="submit"
        disabled={email.isEmpty || password.isEmpty}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

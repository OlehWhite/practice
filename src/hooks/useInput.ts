import { ChangeEvent, useState } from "react";
import useValidation from "./useValidation.ts";

const useInput = (initialValue: string, validations: { isEmpty: boolean }) => {
  const [value, setValue] = useState<string>(initialValue);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const { isEmpty } = useValidation(value, validations); // or valid

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = (_: ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true);
  };

  return { value, isDirty, onChange, onBlur, isEmpty }; // isEmpty replace on the ...valid
};

export default useInput;

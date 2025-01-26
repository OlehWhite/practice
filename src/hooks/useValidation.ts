import { useEffect, useState } from "react";
import { IValidations } from "../types/type.form.ts";

const useValidation = (value: string, validations: IValidations) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          setIsEmpty(!value);
          break;
      }
    }
  }, [value]);

  return { isEmpty };
};

export default useValidation;

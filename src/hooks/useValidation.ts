import { useEffect, useState } from "react";

const useValidation = (value: string, validations: { isEmpty: boolean }) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
      }
    }
  }, [value]);

  return { isEmpty };
};

export default useValidation;

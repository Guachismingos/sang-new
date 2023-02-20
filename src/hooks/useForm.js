import { useState } from "react";

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const inputChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const resetValues = (name, value) => {
    setValues({ ...initialState, [name]: value });
  };

  return [values, handleInputChange, inputChange, resetValues, setValues];
};

export default useForm;

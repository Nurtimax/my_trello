import React from "react";
import { InputStyled } from "../../../assets/Global";

const Input = (props) => {
  return (
    <>
      <label htmlFor={props.label}>
        {props.label}
        <InputStyled type="text" {...props} />
      </label>
    </>
  );
};

export default Input;

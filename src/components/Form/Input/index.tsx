import { IInput } from "./models";
import { MainInputWrapper } from './styles'
import React from "react";

const Input = React.forwardRef(function Input(props: IInput, ref: any) {
  const { id, name, placeholder, type } = props;

  return (
    <MainInputWrapper
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
      ref={ref}
    />
  );
});

export default Input;

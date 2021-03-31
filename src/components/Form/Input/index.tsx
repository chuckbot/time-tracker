import React from "react";
import { IInput } from "./input-model";

const Input = React.forwardRef(function Input(props: IInput, ref: any) {
  const { id, name, placeholder, type } = props;

  return (
    <div>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        ref={ref}
      />
    </div>
  );
});

export default Input;

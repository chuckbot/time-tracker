import { ITextarea } from "./models";
import { MainTextareaWrapper } from './styles'
import React from "react";

const Textarea = React.forwardRef(function Textarea(
  props: ITextarea,
  ref: any
) {
  const { id, name, placeholder, rows } = props;

  return (
    <MainTextareaWrapper
      name={name}
      id={id}
      rows={rows}
      placeholder={placeholder}
      ref={ref}
    />
  );
});

export default Textarea;

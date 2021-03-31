import React from "react";
import { ITextarea } from "./textarea-model";

const Textarea = React.forwardRef(function Textarea(
  props: ITextarea,
  ref: any
) {
  const { id, name, placeholder, rows } = props;

  return (
    <div>
      <textarea
        name={name}
        id={id}
        rows={rows}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
});

export default Textarea;

import { memo } from "react";
import { InputAdornmentProps } from "./InputAdornment.types";
import { inputAdornmentStyles } from "./InputAdornment.styles";

const InputAdornment = ({
  position,
  adornment,
  className,
}: InputAdornmentProps) => {
  return (
    <div className={`${inputAdornmentStyles({ position }, className)}`}>
      {adornment}
    </div>
  );
};

export default memo(InputAdornment);

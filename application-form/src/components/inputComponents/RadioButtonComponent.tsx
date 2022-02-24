import { Radio } from "@mui/material";
import { FC } from "react";
import { radiobutton_component_props_types } from "../../constants/interfaces";

export const RadioButtonComponent: FC<radiobutton_component_props_types> = ({
  checked,
  checkedIcon,
  classes,
  color,
  disabled,
  disableRipple,
  icon,
  id,
  inputProps,
  inputRef,
  onChange,
  required,
  size,
  sx,
  value,
  name,
}) => {
  return (
    <Radio
      checked={checked}
      checkedIcon={checkedIcon}
      classes={classes}
      color={color}
      disabled={disabled}
      disableRipple={disableRipple}
      icon={icon}
      id={id}
      inputProps={inputProps}
      inputRef={inputRef}
      onChange={onChange}
      required={required}
      size={size}
      sx={sx}
      value={value}
      name={name}
    />
  );
};

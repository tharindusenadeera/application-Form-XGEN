import { FC } from "react";
import { Checkbox } from "@mui/material";
import { checkbox_component_props_types } from "../../constants/interfaces";

export const ChechBoxComponent: FC<checkbox_component_props_types> = ({
  checked,
  checkedIcon,
  classes,
  color,
  defaultChecked,
  disabled,
  disableRipple,
  icon,
  id,
  indeterminate,
  indeterminateIcon,
  inputProps,
  inputRef,
  onChange,
  required,
  size,
  sx,
  value,
}) => {
  return (
    <Checkbox
      checked={checked}
      classes={classes}
      color={color}
      defaultChecked={defaultChecked}
      icon={icon}
      checkedIcon={checkedIcon}
      disabled={disabled}
      id={id}
      indeterminate={indeterminate}
      indeterminateIcon={indeterminateIcon}
      inputProps={inputProps}
      inputRef={inputRef}
      onChange={onChange}
      required={required}
      size={size}
      sx={sx}
      value={value}
      disableRipple={disableRipple}
    />
  );
};

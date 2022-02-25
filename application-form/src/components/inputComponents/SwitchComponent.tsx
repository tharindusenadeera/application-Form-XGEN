import { FC } from "react";
import { Switch } from "@mui/material";
import { switchcomponent_component_props_types } from "../../constants/interfaces";

export const SwitchComponent: FC<switchcomponent_component_props_types> = ({
  checked,
  checkedIcon,
  classes,
  color,
  defaultChecked,
  disabled,
  disableRipple,
  edge,
  icon,
  id,
  inputProps,
  inputRef,
  onChange,
  required,
  size,
  sx,
  value,
}) => {
  return (
    <>
      <Switch
        checked={checked}
        // checkedIcon={checkedIcon}
        classes={classes}
        color={color}
        defaultChecked={defaultChecked}
        disabled={disabled}
        disableRipple={disableRipple}
        edge={edge}
        // icon={icon}
        id={id}
        inputProps={inputProps}
        inputRef={inputRef}
        onChange={onChange}
        required={required}
        size={size}
        sx={sx}
        value={value}
      />
    </>
  );
};

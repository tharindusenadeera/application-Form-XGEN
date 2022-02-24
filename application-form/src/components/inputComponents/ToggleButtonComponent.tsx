import { FC } from "react";
import { ToggleButton } from "@mui/material";
import { ToggleButtonComponent_component_props_types } from "../../constants/interfaces";

export const ToggleButtonComponent: FC<
  ToggleButtonComponent_component_props_types
> = ({
  value,
  children,
  classes,
  color,
  disabled,
  disableFocusRipple,
  fullWidth,
  onChange,
  onClick,
  selected,
  size,
  sx,
}) => {
  return (
    <>
      <ToggleButton
        value={value}
        children={children}
        classes={classes}
        color="primary"
        disabled={disabled}
        disableFocusRipple={disableFocusRipple}
        fullWidth={fullWidth}
        onChange={onChange}
        onClick={onClick}
        selected={selected}
        size={size}
        sx={sx}
      />
    </>
  );
};

import { FormControl } from "@mui/material";
import { FC } from "react";
import { formcontrol_component_props_types } from "../../constants/interfaces";

export const FormControlComponent: FC<formcontrol_component_props_types> = ({
  children,
  classes,
  color,
  component,
  disabled,
  error,
  fullWidth,
  hiddenLabel,
  margin,
  sx,
  variant,
  props,
  focused,
}) => {
  return (
    <FormControl
      classes={classes}
      color={color}
      component={component}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      focused={focused}
      hiddenLabel={hiddenLabel}
      sx={sx}
      margin={margin}
      variant={variant}
    >
      {children}
    </FormControl>
  );
};

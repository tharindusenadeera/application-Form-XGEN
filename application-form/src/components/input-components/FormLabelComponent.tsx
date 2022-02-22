import { FormLabel } from "@mui/material";
import { FC } from "react";
import { formlabel_component_props_types } from "../../constants/interfaces";

export const FormLabelComponent: FC<formlabel_component_props_types> = ({
  children,
  classes,
  color,
  component,
  disabled,
  error,
  filled,
  focused,
  required,
  sx,
  id,
}) => {
  return (
    <FormLabel
      id={id}
      children={children}
      classes={classes}
      color={color}
      component={component}
      disabled={disabled}
      error={error}
      filled={filled}
      focused={focused}
      required={required}
      sx={sx}
    />
  );
};

import { FormControlLabel } from "@material-ui/core";
import { FC } from "react";
import { formcontrollabel_component_props_types } from "../../constants/interfaces";

export const FormControlLabelComponent: FC<
  formcontrollabel_component_props_types
> = ({
  control,
  checked,
  value,
  classes,
  componentsProps,
  disabled,
  disableTypography,
  inputRef,
  labelPlacement,
  onChange,
  sx,
  label,
}) => {
  return (
    <FormControlLabel
      label={label}
      value={value}
      control={control}
      checked={checked}
      classes={classes}
      // componentsProps={componentsProps}
      disabled={disabled}
      // disableTypography={disableTypography}
      inputRef={inputRef}
      labelPlacement={labelPlacement}
      onChange={onChange}
      // sx={sx}
    />
  );
};

import { FC } from "react";
import { ToggleButtonGroup } from "@mui/material";
import { ToggleButtonGroupComponent_component_props_types } from "../../constants/interfaces";

export const ToggleButtonGroupComponent: FC<
  ToggleButtonGroupComponent_component_props_types
> = ({
  children,
  classes,
  color,
  disabled,
  exclusive,
  onChange,
  orientation,
  size,
  sx,
  value,
}) => {
  return (
    <>
      <ToggleButtonGroup
        children={children}
        classes={classes}
        color={color}
        disabled={disabled}
        exclusive={exclusive}
        onChange={onChange}
        orientation={orientation}
        size={size}
        sx={sx}
        value={value}
      />
    </>
  );
};

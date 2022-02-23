import { CircularProgress } from "@material-ui/core";
import { LinearProgress } from "@mui/material";
import { FC } from "react";
import {
  circularProgressComponent_component_props_types,
  linearProgressComponent_component_props_types,
} from "../../constants/interfaces";

export const CircularProgressComponent: FC<
  circularProgressComponent_component_props_types
> = ({
  classes,
  color,
  disableShrink,
  size,
  sx,
  thickness,
  value,
  variant,
}: any) => {
  return (
    <CircularProgress
      classes={classes}
      color={color}
      disableShrink={disableShrink}
      size={size}
      // sx={sx}
      thickness={thickness}
      value={value}
      variant={variant}
    />
  );
};

export const LinearProgressComponent: FC<
  linearProgressComponent_component_props_types
> = ({ classes, color, sx, value, valueBuffer, variant }: any) => {
  return (
    <LinearProgress
      classes={classes}
      color={color}
      sx={sx}
      value={value}
      valueBuffer={valueBuffer}
      variant={variant}
    />
  );
};

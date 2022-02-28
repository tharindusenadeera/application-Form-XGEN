import { Skeleton } from "@mui/material";
import { FC } from "react";
import { skeleton_component_props_types } from "../../constants/interfaces";

export const SkeletonComponent: FC<skeleton_component_props_types> = ({
  animation,
  children,
  classes,
  component,
  height,
  sx,
  variant,
  width,
  className,
}) => {
  return (
    <Skeleton
      children={children}
      animation={animation}
      classes={classes}
      component={component}
      height={height}
      sx={sx}
      variant={variant}
      width={width}
      className={className}
    />
  );
};

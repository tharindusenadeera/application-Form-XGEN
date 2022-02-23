import { FC } from "react";
import { Avatar } from "@mui/material";
import { avatar_component_props_types } from "../../constants/interfaces";

export const AvatarComponent: FC<avatar_component_props_types> = ({
  alt,
  children,
  classes,
  component,
  imgProps,
  sizes,
  srcSet,
  sx,
  src,
  variant,
}) => {
  return (
    <>
      <Avatar
        alt={alt}
        children={children}
        classes={classes}
        component={component}
        imgProps={imgProps}
        sizes={sizes}
        srcSet={srcSet}
        sx={sx}
        variant={variant}
        src={src}
      />
    </>
  );
};

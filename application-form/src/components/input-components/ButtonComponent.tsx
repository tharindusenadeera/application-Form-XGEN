import { FC } from "react";

import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  button_Component_prpos_types,
  button_component_attributes_types,
} from "../../constants/interfaces";
import { IconButton } from "@mui/material";

export const ButtonComponent: FC<button_Component_prpos_types> = ({
  loadingbtn,
  iconbtn,
  attributes,
}) => {
  if (loadingbtn == true) return <LoadingBtn attributes={attributes} />;
  if (iconbtn == true) return <IconBtn attributes={attributes} />;
  return <BasicBtn attributes={attributes} />;
};

const BasicBtn: FC<button_component_attributes_types> = ({ attributes }) => {
  console.log(attributes);
  return (
    <>
      <Button
        style={attributes.styles}
        onClick={attributes.onClick}
        color={attributes.color}
        disabled={attributes.disabled}
        endIcon={attributes.endIcon}
        fullWidth={attributes.fullWidth}
        href={attributes.href}
        size={attributes.size}
        startIcon={attributes.startIcon}
        variant={attributes.variant}
        // textSizeSmall={attributes.textSizeSmall}
        // textSizeMedium={attributes.textSizeMedium}
        // textSizeLarge={attributes.textSizeLarge}
        // iconSizeSmall={attributes.iconSizeSmall}
        // iconSizeMedium={attributes.iconSizeMedium}
        // iconSizeLarge={attributes.iconSizeLarge}
      >
        {attributes.title}
      </Button>
    </>
  );
};

const LoadingBtn: FC<button_component_attributes_types> = ({ attributes }) => {
  return (
    <>
      <LoadingButton
        loading
        style={attributes.styles}
        onClick={attributes.onClick}
      />
    </>
  );
};

const IconBtn: FC<button_component_attributes_types> = ({ attributes }) => {
  return (
    <>
      <IconButton>{attributes.children}</IconButton>
    </>
  );
};

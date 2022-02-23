import { FC } from "react";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import { button_Component_prpos_types } from "../../constants/interfaces";
import { IconButton } from "@mui/material";

//-- Button Selector Function --
export const ButtonComponent: FC<button_Component_prpos_types> = ({
  loadingbtn,
  iconbtn,
  edge,
  disableRipple,
  disableFocusRipple,
  style,
  children,
  classes,
  onClick,
  color,
  disabled,
  endIcon,
  fullWidth,
  href,
  size,
  startIcon,
  variant,
  title,
  autoFocus,
  loading,
  sx,
}) => {
  if (iconbtn == true)
    return (
      <IconBtn
        color={color}
        classes={classes}
        children={children}
        disabled={disabled}
        disableRipple={disableRipple}
        disableFocusRipple={disableFocusRipple}
        size={size}
        edge={edge}
        sx={sx}
        autoFocus={autoFocus}
        onClick={onClick}
      />
    ); // WHEN REQUIRE ICON BUTTON
  if (loadingbtn == true)
    // WHEN REQUIRE LOADING BUTTON
    return (
      <LoadingBtn
        loading={loading}
        style={style}
        onClick={onClick}
        color={color}
        disabled={disabled}
        endIcon={endIcon}
        fullWidth={fullWidth}
        href={href}
        size={size}
        startIcon={startIcon}
        variant={variant}
        title={title}
        autoFocus={autoFocus}
      />
    );

  // WHEN REQUIRE BASIC BUTTON ( Default option )
  return (
    <BasicBtn
      style={style}
      onClick={onClick}
      color={color}
      disabled={disabled}
      endIcon={endIcon}
      fullWidth={fullWidth}
      href={href}
      size={size}
      startIcon={startIcon}
      variant={variant}
      title={title}
      autoFocus={autoFocus}
    />
  );
};

//BASIC BUTTON
const BasicBtn: FC<button_Component_prpos_types> = ({
  style,
  onClick,
  color,
  disabled,
  endIcon,
  fullWidth,
  href,
  size,
  startIcon,
  variant,
  title,
  autoFocus,
}) => {
  return (
    <>
      <Button
        style={style}
        onClick={onClick}
        color={color}
        disabled={disabled}
        endIcon={endIcon}
        fullWidth={fullWidth}
        href={href}
        size={size}
        startIcon={startIcon}
        variant={variant}
        autoFocus={autoFocus}
      >
        {title}
      </Button>
    </>
  );
};

//LOADING BUTTON
const LoadingBtn: FC<button_Component_prpos_types> = ({
  style,
  onClick,
  color,
  disabled,
  endIcon,
  fullWidth,
  href,
  size,
  startIcon,
  variant,
  autoFocus,
  loading,
}) => {
  return (
    <>
      <LoadingButton
        style={style}
        onClick={onClick}
        color={color}
        disabled={disabled}
        endIcon={endIcon}
        fullWidth={fullWidth}
        href={href}
        size={size}
        startIcon={startIcon}
        variant={variant}
        autoFocus={autoFocus}
        loading={loading}
      />
    </>
  );
};

//ICON BUTTON
const IconBtn: FC<button_Component_prpos_types> = ({
  classes,
  color,
  disabled,
  disableFocusRipple,
  disableRipple,
  edge,
  size,
  onClick,
  sx,
  autoFocus,
  children,
}) => {
  return (
    <IconButton
      color={color}
      classes={classes}
      disabled={disabled}
      disableRipple={disableRipple}
      disableFocusRipple={disableFocusRipple}
      size={size}
      edge={edge}
      sx={sx}
      autoFocus={autoFocus}
      onClick={onClick}
    >
      {children}
    </IconButton>
  );
};

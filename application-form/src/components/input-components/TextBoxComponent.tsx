import { FC } from "react";
import { TextField } from "@material-ui/core";
import { textbox_component_props_types } from "../../constants/interfaces";

export const TextBoxComponent: FC<textbox_component_props_types> = ({
  autoComplete,
  autoFocus,
  classes,
  color,
  defaultValue,
  disabled,
  error,
  FormHelperTextProps,
  fullWidth,
  helperText,
  id,
  inputProps,
  InputProps,
  inputRef,
  label,
  margin,
  maxRows,
  minRows,
  multiline,
  name,
  onChange,
  placeholder,
  required,
  rows,
  select,
  SelectProps,
  Select,
  size,
  type,
  value,
  variant,
  style,
  //   xs?:an
}) => {
  return (
    <TextField
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      classes={classes}
      color={color}
      defaultValue={defaultValue}
      disabled={disabled}
      error={error}
      FormHelperTextProps={FormHelperTextProps}
      fullWidth={fullWidth}
      helperText={helperText}
      id={id}
      inputProps={inputProps}
      InputProps={InputProps}
      inputRef={inputRef}
      label={label}
      margin={margin}
      maxRows={maxRows}
      minRows={minRows}
      multiline={multiline}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={rows}
      select={select}
      SelectProps={SelectProps}
      size={size}
      type={type}
      value={value}
      variant={variant}
      style={style}
    />
  );
};

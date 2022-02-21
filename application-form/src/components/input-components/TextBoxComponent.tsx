import { FC } from "react";
import { TextField } from "@material-ui/core";
import { textbox_component_props_types } from "../../constants/interfaces";

export const TextBoxComponent: FC<textbox_component_props_types> = ({
  attributes,
}) => {
  return (
    <TextField
      autoComplete={attributes.autoComplete}
      autoFocus={attributes.autoFocus}
      classes={attributes.classes}
      color={attributes.color}
      defaultValue={attributes.defaultValue}
      disabled={attributes.disabled}
      error={attributes.error}
      FormHelperTextProps={attributes.FormHelperTextProps}
      fullWidth={attributes.fullWidth}
      helperText={attributes.helperText}
      id={attributes.id}
      inputProps={attributes.inputProps}
      InputProps={attributes.InputProps}
      inputRef={attributes.inputRef}
      label={attributes.label}
      margin={attributes.margin}
      maxRows={attributes.maxRows}
      minRows={attributes.minRows}
      multiline={attributes.multiline}
      name={attributes.name}
      onChange={attributes.onChange}
      placeholder={attributes.placeholder}
      required={attributes.required}
      rows={attributes.rows}
      select={attributes.select}
      SelectProps={attributes.SelectProps}
      size={attributes.size}
      // sx={attributes.sx}
      type={attributes.type}
      value={attributes.value}
      variant={attributes.variant}
      style={attributes.styles}
    />
  );
};

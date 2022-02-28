import { FC } from "react";
import { Select, MenuItem } from "@material-ui/core";
import {
  MenuItem_component_props_types,
  select_component_props_types,
} from "../../constants/interfaces";
import { FormControl, InputLabel } from "@mui/material";
import { FormControlComponent } from "./FormControlComponent";

export const SelectComponent: FC<select_component_props_types> = ({
  autoWidth,
  children,
  classes,
  error,
  defaultOpen,
  defaultValue,
  displayEmpty,
  IconComponent,
  id,
  input,
  inputProps,
  label,
  labelId,
  MenuProps,
  multiple,
  native,
  onChange,
  onClose,
  onOpen,
  open,
  renderValue,
  SelectDisplayProps,
  sx,
  value,
  variant,
  values,
  className,
}: any) => {
  return (
    <FormControlComponent>
      <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        autoWidth={autoWidth}
        // children={children}
        classes={classes}
        error={error}
        // defaultOpen={defaultOpen}
        defaultValue={defaultValue}
        displayEmpty={displayEmpty}
        IconComponent={IconComponent}
        // id={id}
        input={input}
        inputProps={inputProps}
        label={label}
        MenuProps={MenuProps}
        multiple={multiple}
        native={native}
        onChange={onChange}
        onClose={onClose}
        onOpen={onOpen}
        open={open}
        renderValue={renderValue}
        SelectDisplayProps={SelectDisplayProps}
        style={sx}
        value={value}
        variant={variant}
        className={className}
      >
        {values.map((item: any) => (
          <MenuItem value={item.value}>{item.name}</MenuItem>
        ))}
      </Select>
    </FormControlComponent>
  );
};

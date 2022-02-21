import { FC } from "react";
import { Select, MenuItem } from "@material-ui/core";
import {
  MenuItem_component_props_types,
  select_component_props_types,
} from "../../constants/interfaces";
import { FormControl, InputLabel } from "@mui/material";

export const SelectComponents: FC<select_component_props_types> = ({
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
}: any) => {
  return (
    <FormControl sx={sx}>
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select variant={variant} error={error}>
        <MenuItemGenerator values={values} />
      </Select>
    </FormControl>
  );
};

const MenuItemGenerator: FC<MenuItem_component_props_types> = ({
  values,
}: any) => {
  if (values.length > 0) {
    return values.map((item: any) => (
      <MenuItem value={item.value}>{item.name}</MenuItem>
    ));
  }
};

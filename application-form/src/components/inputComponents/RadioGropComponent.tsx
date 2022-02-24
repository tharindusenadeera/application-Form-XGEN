import { FC } from "react";
import { RadioGroup } from "@mui/material";
import { radiogroup_component_props_types } from "../../constants/interfaces";

export const RadioGropComponent: FC<radiogroup_component_props_types> = ({
  children,
  defaultValue,
  name,
  onChange,
  value,
}) => {
  return (
    <RadioGroup
      defaultValue={defaultValue}
      name={name}
      onChange={onChange}
      value={value}
    >
      {children}
    </RadioGroup>
  );
};

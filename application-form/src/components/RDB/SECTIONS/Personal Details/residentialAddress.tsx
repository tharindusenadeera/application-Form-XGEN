import { FormLabel } from "@mui/material";
import { FC } from "react";
import { personalDetails_address_component_props_types } from "../../../../constants/interfaces";
import { FormControlComponent } from "../../../inputComponents/FormControlComponent";
import { FormLabelComponent } from "../../../inputComponents/FormLabelComponent";
import { TextBoxComponent } from "../../../inputComponents/TextBoxComponent";

export const ResidentialAddress: FC<
  personalDetails_address_component_props_types
> = ({ value, onChange }) => {
  return (
    <>
      <FormControlComponent>
        {/* //Initials */}
        <FormLabel>Residential Address</FormLabel>
        <FormLabelComponent
          children={
            <TextBoxComponent
              variant="outlined"
              placeholder="Residential Address"
              value={value}
              onChange={(e: any) => onChange(e.target.value)}
            />
          }
        />
      </FormControlComponent>
    </>
  );
};

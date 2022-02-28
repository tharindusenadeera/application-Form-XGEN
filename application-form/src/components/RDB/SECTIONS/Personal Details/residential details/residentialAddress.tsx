import { FormLabel, Stack } from "@mui/material";
import { FC } from "react";
import { personalDetails_address_component_props_types } from "../../../../../constants/interfaces";
import { basicSelect } from "../../../../../styles";
import { FormControlComponent } from "../../../../inputComponents/FormControlComponent";
import { FormLabelComponent } from "../../../../inputComponents/FormLabelComponent";
import { SelectComponent } from "../../../../inputComponents/SelectComponents";

import { TextBoxComponent } from "../../../../inputComponents/TextBoxComponent";

export const ResidentialAddress: FC<
  personalDetails_address_component_props_types
> = ({ address, setAddress }) => {
  return (
    <Stack direction="row" spacing={2}>
      <FormControlComponent>
        {/* //residential address */}
        <FormLabel>Residential Address</FormLabel>
        <FormLabelComponent
          children={
            <TextBoxComponent
              variant="outlined"
              placeholder="Residential Address"
              value={address}
              onChange={(e: any) => setAddress(e.target.value)}
            />
          }
        />
      </FormControlComponent>

      {/* //province */}
      <FormControlComponent>
        <FormLabel>Province</FormLabel>
        <SelectComponent
          label="Province"
          values={[
            { id: 0, name: "Kandy" },
            { id: 0, name: "Colombo" },
          ]}
          variant="outlined"
          sx={basicSelect}
        />
      </FormControlComponent>
    </Stack>
  );
};

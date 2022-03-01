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
> = ({ address, setAddress, province, setProvince }) => {
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
          label={province}
          values={[
            { value: "Kandy", name: "Kandy" },
            { value: "Colombo", name: "Colombo" },
          ]}
          variant="outlined"
          sx={basicSelect}
          value={province}
          onChange={(e: any) => setProvince(e.target.value)}
        />
      </FormControlComponent>
    </Stack>
  );
};

import { FormLabel, Stack } from "@mui/material";
import { FC } from "react";
import { personalDetails_name_component_props_types } from "../../../../constants/interfaces";
import { FormControlComponent } from "../../../inputComponents/FormControlComponent";

import { FormControlLabelComponent } from "../../../inputComponents/FormControlLabelComponent";
import { FormLabelComponent } from "../../../inputComponents/FormLabelComponent";
import { TextBoxComponent } from "../../../inputComponents/TextBoxComponent";

export const Name: FC<personalDetails_name_component_props_types> = ({
  initialsInFull,
  lastName,
  initials,
  others,
  setInitialsInFull,
  setlastName,
  setInitials,
  setOthers,
}) => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <FormControlComponent>
          {/* //Initials */}
          <FormLabel>Initials In Full</FormLabel>
          <FormLabelComponent
            children={
              <TextBoxComponent
                variant="outlined"
                placeholder="Initials In Full"
                value={initialsInFull}
                onChange={(e: any) => initialsInFull(e.target.value)}
              />
            }
          />
        </FormControlComponent>

        {/* //Last Name */}
        <FormControlComponent>
          <FormLabel>Last Name</FormLabel>
          <FormLabelComponent
            children={
              <TextBoxComponent
                variant="outlined"
                placeholder="Last Name"
                value={lastName}
                onChange={(e: any) => setlastName(e.target.value)}
              />
            }
          />
        </FormControlComponent>

        {/* //Initials */}
        <FormControlComponent>
          <FormLabel>Initials</FormLabel>
          <FormLabelComponent
            children={
              <TextBoxComponent
                variant="outlined"
                placeholder="Initials"
                value={lastName}
                onChange={(e: any) => setInitials(e.target.value)}
              />
            }
          />
        </FormControlComponent>

        {/* //Others*/}
        <FormControlComponent>
          <FormLabel>Other</FormLabel>
          <FormLabelComponent
            children={
              <TextBoxComponent
                variant="outlined"
                placeholder="Other Name"
                value={others}
                onChange={(e: any) => setOthers(e.target.value)}
              />
            }
          />
        </FormControlComponent>
      </Stack>
    </>
  );
};

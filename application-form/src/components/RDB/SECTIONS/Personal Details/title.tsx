import { Stack } from "@mui/material";
import { FC } from "react";
import { personalDetails_title_component_props_types } from "../../../../constants/interfaces";
import { FormLabelComponent } from "../../../inputComponents/FormLabelComponent";
import { ToggleButtonComponent } from "../../../inputComponents/ToggleButtonComponent";
import { ToggleButtonGroupComponent } from "../../../inputComponents/ToggleButtonGroupComponent";

import { primaryBtn } from "../../../../styles";

export const Title: FC<personalDetails_title_component_props_types> = ({
  value,
  onChange,
}) => {
  return (
    <>
      {/* //Title */}
      <FormLabelComponent>Title</FormLabelComponent>

      {/* //Button set */}
      <Stack direction="row" spacing={2}>
        <ToggleButtonGroupComponent
          value={value}
          onChange={(e: any) =>
            value != e.target.value && onChange(e.target.value)
          }
        >
          <ToggleButtonComponent children="Mr" value="Mr" />
          <ToggleButtonComponent children="Mrs" value="Mrs" />
          <ToggleButtonComponent children="Miss" value="Miss" />
          <ToggleButtonComponent children="Rev" value="Rev" />
          <ToggleButtonComponent children="Other" value="Other" />
        </ToggleButtonGroupComponent>
      </Stack>
    </>
  );
};

import { Paper, Stack } from "@mui/material";
import { FC } from "react";
import { socialContact_component_props_types } from "../../../../../constants/interfaces";
import { TextBoxComponent } from "../../../../inputComponents/TextBoxComponent";
import { FormControlComponent } from "../../../../inputComponents/FormControlComponent";
import { FormLabelComponent } from "../../../../inputComponents/FormLabelComponent";
import { Box } from "@mui/system";

export const SocialContact: FC<socialContact_component_props_types> = ({
  email,
  setEmail,
  whatsApp,
  setWhatsApp,
}) => {
  return (
    <Paper>
      <Box p={2}>
        <Stack direction="row" spacing={2}>
          <FormControlComponent>
            <FormLabelComponent>Whats App</FormLabelComponent>
            <TextBoxComponent
              value={whatsApp}
              onChange={(e: any) => setWhatsApp(e.target.value)}
              variant="outlined"
            />
          </FormControlComponent>

          <FormControlComponent>
            <FormLabelComponent>Email</FormLabelComponent>
            <TextBoxComponent
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              variant="outlined"
            />
          </FormControlComponent>
        </Stack>
      </Box>
    </Paper>
  );
};

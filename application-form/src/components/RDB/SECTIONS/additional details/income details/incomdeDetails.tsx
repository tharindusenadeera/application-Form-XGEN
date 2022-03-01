import { FC } from "react";
import { incomeDetails_component_props_types } from "../../../../../constants/interfaces";
import { FormControlComponent } from "../../../../inputComponents/FormControlComponent";
import { FormLabelComponent } from "../../../../inputComponents/FormLabelComponent";
import { Box, Paper, Stack } from "@mui/material";
import { hiddenBtn, primaryBtn } from "../../../../../styles";
import { ToggleButtonComponent } from "../../../../inputComponents/ToggleButtonComponent";
import { TextBoxComponent } from "../../../../inputComponents/TextBoxComponent";

export const IncomdeDetails: FC<incomeDetails_component_props_types> = ({
  employeed,
  setEmployeed,
  salary,
  setSalary,
}) => {
  return (
    <>
      <Paper>
        <Box p={2}>
          <Box>
            <FormControlComponent>
              <FormLabelComponent>Are you employeed ?</FormLabelComponent>
              <Stack direction="row" spacing={2}>
                <ToggleButtonComponent
                  children="yes"
                  value={employeed}
                  sx={employeed ? primaryBtn : hiddenBtn}
                  onClick={() => setEmployeed(true)}
                />
                <ToggleButtonComponent
                  children="No"
                  value={employeed}
                  sx={!employeed ? primaryBtn : hiddenBtn}
                  onClick={() => setEmployeed(false)}
                />
              </Stack>
            </FormControlComponent>
          </Box>
          <Box mt={2}>
            <FormControlComponent>
              <FormLabelComponent>Salary</FormLabelComponent>
              <TextBoxComponent
                value={salary}
                onChange={(e: any) => setEmployeed(e.target.value)}
                variant="outlined"
              />
            </FormControlComponent>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

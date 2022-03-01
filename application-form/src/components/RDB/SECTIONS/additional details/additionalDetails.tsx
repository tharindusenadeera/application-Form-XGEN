import { FC } from "react";
import { additionalDetails_component_props_types } from "../../../../constants/interfaces";
import { Box, Typography } from "@mui/material";
import { IncomdeDetails } from "./income details/incomdeDetails";

export const AdditionalDetails: FC<additionalDetails_component_props_types> = ({
  employeed,
  salary,
  setEmployeed,
  setSalary,
}) => {
  return (
    <Box m={2}>
      <Typography variant="h6">Customer Employeement Details</Typography>

      <Box p={3}>
        <IncomdeDetails
          employeed={employeed}
          salary={salary}
          setEmployeed={setEmployeed}
          setSalary={setSalary}
        />
      </Box>
    </Box>
  );
};

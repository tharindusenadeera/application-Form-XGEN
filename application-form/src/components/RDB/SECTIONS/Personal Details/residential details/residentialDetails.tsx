import { Paper } from "@material-ui/core";
import { Box } from "@mui/system";
import { FC } from "react";
import { residentialDetails_component_props_types } from "../../../../../constants/interfaces";
import { ResidentialAddress } from "./residentialAddress";

export const ResidentialDetails: FC<
  residentialDetails_component_props_types
> = ({ address, setAddress, province, setProvince }) => {
  return (
    <Paper>
      <Box p={2}>
        <ResidentialAddress
          address={address}
          setAddress={setAddress}
          province={province}
          setProvince={setProvince}
        />
      </Box>
    </Paper>
  );
};

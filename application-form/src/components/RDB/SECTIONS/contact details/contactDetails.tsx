import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { customerContactDetails_component_props_types } from "../../../../constants/interfaces";
import { ContactDetails } from "./customer contact details/customerContactDetails";

export const CustomerContactDetails: FC<
  customerContactDetails_component_props_types
> = ({
  customerContacValues,
  onCustomerContacValuesChange,
  onNewCustomerContactFieldAdding,
  onCustomerContactFieldDelete,
  onCustomerContactFieldReset,
  fixedTpNumber,
  setFixedTpNumber,
}) => {
  return (
    <Box m={2}>
      <Typography variant="h6">Customer Contact Details</Typography>

      <Box p={3}>
        <ContactDetails
          customerContacValues={customerContacValues}
          onCustomerContacValuesChange={onCustomerContacValuesChange}
          onNewCustomerContactFieldAdding={onNewCustomerContactFieldAdding}
          onCustomerContactFieldDelete={onCustomerContactFieldDelete}
          onCustomerContactFieldReset={onCustomerContactFieldReset}
          fixedTpNumber={fixedTpNumber}
          setFixedTpNumber={setFixedTpNumber}
        />
      </Box>
    </Box>
  );
};

import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { contactDetails_component_props_types } from "../../../../constants/interfaces";
import { ContactDetails } from "./customer contact details/customerContactDetails";
import { SocialContact } from "./social contact/socialContact";

export const CustomerContactDetails: FC<
  contactDetails_component_props_types
> = ({
  customerContacValues,
  onCustomerContacValuesChange,
  onNewCustomerContactFieldAdding,
  onCustomerContactFieldDelete,
  onCustomerContactFieldReset,
  fixedTpNumber,
  setFixedTpNumber,
  email,
  setEmail,
  whatsApp,
  setWhatsApp,
}) => {
  return (
    <>
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
            email={email}
            setEmail={setEmail}
            whatsApp={whatsApp}
            setWhatsApp={setWhatsApp}
          />
        </Box>
      </Box>
      <Box m={2}>
        <Typography variant="h6">Social Contact Details</Typography>

        <Box p={3}>
          <SocialContact
            email={email}
            setEmail={setEmail}
            whatsApp={whatsApp}
            setWhatsApp={setWhatsApp}
          />
        </Box>
      </Box>
    </>
  );
};

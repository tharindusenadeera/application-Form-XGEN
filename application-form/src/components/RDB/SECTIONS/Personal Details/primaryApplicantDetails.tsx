import { FC } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { primaryApplicantDetails_component_props_types } from "../../../../constants/interfaces";
import { PersonalDetails } from "./personal details/personalDetails";
import { ResidentialDetails } from "./residential details/residentialDetails";

export const PrimaryApplicantDetails: FC<
  primaryApplicantDetails_component_props_types
> = ({
  title,
  setTitle,
  initialsInFull,
  lastName,
  initials,
  others,
  setInitialsInFull,
  setlastName,
  setInitials,
  setOthers,
  address,
  setAddress,
}) => {
  return (
    <>
      <Box m={2}>
        <Typography variant="h6">Personal Details</Typography>

        <Box p={3}>
          <PersonalDetails
            initialsInFull={initialsInFull}
            lastName={lastName}
            initials={initials}
            others={others}
            setInitialsInFull={setInitialsInFull}
            setlastName={setlastName}
            setInitials={setInitials}
            setOthers={setOthers}
            title={title}
            setTitle={setTitle}
          />
        </Box>
        <Typography variant="h6">Residential Details</Typography>
        <Box p={3}>
          <ResidentialDetails address={address} setAddress={setAddress} />
        </Box>
      </Box>
    </>
  );
};

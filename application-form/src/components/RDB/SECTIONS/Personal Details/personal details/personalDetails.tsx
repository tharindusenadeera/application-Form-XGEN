import { Paper } from "@material-ui/core";
import { Box } from "@mui/system";
import { FC } from "react";
import { personal_component_props_types } from "../../../../../constants/interfaces";
import { Name } from "./Name";
import { Title } from "./title";

export const PersonalDetails: FC<personal_component_props_types> = ({
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
}) => {
  return (
    <Paper>
      <Box p={2}>
        <Title title={title} setTitle={setTitle} />
        <Name
          initialsInFull={initialsInFull}
          setInitialsInFull={setInitialsInFull}
          initials={initials}
          setInitials={setInitials}
          lastName={lastName}
          setlastName={setlastName}
          others={others}
          setOthers={setOthers}
        />
      </Box>
    </Paper>
  );
};

import { FC, useState, useEffect } from "react";
import { Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Title } from "./title";
import { Name } from "./Name";
import { ResidentialAddress } from "./residentialAddress";

export const PersonalDetails: FC = () => {
  useEffect(() => console.log(title));
  //state
  const [title, setTitle] = useState("");
  const [initialsInFull, setInitialsInFull] = useState("");
  const [lastName, setlastName] = useState("");
  const [initials, setInitials] = useState("");
  const [others, setOthers] = useState("");
  const [address, setAddress] = useState("");

  //state changes
  const onTitleChange = (value: any) => setTitle(value);
  return (
    <>
      <Paper>
        <Box m={2}>
          <Typography variant="h5">Personal Details</Typography>
          <Divider />
          <Box p={3}>
            <Box>
              <Title value={title} onChange={onTitleChange} />
            </Box>
            <Box mt={3}>
              <Name
                initialsInFull={initialsInFull}
                lastName={lastName}
                initials={initials}
                others={others}
                setInitialsInFull={setInitialsInFull}
                setlastName={setlastName}
                setInitials={setInitials}
                setOthers={setOthers}
              />
            </Box>
            <Box mt={3}>
              <ResidentialAddress value={address} onChange={setAddress} />
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

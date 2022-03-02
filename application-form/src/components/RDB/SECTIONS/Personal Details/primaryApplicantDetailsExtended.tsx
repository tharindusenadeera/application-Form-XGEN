import { FC } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TextBoxComponent } from "../../../inputComponents/TextBoxComponent";
import { FieldInvoker } from "../../../../constants/interfaces";

export const PrimaryApplicantDetailsExtended: FC<FieldInvoker> = ({
  payload,
  onChange,
}) => {
  const data: any = {};
  payload.map((item: any) => (data[item["key"]] = item["value"]));

  const payloadBuilder = (value: any, item: any) => {
    data[item["key"]] = value;
    onChange(data);
  };

  return (
    <>
      <Box m={2}>
        <Typography variant="h6">Personal Details</Typography>

        <Box p={3}>
          {payload.map((item: any) => {
            return (
              <TextBoxComponent
                value={item.value}
                onChange={(e: any) => payloadBuilder(e.target.value, item)}
              />
            );
          })}

          {/* <PersonalDetails
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
          /> */}
        </Box>
      </Box>
    </>
  );
};

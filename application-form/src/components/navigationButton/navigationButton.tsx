import { Stack } from "@mui/material";
import { FC } from "react";
import { navigationButton_component_props_types } from "../../constants/interfaces";
import { ButtonComponent } from "../inputComponents/ButtonComponent";

export const NavigationButton: FC<navigationButton_component_props_types> = ({
  onBack,
  onNext,
  noBack,
  noNext,
}) => {
  return (
    <Stack direction="row" spacing={2} justifyContent="end">
      {!noBack && (
        <ButtonComponent title="Back" variant="contained" onClick={onBack} />
      )}
      {!noNext && (
        <ButtonComponent title="Next" variant="contained" onClick={onNext} />
      )}
    </Stack>
  );
};

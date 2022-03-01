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
  //if noBack prop is passed from parent then back button will not render
  //if noNext prop is passed from parent then next button will not render
  //By defualt both buttons are rendering
  return (
    <Stack direction="row" spacing={2} justifyContent="end">
      {!noBack && ( // when no back button required
        <ButtonComponent title="Back" variant="contained" onClick={onBack} />
      )}
      {!noNext && ( // when no next button required
        <ButtonComponent title="Next" variant="contained" onClick={onNext} />
      )}
    </Stack>
  );
};

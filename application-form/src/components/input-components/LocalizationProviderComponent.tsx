import { FC } from "react";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { rLocalizationProviderComponent_component_props_types } from "../../constants/interfaces";

export const LocalizationProviderComponent: FC<
  rLocalizationProviderComponent_component_props_types
> = ({ children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {children}
    </LocalizationProvider>
  );
};

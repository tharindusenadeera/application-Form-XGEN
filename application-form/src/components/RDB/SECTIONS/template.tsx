import { FC } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { template_component_props_types } from "../../../constants/interfaces";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  pannelExpandIconBox,
  templatePannelHide,
  templatePannelShow,
} from "../../../styles";
import { NavigationButton } from "../../navigationButton/navigationButton";

export const Template: FC<template_component_props_types> = ({
  title,
  children,
  Visibility,
  setVisibility,
  onBack,
  onNext,
  noNext,
  noBack,
  ref,
}) => {
  return (
    <div style={Visibility ? templatePannelShow : templatePannelHide} ref={ref}>
      <Box display="flex" alignItems="center">
        <Box>
          <Typography variant="h5">{title}</Typography>
        </Box>
        <Box sx={pannelExpandIconBox}>
          {Visibility ? (
            <ExpandLessIcon onClick={() => setVisibility(false)} />
          ) : (
            <ExpandMoreIcon onClick={() => setVisibility(true)} />
          )}
        </Box>
      </Box>
      <Box>{children}</Box>
      <Box m={2}>
        {noNext && <NavigationButton onBack={onBack} noNext />}
        {noBack && <NavigationButton onNext={onNext} noBack />}
        {!noBack && !noNext && (
          <NavigationButton onNext={onNext} onBack={onBack} />
        )}
      </Box>
    </div>
  );
};

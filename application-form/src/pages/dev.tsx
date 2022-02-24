import { ToggleButton } from "@mui/material";
import { FC } from "react";
import { useState } from "react";
import { DependancyTesting } from "../components/developerTesting/dependancyTesting";
import { ToggleButtonComponent } from "../components/inputComponents/ToggleButtonComponent";

export const Dev: FC = () => {
  return (
    <>
      <DependancyTesting />
    </>
  );
};

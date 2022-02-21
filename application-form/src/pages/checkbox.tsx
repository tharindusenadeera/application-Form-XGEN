import React from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { ChechBoxComponent } from "../components/input-components/ChechBoxComponent";

export const Checkbox = () => {
  return (
    <div>
      <h1>Check boxses</h1>
      <ChechBoxComponent defaultChecked={true} />
      <ChechBoxComponent icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <ChechBoxComponent color="success" />
    </div>
  );
};

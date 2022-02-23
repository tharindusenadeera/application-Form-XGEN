import React from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { ChechBoxComponent } from "../components/input-components/ChechBoxComponent";

export const Checkbox = () => {
  return (
    <>
      <td className="elementName">
        <h3>Check boxs</h3>
      </td>
      <td>
        <ChechBoxComponent defaultChecked={true} />
        <ChechBoxComponent
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
        <ChechBoxComponent color="success" />
      </td>
    </>
  );
};

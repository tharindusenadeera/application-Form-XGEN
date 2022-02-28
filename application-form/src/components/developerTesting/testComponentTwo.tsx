import { FC } from "react";
import { useState } from "@hookstate/core";
import {
  globaleState,
  masterDataDetails,
  personalDetail,
} from "../../constants/Store";
import { ButtonComponent } from "../inputComponents/ButtonComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export const TestComponentTwo: FC = () => {
  let store = useState(globaleState);
//   let personalDetailStore = useState(personalDetail);
  let masterDataStore = useState(masterDataDetails);
//   console.log("store", store);
  console.log("masterDataStore two", masterDataStore.addressTypes.get());

  const handleClickRemove = () => {
    // store.set({
    //   ...store,
    //   isLoggedIn: false,
    // });
  };

  const handleClickAdd = () => {
    // store.set({
    //   ...store,
    //   isLoggedIn: true,
    // });
    // masterDataStore.genders[0].name.set("female");
  };

  return (
    <>
      {masterDataStore.addressTypes[0].name.get()}
      <ButtonComponent
        onClick={handleClickAdd}
        iconbtn
        children={<AddIcon />}
      />
      <ButtonComponent
        onClick={handleClickRemove}
        iconbtn
        children={<DeleteIcon />}
      />
    </>
  );
};

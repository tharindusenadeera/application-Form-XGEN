import { createState } from "@hookstate/core";
import { masterData } from "./MasterData";

const initialState = {
    isLoggedIn: false,
    user: {},
  };

const personalDetailState = {
    firstName: '',
    lastName: '',
    nic: ''
}

const masterDataState = masterData;

export const globaleState = createState(initialState);
export const personalDetail = createState(personalDetailState);
export const masterDataDetails = createState(masterDataState);
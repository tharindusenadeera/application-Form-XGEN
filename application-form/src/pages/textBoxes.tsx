import { AccountCircle } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { TextBoxComponent } from "../components/input-components/TextBoxComponent";

const attributes = { variant: "outlined" };
const attributes2 = { placeholder: "placeholder" };
const attributes3 = {
  id: "input-with-icon-textfield",
  label: "TextField",
  InputProps: {
    startAdornment: (
      <InputAdornment position="start">
        <AccountCircle />
      </InputAdornment>
    ),
  },
  variant: "standard",
};
const attributes4 = { variant: "outlined" };

export const TextBoxes = () => {
  return (
    <div>
      <h1>text boxes</h1>
      <TextBoxComponent attributes={attributes} />
      <TextBoxComponent attributes={attributes2} />
      <TextBoxComponent attributes={attributes3} />
    </div>
  );
};

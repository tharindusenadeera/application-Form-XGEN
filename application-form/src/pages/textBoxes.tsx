import { AccountCircle } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { TextBoxComponent } from "../components/input-components/TextBoxComponent";

const attributes4 = { variant: "outlined", error: true, helperText: "error" };

export const TextBoxes = () => {
  return (
    <>
      <td className="elementName">
        <h3>Text boxes</h3>
      </td>
      <td>
        <TextBoxComponent variant="outlined" />
        <TextBoxComponent placeholder="placeholder" />
        <TextBoxComponent
          id="input-with-icon-textfield"
          label="TextField"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextBoxComponent
          id="input-with-icon-textfield"
          label="TextField"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </td>
    </>
  );
};

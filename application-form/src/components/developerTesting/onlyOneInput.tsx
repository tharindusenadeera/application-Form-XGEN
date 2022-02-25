import {
  Divider,
  FormLabel,
  InputAdornment,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { ButtonComponent } from "../inputComponents/ButtonComponent";
import { FormControlComponent } from "../inputComponents/FormControlComponent";
import { FormLabelComponent } from "../inputComponents/FormLabelComponent";
import { TextBoxComponent } from "../inputComponents/TextBoxComponent";

export const OnlyOneInput: FC = () => {
  const [newNic, setNewNic] = useState("");
  const [oldNic, setOldNic] = useState("");
  const [collapse, setCollapse] = useState(true);

  const types = {
    old: "OLD",
    new: "NEW",
  };

  const handleChange = ({ type, payload }: any) => {
    switch (type) {
      case types.new:
        setNewNic(payload);
        break;
      case types.old:
        setOldNic(payload);
        break;

      default:
        break;
    }
  };

  return (
    <Paper>
      <div style={{ height: collapse ? "60px" : "auto", overflow: "hidden" }}>
        <Typography variant="h5" p={1} onClick={() => setCollapse(!collapse)}>
          Accept only ond input
        </Typography>

        <br />
        <br />
        <Stack direction="row" spacing={2} p={2}>
          <FormControlComponent>
            <FormLabel>New NIC</FormLabel>
            <FormLabelComponent
              children={
                <TextBoxComponent
                  variant="outlined"
                  placeholder="New NIC"
                  value={newNic}
                  onChange={(e: any) =>
                    handleChange({ type: types.new, payload: e.target.value })
                  }
                  disabled={oldNic.length > 0}
                />
              }
            />
          </FormControlComponent>
          <FormControlComponent>
            <FormLabel>Old NIC</FormLabel>
            <FormLabelComponent
              children={
                <TextBoxComponent
                  variant="outlined"
                  placeholder="Old NIC"
                  value={oldNic}
                  onChange={(e: any) =>
                    handleChange({ type: types.old, payload: e.target.value })
                  }
                  disabled={newNic.length > 0}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <ButtonComponent
                          iconbtn
                          children="V"
                          disabled
                          size="small"
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              }
            />
          </FormControlComponent>
        </Stack>
        <br />
      </div>
    </Paper>
  );
};

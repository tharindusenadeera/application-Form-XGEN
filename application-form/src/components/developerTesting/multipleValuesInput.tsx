import { FC, useState } from "react";
import { Divider, Paper, Stack, Typography } from "@mui/material";
import { FormLabelComponent } from "../inputComponents/FormLabelComponent";
import { SelectComponents } from "../inputComponents/SelectComponents";
import { TextBoxComponent } from "../inputComponents/TextBoxComponent";
import { ButtonComponent } from "../inputComponents/ButtonComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";
import {
  basicSelect,
  borderdIconButton,
  devCollapsed,
  devUnCollapsed,
} from "../../styles";

export const MultipleValuesInput: FC = () => {
  const [values, setValues] = useState([{ type: null, value: "", id: "" }]);
  const [collapse, setCollapse] = useState(true);

  const onValueChange = (value: any, type: any, id: any) => {
    let filterd = values.map((item) => {
      if (item.id == id) {
        return { type: type, value: value, id: id };
      }
      return item;
    });
    console.log(filterd);

    setValues(filterd);
  };

  const onNewFieldAdding = () => {
    const newId = uuidv4();
    setValues((curruntValues) => [
      ...curruntValues,
      { type: null, value: "", id: newId },
    ]);
  };

  const onDelete = (id: any) => {
    setValues(() => values.filter((item) => item.id != id));
  };

  const onReset = () => setValues([{ type: null, value: "", id: "" }]);

  return (
    <Paper>
      <div style={collapse ? devCollapsed : devUnCollapsed}>
        <Typography variant="h5" p={1} onClick={() => setCollapse(!collapse)}>
          Multiple Values Input
        </Typography>
        <br />
        <br />

        {values[values.length - 1].value != "" && (
          <ButtonComponent
            iconbtn
            children={<AddIcon />}
            sx={borderdIconButton}
            onClick={onNewFieldAdding}
          />
        )}
        <br />
        <br />
        <FormLabelComponent>Customer contact details</FormLabelComponent>
        {values.map((item, index) => {
          return (
            <Stack direction="row" spacing={2} m={2}>
              <SelectComponents
                label={item.type}
                values={[
                  { value: null, name: "None" },
                  { value: "mobile", name: "Mobile" },
                  { value: "home", name: "Home" },
                  { value: "fax", name: "Fax" },
                ]}
                variant="outlined"
                value={item.type}
                onChange={(e: any) =>
                  onValueChange(item.value, e.target.value, item.id)
                }
                autoWidth
                sx={basicSelect}
              />
              <TextBoxComponent
                value={item.value}
                variant="outlined"
                onChange={(e: any) =>
                  onValueChange(e.target.value, item.type, item.id)
                }
              />
              {index != 0 && (
                <ButtonComponent
                  iconbtn
                  children={<DeleteIcon />}
                  onClick={() => onDelete(item.id)}
                />
              )}
            </Stack>
          );
        })}
        <br />
        <ButtonComponent title="reset" onClick={onReset} />
      </div>
    </Paper>
  );
};

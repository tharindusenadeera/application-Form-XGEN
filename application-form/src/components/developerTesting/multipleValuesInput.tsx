import { FC, useState } from "react";
import { Divider, Stack, Typography } from "@mui/material";
import { FormLabelComponent } from "../inputComponents/FormLabelComponent";
import { SelectComponents } from "../inputComponents/SelectComponents";
import { TextBoxComponent } from "../inputComponents/TextBoxComponent";
import { ButtonComponent } from "../inputComponents/ButtonComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";

export const MultipleValuesInput: FC = () => {
  const [values, setValues] = useState([{ type: null, value: "", id: "" }]);
  const [type, setType] = useState("");

  const handleCountryChange = (event: any) => setType(event.target.value);

  const onValueChange = (value: any, type: any, id: any, index: any) => {
    let filterd = values.map((item) => {
      if (item.id == id) {
        return { type: type, value: value, id: id };
      }
      return item;
    });
    console.log(filterd);

    setValues(filterd);
  };

  const onValueChangeX = (type: any, value: any, id: any, index: any) => {
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

  return (
    <>
      <Typography variant="h4">Multiple Values Input</Typography>
      <Divider />
      <br />
      <br />

      {values[0].value != "" && (
        <ButtonComponent
          iconbtn
          children={<AddIcon />}
          sx={{ border: "1px solid grey" }}
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
                onValueChangeX(e.target.value, item.type, item.id, index)
              }
              autoWidth
              sx={{ minWidth: "200px" }}
            />
            <TextBoxComponent
              value={item.value}
              variant="outlined"
              onChange={(e: any) =>
                onValueChange(e.target.value, item.type, item.id, index)
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
    </>
  );
};

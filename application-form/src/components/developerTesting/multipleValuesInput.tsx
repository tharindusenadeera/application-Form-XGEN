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
  const [values, setValues] = useState([{ type: null, value: null, id: "" }]);
  const [type, setType] = useState("");

  const handleCountryChange = (event: any) => setType(event.target.value);

  const onValueChange = (value: any, id: any, type: any) => {
    // setValues(() => {
    //   let filterd = values.filter((item) => item.id != id);
    //   let n = [...filterd, { value, type, id }];
    // });
  };

  const onNewFieldAdding = () => {
    const newId = uuidv4();
    setValues((curruntValues) => [
      ...curruntValues,
      { type: null, value: null, id: newId },
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

      <ButtonComponent
        iconbtn
        children={<AddIcon />}
        sx={{ border: "1px solid grey" }}
        onClick={onNewFieldAdding}
      />
      <br />
      <br />
      <FormLabelComponent>Customer contact details</FormLabelComponent>
      {values.map((item, index) => {
        return (
          <Stack direction="row" spacing={2} m={2}>
            <SelectComponents
              label="type"
              values={[
                { value: null, name: "None" },
                { value: "mobile", name: "Mobile" },
                { value: "home", name: "Home" },
                { value: "fax", name: "Fax" },
              ]}
              variant="outlined"
              value={item.type}
              onChange={handleCountryChange}
              autoWidth
              sx={{ minWidth: "200px" }}
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
    </>
  );
};

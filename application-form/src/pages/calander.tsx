import { useState } from "react";
import { LocalizationProvider } from "@mui/lab";
import { DatePickerComponent } from "../components/input-components/DatePickerComponent";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextBoxComponent } from "../components/input-components/TextBoxComponent";
import { TextField } from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
export const Calander = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <>
      <td className="elementName">
        <h3>Date Picker</h3>
      </td>
      <td>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePickerComponent
            label="Basic example"
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params: any) => <TextField {...params} />}
          />

          <DatePicker
            label="Basic example"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </td>
    </>
  );
};

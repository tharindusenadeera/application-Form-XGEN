import { useState } from "react";
import { LocalizationProvider } from "@mui/lab";
import { DatePickerComponent } from "../components/input-components/DatePickerComponent";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextBoxComponent } from "../components/input-components/TextBoxComponent";
import { TextField } from "@mui/material";

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
            disableFuture
            label="Responsive"
            openTo="year"
            views={["year", "month", "day"]}
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params: any) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </td>
    </>
  );
};

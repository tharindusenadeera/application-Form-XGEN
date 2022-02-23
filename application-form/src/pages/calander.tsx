import { useState } from "react";

import { DatePickerComponent } from "../components/input-components/DatePickerComponent";
import DatePicker from "@mui/lab/DatePicker";
import { LocalizationProviderComponent } from "../components/input-components/LocalizationProviderComponent";
import { TextBoxComponent } from "../components/input-components/TextBoxComponent";

export const Datepicker = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <>
      <td className="elementName">
        <h3>Date Picker</h3>
      </td>
      <td>
        <LocalizationProviderComponent>
          <DatePickerComponent
            label="Basic example"
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params: any) => (
              <TextBoxComponent variant="outlined" {...params} />
            )}
          />

          <DatePicker
            label="Year Only"
            onAccept={() => alert(value)}
            value={value}
            views={["year"]}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextBoxComponent {...params} />}
          />
        </LocalizationProviderComponent>
      </td>
    </>
  );
};

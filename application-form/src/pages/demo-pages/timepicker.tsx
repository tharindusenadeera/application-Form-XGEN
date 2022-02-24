import { useState } from "react";
import { TextBoxComponent } from "../../components/inputComponents/TextBoxComponent";
import { TimePickerComponent } from "../../components/inputComponents/TimePickerComponent";

const attributes4 = { variant: "outlined", error: true, helperText: "error" };

export const Timepicker = () => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <>
      <td className="elementName">
        <h3>Time Picker</h3>
      </td>
      <td>
        <TimePickerComponent
          label="Basic example"
          value={value}
          onChange={(newValue: any) => {
            setValue(newValue);
          }}
          renderInput={(params: any) => <TextBoxComponent {...params} />}
        />
        <TimePickerComponent
          label="Basic example"
          value={value}
          onChange={(newValue: any) => {
            setValue(newValue);
          }}
          renderInput={(params: any) => (
            <TextBoxComponent variant="outlined" {...params} />
          )}
        />
      </td>
    </>
  );
};

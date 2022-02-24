import { InputLabel, Stack } from "@mui/material";
import { FC, useState } from "react";
import { FormLabelComponent } from "../inputComponents/FormLabelComponent";
import { SelectComponents } from "../inputComponents/SelectComponents";
import { ToggleButtonComponent } from "../inputComponents/ToggleButtonComponent";
import { FormControlComponent } from "../inputComponents/FormControlComponent";

export const DependancyTesting: FC = () => {
  const [value, setValue] = useState(true);
  const [country, setcountry] = useState("");

  const handleValueChange = (newValue: any) => setValue(newValue);
  const handleCountryChange = (newValue: any) =>
    setcountry(newValue.target.value);
  return (
    <>
      <FormLabelComponent>Are you a sri lankan ?</FormLabelComponent>
      <br />
      <br />
      <Stack direction="row" spacing={2}>
        <ToggleButtonComponent
          children="Yes"
          sx={{
            background: "#027bd1",
            color: "white",
            fontWeight: "bold",
            fontFamily: "arial",
            width: "100px",
          }}
          value={value}
          onClick={() => handleValueChange(true)}
        />
        <ToggleButtonComponent
          children="No"
          sx={{
            fontWeight: "bold",
            fontFamily: "arial",
            width: "80px",
          }}
          value={value}
          onClick={() => handleValueChange(false)}
        />
        {!value ? (
          <>
            <FormControlComponent>
              <FormLabelComponent
                children={
                  <SelectComponents
                    label="Country"
                    values={[
                      { value: 1, name: "USA" },
                      { value: 2, name: "UK" },
                      { value: 2, name: "JAPAN" },
                    ]}
                    variant="filled"
                    value={country}
                    onChange={handleCountryChange}
                    autoWidth
                    sx={{ minWidth: "200px" }}
                  />
                }
                required
              />
            </FormControlComponent>
          </>
        ) : null}
      </Stack>
    </>
  );
};

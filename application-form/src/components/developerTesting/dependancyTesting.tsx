import { FC, useState } from "react";
import { FormLabelComponent } from "../inputComponents/FormLabelComponent";
import { SelectComponents } from "../inputComponents/SelectComponents";
import { ToggleButtonComponent } from "../inputComponents/ToggleButtonComponent";
import { FormControlComponent } from "../inputComponents/FormControlComponent";

import { TextBoxComponent } from "../inputComponents/TextBoxComponent";
import { FormLabel, Paper, Stack, Typography } from "@mui/material";
import { RadioGropComponent } from "../inputComponents/RadioGropComponent";
import { FormControlLabelComponent } from "../inputComponents/FormControlLabelComponent";
import { RadioButtonComponent } from "../inputComponents/RadioButtonComponent";
import { Box } from "@mui/system";
import {
  devCollapsed,
  devUnCollapsed,
  hiddenBtn,
  primaryBtn,
} from "../../styles";
import {
  dependancyTesting_component_props_types,
  employerDetails_component_props_types,
} from "../../constants/interfaces";

export const DependancyTesting: FC<dependancyTesting_component_props_types> = ({
  showExample,
  state,
}) => {
  const [value, setValue] = useState(true);
  const [country, setcountry] = useState("");
  const [employeed, setEmployeed] = useState(false);
  const [collapse, setCollapse] = useState(true);

  const handleValueChange = (newValue: any) => setValue(newValue);
  const handleEmployeeValueChange = (newValue: any) => setEmployeed(newValue);
  const handleCountryChange = (newValue: any) =>
    setcountry(newValue.target.value);
  return (
    <Paper>
      <div style={collapse ? devCollapsed : devUnCollapsed}>
        <Typography variant="h5" p={1} onClick={() => setCollapse(!collapse)}>
          Dependancy check and rendering
        </Typography>

        <br />
        <FormLabelComponent> Are you a sri lankan ?</FormLabelComponent>
        <br />
        <Stack direction="row" spacing={2} m={2}>
          <ToggleButtonComponent
            children="Yes"
            sx={{
              background: value ? "#027bd1" : null,
              color: value ? "white" : null,
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
              background: !value ? "#027bd1" : null,
              color: !value ? "white" : null,
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

        <br />
        <br />
        <FormLabelComponent> Are you employeed ?</FormLabelComponent>
        <Stack direction="row" spacing={2} m={2}>
          <ToggleButtonComponent
            children="Yes"
            sx={employeed ? primaryBtn : hiddenBtn}
            value={employeed}
            onClick={() => handleEmployeeValueChange(true)}
          />
          <ToggleButtonComponent
            children="No"
            sx={!employeed ? primaryBtn : hiddenBtn}
            value={employeed}
            onClick={() => handleEmployeeValueChange(false)}
          />
        </Stack>

        <br />

        {employeed && <EmployerDetails native={value} />}
        <br />
        <br />
        <FormLabelComponent> Show an Example main Section ?</FormLabelComponent>
        <Stack direction="row" spacing={2} m={2}>
          <ToggleButtonComponent
            children="Yes"
            sx={state ? primaryBtn : hiddenBtn}
            value={state}
            onClick={() => showExample(true)}
          />
          <ToggleButtonComponent
            children="No"
            sx={!state ? primaryBtn : hiddenBtn}
            value={state}
            onClick={() => showExample(false)}
          />
        </Stack>
      </div>
    </Paper>
  );
};

//EMPLOYEE DATA COMPONENT

export const EmployerDetails: FC<employerDetails_component_props_types> = ({
  native,
}) => {
  const [employeeState, setEmployeeState] = useState("");
  const [value, setValue] = useState(true);

  const handleChange = (event: any) => {
    setEmployeeState(event.target.value);
  };
  const handleValueChange = (newValue: any) => setValue(newValue);
  return (
    <>
      <div style={{ border: "1px solid grey", margin: "10px" }}>
        <Stack direction="row" spacing={2} p={2}>
          <FormControlComponent>
            <FormLabel>Company Name</FormLabel>
            <FormLabelComponent
              children={
                <TextBoxComponent variant="outlined" placeholder="New NIC" />
              }
            />
          </FormControlComponent>
          <FormControlComponent>
            <FormLabel>Position</FormLabel>
            <FormLabelComponent
              children={
                <TextBoxComponent variant="outlined" placeholder="Old NIC" />
              }
            />
          </FormControlComponent>
        </Stack>
        <Box m={2}>
          <FormControlComponent>
            <FormLabel>Are you a permenent employee ?</FormLabel>
            <RadioGropComponent
              defaultValue="yes"
              value={employeeState}
              onChange={handleChange}
            >
              <FormControlLabelComponent
                value="yes"
                label="Yes"
                control={<RadioButtonComponent />}
              />
              <FormControlLabelComponent
                value="no"
                label="No"
                control={<RadioButtonComponent />}
              />
            </RadioGropComponent>
          </FormControlComponent>
        </Box>
        <br />
        {!native && (
          <>
            <FormLabelComponent>
              Are you working a sri lankan company?
            </FormLabelComponent>
            <br />
            <Stack direction="row" spacing={2} m={2}>
              <ToggleButtonComponent
                children="Yes"
                sx={{
                  background: value ? "#027bd1" : null,
                  color: value ? "white" : null,
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
                  background: !value ? "#027bd1" : null,
                  color: !value ? "white" : null,
                  fontWeight: "bold",
                  fontFamily: "arial",
                  width: "80px",
                }}
                value={value}
                onClick={() => handleValueChange(false)}
              />
            </Stack>
          </>
        )}
      </div>
    </>
  );
};

import { Paper, Stack } from "@mui/material";
import { FC } from "react";
import { contactDetails_component_props_types } from "../../../../../constants/interfaces";
import { basicSelect } from "../../../../../styles";
import { ButtonComponent } from "../../../../inputComponents/ButtonComponent";
import { MultipleInputFields } from "../../../../inputComponents/MultipleInputFields";
import { SelectComponent } from "../../../../inputComponents/SelectComponents";
import { TextBoxComponent } from "../../../../inputComponents/TextBoxComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import { FormControlComponent } from "../../../../inputComponents/FormControlComponent";
import { FormLabelComponent } from "../../../../inputComponents/FormLabelComponent";
import { Box } from "@mui/system";

export const ContactDetails: FC<contactDetails_component_props_types> = ({
  customerContacValues,
  onCustomerContacValuesChange,
  onNewCustomerContactFieldAdding,
  onCustomerContactFieldDelete,
  onCustomerContactFieldReset,
  fixedTpNumber,
  setFixedTpNumber,
}) => {
  return (
    <Paper>
      <Box p={2}>
        <Box>
          <FormControlComponent>
            <FormLabelComponent>Fixed Line</FormLabelComponent>
            <TextBoxComponent
              value={fixedTpNumber}
              onChange={(e: any) => setFixedTpNumber(e.target.value)}
              variant="outlined"
            />
          </FormControlComponent>
        </Box>
        <Box mt={3}>
          <MultipleInputFields
            values={customerContacValues}
            onNewValueAdding={onNewCustomerContactFieldAdding}
            onValuesReset={onCustomerContactFieldReset}
            label="Other contact details"
          >
            {customerContacValues.map((item: any, index: any) => {
              return (
                <Stack direction="row" spacing={2} m={2}>
                  <SelectComponent
                    label={item.type}
                    values={[
                      { value: null, name: "None" },
                      { value: "mobile", name: "Mobile" },
                      { value: "fax", name: "Fax" },
                    ]}
                    variant="outlined"
                    value={item.type}
                    onChange={(e: any) =>
                      onCustomerContacValuesChange(
                        item.value,
                        e.target.value,
                        item.id
                      )
                    }
                    autoWidth
                    sx={basicSelect}
                  />
                  <TextBoxComponent
                    value={item.value}
                    variant="outlined"
                    onChange={(e: any) =>
                      onCustomerContacValuesChange(
                        e.target.value,
                        item.type,
                        item.id
                      )
                    }
                  />
                  {index != 0 && (
                    <ButtonComponent
                      iconbtn
                      children={<DeleteIcon />}
                      onClick={() => onCustomerContactFieldDelete(item.id)}
                    />
                  )}
                </Stack>
              );
            })}
          </MultipleInputFields>
        </Box>
      </Box>
    </Paper>
  );
};

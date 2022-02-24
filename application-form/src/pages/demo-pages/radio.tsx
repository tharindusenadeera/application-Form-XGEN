import React from "react";
import { FormControlComponent } from "../../components/inputComponents/FormControlComponent";
import { FormControlLabelComponent } from "../../components/inputComponents/FormControlLabelComponent";
import { FormLabelComponent } from "../../components/inputComponents/FormLabelComponent";
import { RadioButtonComponent } from "../../components/inputComponents/RadioButtonComponent";
import { RadioGropComponent } from "../../components/inputComponents/RadioGropComponent";

export const Radio = () => {
  return (
    <>
      <td className="elementName">
        <h3>Radio Button</h3>
      </td>

      <td>
        <RadioButtonComponent />
        <RadioButtonComponent color="secondary" />
        <RadioButtonComponent disabled={true} />
        <RadioButtonComponent size="large" />

        <div style={{ marginLeft: "50px" }}>
          <FormControlComponent>
            <FormControlLabelComponent
              labelPlacement="right"
              label="Loan"
              control={<RadioButtonComponent />}
            />
            <FormControlLabelComponent
              labelPlacement="right"
              label="Credit card"
              control={<RadioButtonComponent />}
            />
          </FormControlComponent>
        </div>
      </td>
    </>
  );
};

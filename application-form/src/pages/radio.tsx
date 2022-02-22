import React from "react";
import { FormControlComponent } from "../components/input-components/FormControlComponent";
import { FormControlLabelComponent } from "../components/input-components/FormControlLabelComponent";
import { FormLabelComponent } from "../components/input-components/FormLabelComponent";
import { RadioButtonComponent } from "../components/input-components/RadioButtonComponent";
import { RadioGropComponent } from "../components/input-components/RadioGropComponent";

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

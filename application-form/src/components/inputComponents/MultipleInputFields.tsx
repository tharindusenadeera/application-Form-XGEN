import { FC } from "react";
import { FormLabelComponent } from "./FormLabelComponent";
import { ButtonComponent } from "./ButtonComponent";
import AddIcon from "@mui/icons-material/Add";
import { multipleInputFields_component_props_types } from "../../constants/interfaces";

export const MultipleInputFields: FC<
  multipleInputFields_component_props_types
> = ({ values, onNewValueAdding, onValuesReset, label, children }) => {
  return (
    <>
      <br />
      <FormLabelComponent>{label}</FormLabelComponent>
      <br />
      {values[values.length - 1].value != "" && (
        <ButtonComponent
          iconbtn
          children={<AddIcon />}
          onClick={onNewValueAdding}
        />
      )}
      <br />
      {children};
      <br />
      <ButtonComponent title="reset" onClick={onValuesReset} />
    </>
  );
};

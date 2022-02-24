import { FormControlComponent } from "../../components/inputComponents/FormControlComponent";
import { FormControlLabelComponent } from "../../components/inputComponents/FormControlLabelComponent";
import { SwitchComponent } from "../../components/inputComponents/SwitchComponent";

export const Switch = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <td className="elementName">
        <h3>Switch</h3>
      </td>
      <td>
        <FormControlLabelComponent
          control={<SwitchComponent {...label} defaultChecked />}
          label="On"
          labelPlacement="top"
        />

        <SwitchComponent {...label} size="large" />
        <SwitchComponent {...label} defaultChecked />
        <SwitchComponent {...label} />
      </td>
    </>
  );
};

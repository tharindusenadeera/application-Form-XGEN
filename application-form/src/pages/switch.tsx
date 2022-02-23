import { FormControlComponent } from "../components/input-components/FormControlComponent";
import { FormControlLabelComponent } from "../components/input-components/FormControlLabelComponent";
import { SwitchComponent } from "../components/input-components/SwitchComponent";

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

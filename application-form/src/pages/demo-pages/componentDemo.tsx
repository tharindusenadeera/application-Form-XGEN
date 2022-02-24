import { FC } from "react";
import { Avatar } from "./avatar";
import { Buttons } from "./buttons";
import { Datepicker } from "./calander";
import { Checkbox } from "./checkbox";
import { MessageBox } from "./messagebox";
import { Progress } from "./Progress";
import { Radio } from "./radio";
import { Select } from "./select";
import { Skelton } from "./skelton";
import { Slider } from "./slider";
import { Switch } from "./switch";
import { TextBoxes } from "./textBoxes";
import { Timepicker } from "./timepicker";
import { Togglebutton } from "./togglebutton";

export const ComponentDemo: FC = () => {
  return (
    <>
      <h1>Form Basic Elements</h1>
      <hr />
      <table style={{ marginLeft: "130px", marginTop: "50px" }}>
        <tr>
          <th>
            <h1>Element</h1>
          </th>
          <th className="elementName">
            <h1>Demo</h1>
          </th>
        </tr>
        <tr>
          <Buttons />
        </tr>
        <tr>
          <TextBoxes />
        </tr>
        <tr>
          <Select />
        </tr>
        <tr>
          <Checkbox />
        </tr>
        <tr>
          <Slider />
        </tr>
        <tr>
          <Radio />
        </tr>
        <tr>
          <Switch />
        </tr>
        <tr>
          <Datepicker />
        </tr>
        <tr>
          <Timepicker />
        </tr>
        <tr>
          <Togglebutton />
        </tr>
        <tr>
          <Avatar />
        </tr>
        <tr>
          <Skelton />
        </tr>
        <tr>
          <Progress />
        </tr>
        <tr>
          <MessageBox />
        </tr>
      </table>
    </>
  );
};

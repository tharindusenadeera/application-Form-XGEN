import { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import { ToggleButtonGroupComponent } from "../components/input-components/ToggleButtonGroupComponent";
import { ToggleButtonComponent } from "../components/input-components/ToggleButtonComponent";

export const Togglebutton = () => {
  const [formats, setFormats] = useState(() => ["bold", "italic"]);
  const [view, setView] = useState("list");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => {
    setView(nextView);
  };

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };

  return (
    <>
      <td className="elementName">
        <h3>Toggle Button</h3>
      </td>
      <td>
        <ToggleButtonGroupComponent
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButtonComponent value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButtonComponent>
          <ToggleButtonComponent value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButtonComponent>
          <ToggleButtonComponent value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButtonComponent>
          <ToggleButtonComponent value="color" aria-label="color" disabled>
            <FormatColorFillIcon />
            <ArrowDropDownIcon />
          </ToggleButtonComponent>
        </ToggleButtonGroupComponent>

        <ToggleButtonGroupComponent
          orientation="vertical"
          value={view}
          exclusive
          onChange={handleChange}
        >
          <ToggleButtonComponent value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButtonComponent>
          <ToggleButtonComponent value="module" aria-label="module">
            <ViewModuleIcon />
          </ToggleButtonComponent>
          <ToggleButtonComponent value="quilt" aria-label="quilt">
            <ViewQuiltIcon />
          </ToggleButtonComponent>
        </ToggleButtonGroupComponent>
      </td>
    </>
  );
};

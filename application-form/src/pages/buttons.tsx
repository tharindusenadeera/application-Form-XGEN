import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { ButtonComponent } from "../components/input-components/ButtonComponent";

const attributes = {
  title: "hello",
  color: "secondary",
  disabled: false,
  size: "large",
  variant: "contained",
  onClick: () => alert("hello there simple button"),
  styles: { width: "300px" },
};
const attributes2 = {
  variant: "contained",
  title: "new simple button",
  onClick: () => alert("hello loading button"),
};
const attributes3 = {
  variant: "contained",
  title: "new simple button",
  styles: { border: "1px solid grey", marginTop: "5px" },
  children: <AccessibilityIcon />,
  onClick: () => alert("hello icon button"),
};
const attributes4 = {
  variant: "contained",
  title: "disabled",
  disabled: true,
  styles: { marginLeft: "15px" },
  children: <AccessibilityIcon />,
  onClick: () => alert("hello icon button"),
};

export const Buttons = () => {
  return (
    <>
      <td className="elementName">
        <h3>Buttons</h3>
      </td>

      <td>
        {" "}
        {/* //simple btn */}
        <ButtonComponent
          loadingbtn={false}
          iconbtn={false}
          attributes={attributes}
        />
        {/* //loading btn */}
        <ButtonComponent
          loadingbtn={true}
          iconbtn={false}
          attributes={attributes2}
        />
        {/* //icon btn */}
        <ButtonComponent
          loadingbtn={false}
          iconbtn={true}
          attributes={attributes3}
        />
        <ButtonComponent
          loadingbtn={false}
          iconbtn={false}
          attributes={attributes4}
        />
      </td>
    </>
  );
};

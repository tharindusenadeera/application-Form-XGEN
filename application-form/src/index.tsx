import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ButtonComponent } from "./components/input-components/ButtonComponent";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

const attributes = {
  title: "hello",
  color: "secondary",
  disabled: false,
  size: "large",
  variant: "contained",
  onClick: () => alert("hello there simple button"),
};
const attributes2 = {
  variant: "contained",
  title: "new simple button",
  onClick: () => alert("hello loading button"),
};
const attributes3 = {
  variant: "contained",
  title: "new simple button",
  styles: { border: "1px solid grey", marginTop: "25px" },
  children: <AccessibilityIcon />,
  onClick: () => alert("hello icon button"),
};

ReactDOM.render(
  <React.StrictMode>
    <App>
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
    </App>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

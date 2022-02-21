import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Buttons } from "./pages/buttons";
import { TextBoxes } from "./pages/textBoxes";
import { Select } from "./pages/select";
import { Checkbox } from "./pages/checkbox";
import { Slider } from "./pages/slider";

ReactDOM.render(
  <App>
    <Buttons />
    <TextBoxes />
    <Select />
    <Checkbox />
    <Slider />
  </App>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

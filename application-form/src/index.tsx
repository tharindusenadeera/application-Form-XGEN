import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { ComponentDemo } from "./pages/demo-pages/componentDemo";
import { Dev } from "./pages/dev";
import { ApplicationForm } from "./components/RDB/ApplicationForm";
ReactDOM.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/demopage" element={<ComponentDemo />} />
        <Route path="/" element={<Dev />} />
        <Route path="/rdb" element={<ApplicationForm />} />
      </Routes>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

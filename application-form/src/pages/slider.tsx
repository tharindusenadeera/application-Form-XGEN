import React from "react";
import { SliderComponent } from "../components/input-components/SliderComponent";

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

const valuetext = (value: any) => {
  return `${value}°C`;
};

export const Slider = () => {
  return (
    <div>
      <h1>Slider</h1>

      <SliderComponent
        aria-label="Always visible"
        sx={{ width: "400px" }}
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        color="secondary"
      />
      <br />
      <SliderComponent sx={{ width: "300px" }} />
      <br />
    </div>
  );
};

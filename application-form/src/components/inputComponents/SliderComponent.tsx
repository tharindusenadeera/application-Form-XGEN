import { Slider } from "@mui/material";
import { FC } from "react";
import { slider_component_props_types } from "../../constants/interfaces";

export const SliderComponent: FC<slider_component_props_types> = ({
  arialabel,
  arialabelledby,
  classes,
  color,
  components,
  componentsProps,
  defaultValue,
  disabled,
  disableSwap,
  getAriaLabel,
  getAriaValueText,
  isRtl,
  marks,
  max,
  min,
  name,
  onChange,
  onChangeCommitted,
  orientation,
  scale,
  size,
  step,
  sx,
  tabIndex,
  track,
  value,
  valueLabelDisplay,
  valueLabelFormat,
}) => {
  return (
    <>
      <Slider
        aria-label={arialabel}
        aria-labelledby={arialabelledby}
        classes={classes}
        color={color}
        components={components}
        componentsProps={componentsProps}
        defaultValue={80}
        disabled={disabled}
        disableSwap={disableSwap}
        getAriaLabel={getAriaLabel}
        getAriaValueText={getAriaValueText}
        isRtl={isRtl}
        marks={marks}
        max={max}
        min={min}
        name={name}
        onChange={onChange}
        onChangeCommitted={onChangeCommitted}
        orientation={orientation}
        scale={scale}
        size={size}
        step={step}
        sx={sx}
        tabIndex={tabIndex}
        track={track}
        value={value}
        valueLabelDisplay={valueLabelDisplay}
        valueLabelFormat={valueLabelFormat}
      />
    </>
  );
};

import React, { useState } from "react";
import {Slider } from "@ark-ui/react";

interface SliderProps {
  label: string;
  min: number;
  max: number;
  step: number;
  initialValue: number;
  onChange: (value: number[]) => void;
}

const SliderComponent: React.FC<SliderProps> = ({
  label,
  min,
  max,
  step = 1,
  initialValue = 0,
  onChange,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (details: any) => {
    console.log(details);
    setValue(details.value);
    onChange(details.value);
  };

  return (
    <Slider.Root
      min={min}
      max={max}
      step={step}
      defaultValue={[initialValue]}
      value={[value]}
      onValueChange={(details) => handleChange(details)}
      className="slider"
    >
      <div className="slider__text title-sm">
        <Slider.Label className="slider__label">{label}</Slider.Label>
        <Slider.ValueText className="slider__value" />
      </div>
      <Slider.Control className="slider__control">
        <Slider.Track className="slider__track">
          <Slider.Range className="slider__range" />
        </Slider.Track>
        <Slider.Thumb index={0} className="slider__thumb">
          <Slider.HiddenInput className="slider__hiddenInput" />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  );
};

export default SliderComponent;

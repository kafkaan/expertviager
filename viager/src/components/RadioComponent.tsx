import { RadioGroup } from "@ark-ui/react";

interface RadioGroupComponentProps {
  label: string;
  options: string[];
  onChange: (value: string) => void;
}

const RadioGroupComponent: React.FC<RadioGroupComponentProps> = ({
  label,
  options,
  onChange,
}) => (
  <RadioGroup.Root
    className="radio-group"
    defaultValue={options[0]}
    onValueChange={(details) => onChange(details.value)}
  >
    <RadioGroup.Label className="radio-group__label title-sm">{label}</RadioGroup.Label>
    <RadioGroup.Indicator className="radio-group__indicator" />
    <div className="radio-group__items margin-top-xs">
      {options.map((type) => (
        <RadioGroup.Item key={type} value={type} className="radio-group__item">
          <RadioGroup.ItemText className="radio-group__text text">
            {type}
          </RadioGroup.ItemText>
          <RadioGroup.ItemControl className="radio-group__control" />
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      ))}
    </div>
  </RadioGroup.Root>
);

export default RadioGroupComponent;

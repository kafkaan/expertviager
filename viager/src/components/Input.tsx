import React from "react";
import { Field } from "@ark-ui/react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  errorText?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  helperText,
  errorText,
  onChange,
  required = false,
  ...props
}) => {
  return (
    <Field.Root className="input">
      <Field.Label className="text input__text">{label}</Field.Label>
      <Field.Input
        onChange={onChange}
        {...props}
        className="input__input"
        required={required}
      />
      {helperText && (
        <Field.HelperText className="input__helper text">
          {helperText}
        </Field.HelperText>
      )}
      {errorText && (
        <Field.ErrorText className="input__error">{errorText}</Field.ErrorText>
      )}
    </Field.Root>
  );
};

export default InputField;

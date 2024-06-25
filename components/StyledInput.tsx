import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styled } from "nativewind";

const StyledTextInput = styled(TextInput);

interface StyledInputProps extends TextInputProps {
  className?: string;
}

const StyledInput: React.FC<StyledInputProps> = ({
  placeholder,
  className,
  ...props
}) => {
  return (
    <StyledTextInput
      className={`${className || ""}`}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default StyledInput;

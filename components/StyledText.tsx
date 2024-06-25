import React from "react";
import { Text, TextProps } from "react-native";
import { styled } from "nativewind";

const StyledText = styled(Text);

interface StyledTextProps extends TextProps {
  className?: string;
}

const StyledTextComponent: React.FC<StyledTextProps> = ({
  className,
  ...props
}) => {
  return <StyledText className={`${className || ""}`} {...props} />;
};

export default StyledTextComponent;

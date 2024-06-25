import React from "react";
import { View, ViewProps } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);

interface StyledViewProps extends ViewProps {
  className?: string;
}

const StyledViewComponent: React.FC<StyledViewProps> = ({
  className,
  ...props
}) => {
  return <StyledView className={`${className || ""}`} {...props} />;
};

export default StyledViewComponent;

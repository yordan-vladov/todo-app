import { Text, TextProps } from "react-native";

interface MyComponentProps extends TextProps {
  className: string;
}

function MyComponent({ className, ...props }: MyComponentProps) {
  const defaultStyles = "text-black dark:text-white";
  return <Text className={`${defaultStyles} ${className}`} />;
}

<MyComponent className="font-bold" />;

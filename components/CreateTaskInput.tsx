import React, { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SvgXml } from "react-native-svg";
import { Check } from "../assets/images/icon-check";

type CreateInputProps = {
  updateTasks: (_: string) => void;
};

export default function CreateInput({ updateTasks }: CreateInputProps) {
  const [inputValue, setInputValue] = useState("");

  return (
    <View className="flex-row w-full items-center space-x-2 box-border py-3 px-5 rounded-md bg-very-light-gray mt-[50px]">
      <View className="flex-row items-center justify-center h-[25px] aspect-square rounded-full border-2 border-dark-grayish-blue">
        {inputValue ? (
          <Pressable
            onPress={() => {
              updateTasks(inputValue);
              setInputValue("");
            }}
          >
            <LinearGradient
              colors={["#57ddff", "#c058f3"]} // Example gradient colors (blue, purple)
              start={[0, 0]}
              end={[1, 1]}
              className="flex-row items-center justify-center h-[25px] aspect-square rounded-full border-2 border-dark-grayish-blue"
            >
              <SvgXml xml={Check} />
            </LinearGradient>
          </Pressable>
        ) : null}
      </View>
      <TextInput
        className="font-josefin-sans w-full"
        placeholder="Create a new todo..."
        value={inputValue}
        onChangeText={setInputValue}
      />
    </View>
  );
}

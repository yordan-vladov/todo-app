import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SvgXml } from "react-native-svg";
import { Check } from "../assets/images/icon-check";
import { Cross } from "../assets/images/icon-cross";
import Task from "./Task";
import React, { useState } from "react";

type TaskProps = {
  task: Task;
  toggleCompleted: (_: boolean) => void;
  removeItem: () => void;
};

export default function TaskComponent({
  task,
  toggleCompleted,
  removeItem,
}: TaskProps) {
  return (
    <View
      key={task.id}
      className="flex-row w-full items-center box-border py-3 px-5 rounded-md border-b-2 border-dark-grayish-blue"
    >
      <Pressable
        onPress={() => {
          toggleCompleted(!task.isCompleted);
        }}
      >
        <View
          key={`${task.id}-check-container`}
          className="flex-row items-center justify-center h-[25px] aspect-square rounded-full border-2 border-dark-grayish-blue"
        >
          {task.isCompleted ? (
            <LinearGradient
              key={`${task.id}-check-gradient`}
              colors={["#57ddff", "#c058f3"]} // Example gradient colors (blue, purple)
              start={[0, 0]}
              end={[1, 1]}
              className="flex-row items-center justify-center h-[25px] aspect-square rounded-full border-2 border-dark-grayish-blue"
            >
              <SvgXml key={`${task.id}-check-icon`} xml={Check} />
            </LinearGradient>
          ) : null}
        </View>
      </Pressable>

      <Text key={`${task.id}-description`} className="ml-3 font-josefin-sans">
        {task.description}
      </Text>
      <View
        key={`${task.id}-remove-container`}
        className="flex-col justify-center ml-auto h-full justify-self-end h-[25px]"
      >
        <Pressable
          onPress={() => {
            removeItem();
          }}
        >
          <SvgXml key={`${task.id}-remove-icon`} xml={Cross} />
        </Pressable>
      </View>
    </View>
  );
}

import { View, Text, Image, TextInput, Pressable } from "react-native";
import { Moon } from "../assets/images/icon-moon";
import { SvgXml } from "react-native-svg";
import Task from "../components/Task";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";
import CreateTaskInput from "@/components/CreateTaskInput";
import { useState } from "react";
import TaskComponent from "@/components/TaskComponent";

export default function App() {
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  const [tasks, setTasks] = useState<Task[]>([]);
  const [nextId, setNextId] = useState(0);
  const [activeFilter, setActiverFilter] = useState(0);

  const filters = [
    (task: Task) => task,
    (task: Task) => !task.isCompleted,
    (task: Task) => task.isCompleted,
  ];

  if (!fontsLoaded) {
    return <Text>Oops, Not Loaded Yet :(</Text>;
  }

  const updateTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
  };
  return (
    <>
      <View className="absolute top-0 w-full h-[100vh] bg-very-light-grayish-blue" />
      <Image
        source={require("../assets/images/bg-mobile-light.jpg")}
        className="absolute top-0 w-full h-[250px]"
      />
      <View className="flex-1 items-center px-5">
        <View className="flex-row w-full mt-5 justify-between items-center">
          <Text className="text-[40px] text-white font-josefin-sans-bold tracking-[15px]">
            TODO
          </Text>
          <SvgXml xml={Moon} />
        </View>

        <CreateTaskInput
          updateTasks={(taskText: string) => {
            setTasks([
              ...tasks,
              { id: nextId, description: taskText, isCompleted: false },
            ]);
            setNextId(nextId + 1);
          }}
        />

        <View className="flex-col mt-5 bg-very-light-gray rounded-md w-full">
          {tasks.filter(filters[activeFilter]).map((task) => {
            return (
              <TaskComponent
                task={task}
                toggleCompleted={(isCompleted) => {
                  updateTask({
                    id: task.id,
                    description: task.description,
                    isCompleted,
                  });
                }}
                removeItem={() => {
                  setTasks((prevTasks) =>
                    prevTasks.filter((prevTask) => prevTask.id !== task.id)
                  );
                }}
              />
            );
          })}
          <View
            key="Task Options"
            className="flex-row w-full items-center justify-between box-border py-3 px-5 rounded-md border-dark-grayish-blue"
          >
            <Text>
              {tasks.filter((tasks) => !tasks.isCompleted).length} items left
            </Text>
            <Pressable onPress={() => setTasks(tasks.filter(filters[1]))}>
              <Text>Clear Completed</Text>
            </Pressable>
          </View>
        </View>

        <View className="flex-row items-center justify-center mt-5  py-3 px-5 space-x-3 bg-very-light-gray rounded-md w-full">
          <Pressable onPress={() => setActiverFilter(0)}>
            <Text
              className={`${
                activeFilter == 0
                  ? "font-josefin-sans-bold text-lg text-gradient-blue"
                  : "font-josefin-sans-regular text-md"
              }`}
            >
              All
            </Text>
          </Pressable>
          <Pressable onPress={() => setActiverFilter(1)}>
            <Text
              className={`${
                activeFilter == 1
                  ? "font-josefin-sans-bold text-lg text-gradient-blue"
                  : "font-josefin-sans-regular text-md"
              }`}
            >
              Active
            </Text>
          </Pressable>
          <Pressable onPress={() => setActiverFilter(2)}>
            <Text
              className={`${
                activeFilter == 2
                  ? "font-josefin-sans-bold text-lg text-gradient-blue"
                  : "font-josefin-sans-regular text-md"
              }`}
            >
              Completed
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

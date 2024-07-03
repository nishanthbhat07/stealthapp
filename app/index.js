import React from "react";
import { LogBox, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import styles from "../gloabl-styles";
import CardStack from "../src/components/card-stack";

SplashScreen.preventAutoHideAsync();

LogBox.ignoreAllLogs();

export default function App() {
  const data = [
    { id: "1", text: "Card 1" },
    { id: "2", text: "Card 2" },
    { id: "3", text: "Card 3" },
    { id: "4", text: "Card 4" },
    { id: "5", text: "Card 5" },
  ];
  return (
    <View style={styles.container}>
      <CardStack data={data} />
    </View>
  );
}

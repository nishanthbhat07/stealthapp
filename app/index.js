import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import styles from "../gloabl-styles";
import { FONTS } from "../src/constants/fonts";

SplashScreen.preventAutoHideAsync();

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: FONTS.regular,
        }}
      >
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

import React from "react";
import { LogBox, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import styles from "../gloabl-styles";
import HeroSection from "../src/components/hero-section";
import ManageCreditCards from "../src/screens/manage-credit-cards";

SplashScreen.preventAutoHideAsync();

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <View style={styles.container}>
      <HeroSection />
      <ManageCreditCards />
    </View>
  );
}

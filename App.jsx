import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import Constants from "expo-constants";
import { FONTS } from "./src/constants/fonts";
import styles from "./gloabl-styles";
import AnimatedAppLoader from "./src/components/animated-splash-loader";
import { images } from "./src/constants/images";

SplashScreen.preventAutoHideAsync();

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <AnimatedAppLoader image={images[Constants.expoConfig.splash.image]}>
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
      </AnimatedAppLoader>
    </GestureHandlerRootView>
  );
}

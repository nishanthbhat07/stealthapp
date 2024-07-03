import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Constants from "expo-constants";
import gloablStyles from "../gloabl-styles";
import AnimatedAppLoader from "../src/components/animated-splash-loader";
import { images } from "../src/constants/images";

const AppLayout = () => {
  return (
    <SafeAreaView style={gloablStyles.safeareaView}>
      <GestureHandlerRootView style={gloablStyles.root}>
        <AnimatedAppLoader image={images[Constants.expoConfig.splash.image]}>
          <Stack screenOptions={{ headerShown: false }} />
        </AnimatedAppLoader>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default AppLayout;

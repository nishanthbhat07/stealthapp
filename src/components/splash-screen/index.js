import React, { useCallback, useState } from "react";
import { StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Constants from "expo-constants";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Image } from "expo-image";
import PropTypes from "prop-types";
import {
  useFonts,
  SpaceGrotesk_400Regular as spaceGrotesk400,
  SpaceGrotesk_600SemiBold as spaceGrotesk600,
  SpaceGrotesk_700Bold as spaceGrotesk700,
} from "@expo-google-fonts/space-grotesk";
import {
  Roboto_400Regular as roboto400,
  Roboto_700Bold as roboto700,
  Roboto_500Medium as roboto500,
} from "@expo-google-fonts/roboto";
import styles from "./styles";

const AnimatedSplashScreen = ({ children, image }) => {
  // Shared value for animation
  const animation = useSharedValue(1);
  // State to track if app is ready
  const [isAppReady, setAppReady] = useState(false);
  // State to track if splash animation is complete (not used in this snippet)
  const [isSplashAnimationComplete] = useState(false);

  // Load custom fonts
  useFonts({
    spaceGrotesk400,
    spaceGrotesk600,
    spaceGrotesk700,
    roboto400,
    roboto700,
    roboto500,
  });

  // Callback function to handle image load completion
  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
    } catch (e) {
      console.log("ERR", e);
    } finally {
      setAppReady(true);
      // Start fade-out animation
      animation.value = withTiming(0, { duration: 1000 });
    }
  }, []);

  // Animated style for fade-out effect
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animation.value,
      // Uncomment for scale animation
      // transform: [
      //   {
      //     scale: animation.value,
      //   },
      // ],
    };
  });

  // Render splash screen if animation is not complete and app is not ready
  if (!isSplashAnimationComplete && !isAppReady) {
    return (
      <Animated.View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: Constants.expoConfig.splash.backgroundColor,
          },
          animatedStyle,
        ]}
      >
        <Image
          style={styles.logo}
          contentFit={Constants.expoConfig.splash.resizeMode || "contain"}
          source={image}
          onLoadEnd={onImageLoaded}
        />
      </Animated.View>
    );
  }

  // Render children when splash screen is done
  return children;
};

export default AnimatedSplashScreen;

// PropTypes for type checking
AnimatedSplashScreen.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object.isRequired,
};

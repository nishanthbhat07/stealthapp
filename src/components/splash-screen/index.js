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
import styles from "./styles";

const AnimatedSplashScreen = ({ children, image }) => {
  const animation = useSharedValue(1);
  const [isAppReady, setAppReady] = useState(false);
  const [isSplashAnimationComplete] = useState(false);

  useFonts({
    spaceGrotesk400,
    spaceGrotesk600,
    spaceGrotesk700,
  });

  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
    } catch (e) {
      // handle errors
      console.log("ERR", e);
    } finally {
      setAppReady(true);
      animation.value = withTiming(0, { duration: 1000 });
    }
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animation.value,
      // transform: [
      //   {
      //     scale: animation.value,
      //   },
      // ],
    };
  });

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

  return children;
};

export default AnimatedSplashScreen;
AnimatedSplashScreen.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object.isRequired,
};

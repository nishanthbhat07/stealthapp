// Card.js
import React from "react";
import PropTypes from "prop-types";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import styles from "./styles";

const Card = ({ index, perfomSwipe, item, length }) => {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onChange((event) => {
      offsetX.value = event.translationX;
      offsetY.value = event.translationY;
    })
    .onFinalize((event) => {
      if (
        Math.abs(event.translationX) > 120 ||
        Math.abs(event.translationY) > 120
      ) {
        runOnJS(perfomSwipe)();
      }
      offsetX.value = withTiming(0);
      offsetY.value = withTiming(0);
    });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offsetX.value },
        { translateY: offsetY.value },
        {
          scaleX: withTiming(
            Math.max(
              1 - (length - index - 1) / 10 + 0.05 * (length - index - 1),
              0.8,
            ),
          ),
        },
        // { translateY: withTiming(Math.min((length - index - 1) * 5, 10)) },
        { translateY: withTiming(-(length - index - 1) * 70) },
      ],
      zIndex: index,
      backgroundColor: "transparent",
    };
  });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.Image
        source={item}
        style={[styles.box, animatedStyles]}
        resizeMode="contain"
      />
    </GestureDetector>
  );
};

export default Card;
Card.propTypes = {
  index: PropTypes.number.isRequired,
  perfomSwipe: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  length: PropTypes.string.isRequired,
};

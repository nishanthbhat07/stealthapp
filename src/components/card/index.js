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
import { ImageBackground, Platform, Text, View } from "react-native";
import { Image } from "expo-image";
import styles from "./styles";
import { icons } from "../../constants/icons";

// Create an animated component based on the platform
const AnimatedImage = Animated.createAnimatedComponent(
  Platform.OS === "android" ? ImageBackground : Image,
);

const Card = ({ index, perfomSwipe, item, length }) => {
  // Shared values for card position
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  // Define pan gesture for card swiping
  const panGesture = Gesture.Pan()
    .onChange((event) => {
      // Update card position based on gesture
      offsetX.value = event.translationX;
      offsetY.value = event.translationY;
    })
    .onFinalize((event) => {
      // Check if swipe distance is enough to trigger action
      if (
        Math.abs(event.translationX) > 120 ||
        Math.abs(event.translationY) > 120
      ) {
        runOnJS(perfomSwipe)(); // Call swipe function if threshold is met
      }
      // Reset card position with animation
      offsetX.value = withTiming(0);
      offsetY.value = withTiming(0);
    });

  // Define animated styles for the card
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offsetX.value },
        { translateY: offsetY.value },
        // Stagger cards vertically based on their index
        { translateY: withTiming(-(length - index - 1) * 70) },
      ],
      backgroundColor: "transparent",
    };
  });

  return (
    <GestureDetector gesture={panGesture}>
      <AnimatedImage
        source={item.image}
        style={[styles.box, animatedStyles]}
        contentFit="contain"
      >
        <View style={styles.cardContent}>
          {/* Card top section */}
          <View style={styles.cardTop}>
            <Text style={styles.bankText}>{item.bank}</Text>
            <Image
              source={icons.creditCardChip}
              style={styles.creditChip}
              contentFit="contain"
            />
            <Text style={styles.cardNumberText}>{item.cardNumber}</Text>
          </View>
          {/* Card bottom section */}
          <View style={styles.cardBottom}>
            <View>
              <Text style={styles.label}>Card Holder name</Text>
              <Text style={styles.displayText}>{item.cardHolderName}</Text>
            </View>
            <View>
              <Text style={styles.label}>Expiry Date</Text>
              <Text style={styles.displayText}>{item.expiryDate}</Text>
            </View>
            <Image
              source={icons[item.type.toLowerCase()]}
              style={styles.cardType}
              contentFit="contain"
            />
          </View>
        </View>
      </AnimatedImage>
    </GestureDetector>
  );
};

export default Card;

// PropTypes for type checking
Card.propTypes = {
  index: PropTypes.number.isRequired,
  perfomSwipe: PropTypes.func.isRequired,
  item: PropTypes.shape({
    image: PropTypes.symbol.isRequired,
    cardNumber: PropTypes.string.isRequired,
    cardHolderName: PropTypes.string.isRequired,
    expiryDate: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    bank: PropTypes.string.isRequired,
  }).isRequired,
  length: PropTypes.string.isRequired,
};

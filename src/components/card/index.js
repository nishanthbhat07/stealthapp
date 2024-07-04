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
import { Text, View } from "react-native";
import { Image } from "expo-image";
import styles from "./styles";
import { icons } from "../../constants/icons";

const AnimatedImage = Animated.createAnimatedComponent(Image);

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
        // {
        //   scaleX: withTiming(
        //     Math.max(
        //       1 - (length - index - 1) / 10 + 0.05 * (length - index - 1),
        //       0.8,
        //     ),
        //   ),
        // },
        // { translateY: withTiming(Math.min((length - index - 1) * 5, 10)) },
        { translateY: withTiming(-(length - index - 1) * 70) },
        // { translateY: 5 * length - index - 1 },
      ],
      // zIndex: length - index,
      backgroundColor: "transparent",
      // bottom: index * 20,
      // bottom: width / index - 1,
      // marginTop: length <= 3 ? 0 : length - index * 10,
    };
  });

  return (
    <GestureDetector gesture={panGesture}>
      <AnimatedImage
        source={item.image}
        style={[styles.box, animatedStyles]}
        contentFit="cover"
      >
        <View style={styles.cardContent}>
          <View style={styles.cardTop}>
            <Text style={styles.bankText}>{item.bank}</Text>
            {/* <Text style={styles.bankText}>{item.id}</Text> */}
            <Image
              source={icons.creditCardChip}
              style={styles.creditChip}
              contentFit="contain"
            />
            <Text style={styles.cardNumberText}>{item.cardNumber}</Text>
          </View>
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

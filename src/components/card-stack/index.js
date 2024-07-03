import React, { useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import Card from "../card";
import { images } from "../../constants/images";

const CardStack = () => {
  //   const [data, setData] = useState([
  //     "#59B4C3",
  //     "#40A2E3",
  //     "#FDBF60",
  //     "#EFF396",
  //     "#9F70FD",
  //     "#74E291",
  //   ]);
  const [cards, setCards] = useState([
    images.cardBG1,
    images.cardBG2,
    images.cardBG3,
    images.cardBG4,
    images.cardBG5,
    images.cardBG6,
    images.cardBG7,
    images.cardBG8,
    images.cardBG9,
    images.cardBG10,
  ]);

  const perfomSwipe = () => {
    setCards((oldData) => {
      const lastElement = oldData.pop();
      oldData.unshift(lastElement);
      return [...oldData];
    });
  };

  return (
    <View style={styles.container}>
      {/* <ScrollView style={{ flex: 1 }}> */}
      {cards.map((item, index) => {
        return (
          <Card
            key={item}
            index={index}
            perfomSwipe={perfomSwipe}
            item={item}
            length={cards.length}
          />
        );
      })}
      {/* </ScrollView> */}
    </View>
  );
};

export default CardStack;
// CardStack.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   data: PropTypes.array.isRequired,
// };

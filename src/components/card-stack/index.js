import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PropTypes from "prop-types";
import styles from "./styles";
import Card from "../card";

const CardStack = ({ cards, setCards }) => {
  const perfomSwipe = () => {
    setCards((oldData) => {
      const lastElement = oldData.pop();
      oldData.unshift(lastElement);
      return [...oldData];
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatlistContent}
        style={styles.flatlist}
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Card
            key={item.id}
            index={index}
            perfomSwipe={perfomSwipe}
            item={item}
            length={cards.length}
          />
        )}
      />
    </View>
  );
};

export default CardStack;
CardStack.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cards: PropTypes.object.isRequired,
  setCards: PropTypes.func.isRequired,
};

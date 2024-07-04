import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PropTypes from "prop-types";
import styles from "./styles";
import Card from "../card";

const CardStack = ({ cards, setCards }) => {
  // Function to handle card swipe
  const perfomSwipe = () => {
    setCards((oldData) => {
      // Remove the last card from the array
      const lastElement = oldData.pop();
      // Add the last card to the beginning of the array
      oldData.unshift(lastElement);
      // Return a new array to trigger a re-render
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
            length={cards.length.toString()}
          />
        )}
      />
    </View>
  );
};

export default CardStack;

// PropTypes for type checking
CardStack.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cards: PropTypes.object.isRequired,
  setCards: PropTypes.func.isRequired,
};

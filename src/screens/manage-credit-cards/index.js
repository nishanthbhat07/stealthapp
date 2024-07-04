/* eslint-disable no-plusplus */
import { TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import HorizontalTabs from "../../components/horizontal-tabs";
import CardStack from "../../components/card-stack";
import styles from "./styles";
import { icons } from "../../constants/icons";
import { images } from "../../constants/images";
import { DATASET } from "./data";

let counter = 5;

const ManageCreditCards = () => {
  const [cards, setCards] = useState([
    {
      id: 0,
      image: images.cardBG1,
      cardNumber: "1234 5678 9012 3456",
      cardHolderName: "John Doe",
      expiryDate: "01/23",
      type: "VISA",
      bank: "Bank of America",
    },
    {
      id: 1,
      image: images.cardBG2,
      cardNumber: "1234 5678 9012 3456",
      cardHolderName: "John Doe",
      expiryDate: "01/23",
      type: "VISA",
      bank: "Bank of America",
    },
    {
      id: 2,
      image: images.cardBG3,
      cardNumber: "1234 5678 9012 3456",
      cardHolderName: "John Doe",
      expiryDate: "01/25",
      type: "VISA",
      bank: "Bank of America",
    },
    {
      id: 3,
      image: images.cardBG4,
      cardNumber: "1234 5678 9012 3456",
      cardHolderName: "John Doe",
      expiryDate: "01/23",
      type: "VISA",
      bank: "Bank of America",
    },
    {
      id: 4,
      image: images.cardBG5,
      cardNumber: "1234 5678 9012 3456",
      cardHolderName: "John Doe",
      expiryDate: "01/24",
      type: "VISA",
      bank: "Bank of America",
    },
  ]);

  return (
    <>
      <View style={styles.root}>
        <HorizontalTabs />
        <CardStack cards={cards} setCards={setCards} />
      </View>
      <TouchableOpacity
        onPress={() =>
          setCards((oldData) => {
            return [
              ...oldData,
              {
                id: counter++,
                image: DATASET[Math.floor(Math.random() * DATASET.length)],
                cardNumber: "1234 5678 9012 3456",
                cardHolderName: "John Doe",
                expiryDate: "01/24",
                type: "VISA",
                bank: "Bank of America",
              },
            ];
          })
        }
        activeOpacity={0.65}
        style={styles.plusBtn}
      >
        <Image
          pointerEvents="none"
          source={icons.plus}
          style={styles.plusIcon}
          contentFit="contain"
        />
      </TouchableOpacity>
    </>
  );
};

export default ManageCreditCards;

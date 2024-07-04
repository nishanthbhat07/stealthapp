import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { icons } from "../../constants/icons";
import styles from "./styles";

const HeroSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={icons.avatar}
          style={styles.avatar}
          contentFit="contain"
        />
        <View style={styles.tipsContainer}>
          <Image
            source={icons.lightblub}
            style={styles.blub}
            contentFit="contain"
          />
          <Text style={styles.tipsText}>Tips</Text>
        </View>
      </View>
      <View style={styles.heroContainer}>
        <Text style={styles.heroText}>All your credit cards</Text>
        <Text style={styles.heroSubtext}>Find all your credit cards here</Text>
      </View>
    </View>
  );
};

export default HeroSection;

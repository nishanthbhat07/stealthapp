import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { TABS } from "./data";
import styles from "./styles";

const HorizontalTabs = () => {
  return (
    <View style={styles.horizontalGrid}>
      {TABS.map((tab) => (
        <TouchableOpacity activeOpacity={0.65}>
          <Image
            source={tab.image}
            style={styles.tabImg(TABS.length)}
            contentFit="contain"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HorizontalTabs;

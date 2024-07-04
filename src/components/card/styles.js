import { StyleSheet } from "react-native";
import { width } from "../../utils/common";
import { FONTS } from "../../constants/fonts";
import { colors } from "../../constants/colors";

export default StyleSheet.create({
  bankText: {
    color: colors.white,
    fontFamily: FONTS.bold,
    fontSize: 14,
  },
  box: {
    alignSelf: "center",
    borderRadius: 14,
    height: 200,
    position: "absolute",
    width: width - 100,
  },
  cardBottom: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginHorizontal: 20,
    marginTop: 14,
  },
  cardContent: {
    height: 200,
    justifyContent: "space-between",
    width: width - 100,
  },
  cardNumberText: {
    color: colors.white,
    fontFamily: FONTS.bold,
    fontSize: 20,
  },
  cardTop: {
    flex: 1,
    justifyContent: "space-evenly",
    marginBottom: 5,
    marginHorizontal: 20,
    marginTop: 20,
  },
  cardType: {
    height: 35,
    width: 40,
  },
  creditChip: {
    height: 40,
    zIndex: 10,
  },
  displayText: {
    color: colors.white,
    fontFamily: FONTS.bold,
    fontSize: 18,
  },
  label: {
    color: colors.white,
    fontFamily: FONTS.regular,
    fontSize: 10,
  },
});

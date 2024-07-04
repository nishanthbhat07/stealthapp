import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default StyleSheet.create({
  plusBtn: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderRadius: 50,
    borderWidth: 1,
    bottom: "10%",
    height: 50,
    justifyContent: "center",
    position: "absolute",
    right: 30,
    width: 50,
  },
  plusIcon: {
    height: 12,
    width: 12,
  },
  root: {
    backgroundColor: colors.blackShade,
    flex: 1,
  },
});

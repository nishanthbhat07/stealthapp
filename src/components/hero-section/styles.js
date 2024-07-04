import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

export default StyleSheet.create({
  avatar: {
    height: 40,
    width: 40,
  },
  blub: {
    height: 20,
    width: 20,
  },
  container: {
    backgroundColor: colors.black,
    padding: 20,
  },
  heroContainer: { gap: 10, marginVertical: 14 },
  heroSubtext: {
    color: colors.white,
    fontFamily: FONTS.robotoRegular,
    fontSize: 16,
  },
  heroText: {
    color: colors.white,
    fontFamily: FONTS.robotoBold,
    fontSize: 30,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tipsContainer: {
    alignItems: "center",
    backgroundColor: colors.blackShade,
    borderRadius: 5,
    flexDirection: "row",
    gap: 5,
    padding: 8,
  },
  tipsText: {
    color: colors.white,
    fontFamily: FONTS.robotoRegular,
    fontSize: 12,
  },
});

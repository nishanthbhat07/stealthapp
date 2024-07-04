import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { width } from "../../utils/common";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  flatlist: {
    flex: 1,
    marginTop: 20,
    width,
  },
  flatlistContent: {
    flexGrow: 1,
    justifyContent: "flex-end",
    paddingBottom: 220,
  },
  root: { backgroundColor: colors.blackShade, flex: 1 },
});

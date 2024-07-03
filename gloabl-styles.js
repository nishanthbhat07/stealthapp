import { StyleSheet } from "react-native";
import { colors } from "./src/constants/colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: "center",
  },
  root: {
    flex: 1,
  },
  safeareaView: { flex: 1 },
});

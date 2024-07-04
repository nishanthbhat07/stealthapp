import { StyleSheet } from "react-native";
import { width } from "../../utils/common";

export default StyleSheet.create({
  horizontalGrid: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  tabImg: (length) => ({ height: 30, width: width / length }),
});

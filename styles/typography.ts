import { StyleSheet } from "react-native";

export const typography = StyleSheet.create({
  regularText: {
    fontFamily: "MonaSans-Regular",
    fontSize: 16, // Added a default font size
  },
  mediumText: {
    fontFamily: "MonaSans-Medium",
    fontSize: 16, // Added a default font size
  },
  semiboldText: {
    fontFamily: "MonaSans-SemiBold",
    fontSize: 16,
    fontWeight: "bold", // Added a default font size
  },
  boldText: {
    fontFamily: "MonaSans-Bold",
    fontSize: 16, // Added a default font size
    fontWeight: "bold", // While fontFamily implies boldness, fontWeight reinforces it
  },
  lightText: {
    fontFamily: "MonaSans-Light",
    fontSize: 14,
    fontWeight: "300", // '300' is the correct way to specify light font weight
  },
  heading: {
    fontFamily: "MonaSans-Bold",
    // fontSize: 30,
  },
  // ... more typography styles
});

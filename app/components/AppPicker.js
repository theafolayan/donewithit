import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";

export default function AppPicker({ icon, placeholder }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <AppText> {placeholder} </AppText>
      <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        color={defaultStyles.colors.medium}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
      color: defaultStyles.colors.dark,
  },
  icon: {
    marginRight: 10,
  },
  text: {
      flex: 1,
   
  },
});

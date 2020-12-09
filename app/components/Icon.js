import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons} from "@expo/vector-icons";

export default function Icon({ name, size = 20, backgroundColor = colors.black, iconColor = "yellow"}) {
    return <View style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center"
    }}>
        <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5}/>
  </View>;
}

const styles = StyleSheet.create({
    icon: {},
    
});

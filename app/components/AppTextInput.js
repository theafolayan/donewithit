import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from 'react-native-gesture-handler';


import defaultStyles  from "../config/styles";

export default function AppTextInput({icon, placeholder}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={ styles.icon}/>}
            <TextInput style={defaultStyles.text} placeholder={ placeholder}/>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10

    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: defaultStyles.colors.dark,
    },
    icon: {
        marginRight: 10
    }
})

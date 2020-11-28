import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function ListItemDeleteAction() {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="trash-can-outline" size={35} color="white"/>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
        width: 70,
        backgroundColor: colors.red,
        alignItems: "center",
        justifyContent: "center"
    }
})


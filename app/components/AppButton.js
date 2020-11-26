import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../config/colors'

export default function AppButton({title}) {
    return (
        <View style={styles.button}>
            <Text style={styles.text}> {title} </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 100 / 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 15,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    }
})


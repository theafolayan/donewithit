import React from 'react'
import {Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

export default function AppButton({title, onPress, color ="primary"}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={ onPress}> 
        
            <Text style={styles.text}> {title} </Text>
       </TouchableOpacity>
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
        marginVertical: 10,
        // marginHorizontal: 10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    }
})


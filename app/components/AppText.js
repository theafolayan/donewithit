import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

export default function OkText({children}) {
    return (
        <View>
            <Text  style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.Os === "android" ? "Roboto" : "Avenir"
        
    }
})


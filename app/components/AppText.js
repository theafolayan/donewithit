import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import colors from '../config/colors'

export default function AppText({children}) {
    return (
        <View>
            <Text  style={styles.text}>{children}</Text>
        </View>
    )
}
Platform.select({
    ios: {
        fontSize: 20,
        fontFaimly: "Avenir"
    },
    android: {
        fontSize: 18,
        fontFaimly: "Roboto"
    }
})
const styles = StyleSheet.create({
    text: {
        // fontSize: 18,
        color: colors.black,
        ...Platform.select({
    ios: {
        fontSize: 20,
        fontFamily: "Avenir"
    },
    android: {
        fontSize: 18,
        fontFamily: "Roboto"
    }
})

        
    }
})


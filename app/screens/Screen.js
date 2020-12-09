import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Constants from "expo-constants";

export default function Screen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        // backgroundColor: "yellow",
        flex: 1,
    }
})

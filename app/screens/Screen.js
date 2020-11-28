import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Constants from "expo-constants";

export default function Screen({children}) {
    return (
        <SafeAreaView>
            {children}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    scren: {
        paddingTop: Constants.statusBarHeight
    }
})

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../config/colors'

export default function ListItemSeperator() {
    return (
        <View style={styles.seperator}>
        </View>
    )
}
const styles = StyleSheet.create({
    seperator: {
        width: "100%",
        height: 1,
        backgroundColor: colors.light    }
})


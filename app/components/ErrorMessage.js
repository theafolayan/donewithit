import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from './AppText'

export default function ErrorMessage({error, visible}) {
    if (!error || !visible) return null;
    return (
        <View>
            <AppText style = {styles.error}> { error}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        color: "red"
    }
})


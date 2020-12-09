import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AppText from './AppText'

export default function PickerItem({label, onPress}) {
    return (
            <TouchableOpacity onPress ={onPress}> 
            <AppText style ={styles.text}> { label}</AppText>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text: {
        padding: 20
    }
})

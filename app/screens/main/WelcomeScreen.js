import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

export default function WelcomeScreen(props) {
    return (
        <ImageBackground source={require('../../../assets/background.jpg')} style={styles.background}> 

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    }
})

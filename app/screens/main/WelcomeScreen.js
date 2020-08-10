import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

export default function WelcomeScreen(props) {
    return (
        <ImageBackground source={require('../../../assets/background.jpg')} style={styles.background}> 
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end"
    },
    loginButton: {
        height: 70,
        width: "100%",
        backgroundColor: "#fc5c65"
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4"
    }
})

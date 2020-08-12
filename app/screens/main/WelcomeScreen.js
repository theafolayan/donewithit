import React from 'react'
import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native'

export default function WelcomeScreen(props) {
    return (
        <ImageBackground source={require('../../../assets/background.jpg')} style={styles.background}> 
            <View style={styles.logoContainer}> 
            <Image style={styles.logo} source={require("../../../assets/logo-red.png")}></Image>
            <Text> Sell what you don't need!</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
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
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    }
    
})

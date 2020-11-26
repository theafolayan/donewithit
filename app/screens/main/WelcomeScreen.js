import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import AppText from '../../components/AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from '../../components/AppButton';

export default function WelcomeScreen(props) {
    // console.log('Hello');
    return (
        <ImageBackground blurRadius={10} source={require('../../../assets/background.jpg')} style={styles.background}> 
            <View style={styles.logoContainer}> 
            <Image style={styles.logo} source={require("../../../assets/logo-red.png")}></Image>
                {/* <AppText> Sell what you don't need!</AppText> */}
                <Text style={styles.tagline}> Sell what you don't need!</Text>
            </View>
            {/* <View style={styles.loginButton}></View> */}
            <View style={styles.buttonsContainer}> 
                <AppButton title="Login" onPress={() => {
                    console.log('tapped');
                }}/>
                <AppButton title="Register" color="secondary"/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,
    },
    buttonsContainer: {
        width: "90%",
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    }
    
})

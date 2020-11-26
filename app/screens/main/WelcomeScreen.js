import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import AppText from '../../components/AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from '../../components/AppButton';

export default function WelcomeScreen(props) {
    // console.log('Hello');
    return (
        <ImageBackground source={require('../../../assets/background.jpg')} style={styles.background}> 
            <View style={styles.logoContainer}> 
            <Image style={styles.logo} source={require("../../../assets/logo-red.png")}></Image>
            <AppText> Sell what you don't need!</AppText>
            </View>
            {/* <View style={styles.loginButton}></View> */}
            <View style={styles.buttonsContainer}> 
                <AppButton title="Login" onPress={() => {
                    console.log('tapped');
                }}/>
                <AppButton title="Register" />
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
        width: "100%",
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    }
    
})

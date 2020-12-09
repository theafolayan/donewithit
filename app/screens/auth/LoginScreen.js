import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import AppTextInput from '../../components/AppTextInput'
// import styles from '../../config/styles'
import Screen from '../Screen'
import AppButton from '../../components/AppButton'

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
      <Screen style ={styles.container}>
        <Image
          source={require("../../../assets/logo-red.png")}
          style={styles.logo}
        />
        <AppTextInput
          placeholder="email"
          icon="email"
                autoCapitalize="none"
                onChangeText = {text => setEmail(text)}
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppTextInput
          placeholder="Password"
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
                textContentType="emailAddress"
                textContentType="password"
                secureTextEntry
                onChangeText = {text => {setPassword(text)}}
            />
            <AppButton title="Login" onPress={ ()=> {console.log(email, password)}}/>
        </Screen>
        
    );
}
const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20

    },
    container: {
        paddingHorizontal: 25
    }
})

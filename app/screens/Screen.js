import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Constants from "expo-constants";
import AppTextInput from '../components/AppTextInput';

export default function Screen({children, style}) {
    return (
      <SafeAreaView style={[styles.screen, style]}>
            <View style={style}>
                {/* {children} */}
                <AppTextInput placeholder="Username" icon = "email"/>
            </View>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        // backgroundColor: "yellow",
        flex: 1,
    }
})

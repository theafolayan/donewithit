import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Constants from "expo-constants";
import AppTextInput from '../components/AppTextInput';
import SwitchComponent from '../components/SwitchComponent';
import AppPicker from '../components/AppPicker';

export default function Screen({children, style}) {
    return (
      <SafeAreaView style={[styles.screen, style]}>
            <View style={style}>
                {/* <SwitchComponent/> */}
                <AppPicker placeholder="Category" icon="apps"/>
                <AppTextInput icon = "email" placeholder  ="Email"/>
            </View>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})

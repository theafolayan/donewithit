import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
// import WelcomeScreen from './app/screens/WelcomeScreen'
import WelcomeScreen from './app/screens/main/WelcomeScreen'
import ViewImageScreen from './app/screens/main/ViewImageScreen'

export default function App() {
  return (
    //App root lives here 
      // <WelcomeScreen></WelcomeScreen>
    <ViewImageScreen/>
   
  );
}

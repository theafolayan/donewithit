import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
// import WelcomeScreen from './app/screens/WelcomeScreen'
import WelcomeScreen from './app/screens/main/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'

export default function App() {
  return (
      <WelcomeScreen></WelcomeScreen>
   
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   logo: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: 300,
//   },
//   cta_container: {
//     flex: 0.5,
//     flexDirection: "column",
//     alignItems:"flex-end"
//   },
//   red_button: {
//     width: Dimensions.width,
//     height: 60,
//     backgroundColor: "#fc5c65",
//   },
//   green_button: {
//     width: Dimensions.width,
//     height: 60,
//     backgroundColor: "#4ecdc4",
//   },
// });

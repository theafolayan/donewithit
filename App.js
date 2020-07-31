import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <WelcomeScreen></WelcomeScreen>
      {/* <ViewImageScreen></ViewImageScreen> */}
      {/* <ImageBackground
        source={require("./assets/background.jpg")}
        style={{
          flex: 1,
          width: Dimensions.width,
          height: 900,
          resizeMode: "cover",
          justifyContent: "center",
        }}
      >
        
        <View style={styles.logo}>
          <Image
            source={require("./assets/logo-red.png")}
            style={{ width: 100, height: 100 }}
          /><Text
          style={{
            fontSize: 30,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            color: "red",
            justifyContent: "center",
          }}
        >
          {" "}
          Sell What You Don't Need now today!
        </Text>
        </View>

        {/* Footer Buttons */}
        {/* <View style={styles.cta_container}>
          <TouchableOpacity style={styles.red_button}></TouchableOpacity>
          <TouchableOpacity style={styles.green_button}></TouchableOpacity>
        </View>
      </ImageBackground> */}
    </View> 
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

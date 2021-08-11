import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const WelcomeScreen = () => {
  // console.log(Dimensions.width)
  return (
    <View>
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={styles.background}
      >
        <View style={styles.logo_area}>
          <Image
            source={require("../../assets/logo-red.png")}
            style={styles.logo}
          />
          <Text>Sell What You Don't Need</Text>
        </View>

        <View style={styles.bottom_cta}>
          <TouchableOpacity style={styles.btn_red}></TouchableOpacity>
          <TouchableOpacity style={styles.btn_green}></TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    resizeMode: "cover",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  logo: {
    width: 90,
    height: 90,
  },
  logo_area: {
    flex: 1,
    alignItems: "center",
    paddingTop: StatusBar.length + 100,
  },
  bottom_cta: {
    flex: 1,
    flexDirection: "column",
  },
  btn_red: {
    backgroundColor: "#fc5c65",
    flex: 1,
  },
  btn_green: {
    backgroundColor: "#4ecdc4",
    flex: 1,
  },
});
export default WelcomeScreen;

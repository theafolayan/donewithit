import React from 'react';
import { View, Image, Text, SafeAreaView, StyleSheet, Dimensions, StatusBar } from 'react-native'

export default function ViewImageScreen() {
    return (
      //   <SafeAreaView>

      <View style={styles.page}>
        <StatusBar barStyle="light-content"> </StatusBar>
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.top_bar}>
              <View style={styles.top_red}></View>
              <View style={styles.top_green}></View>
            </View>
            <View style={styles.image_area}> 
                        <Image source={require("../../assets/chair.jpg")}/>    
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
    
}
const styles = StyleSheet.create({
  page: {
    backgroundColor: "black",
    // flex: 1,
    height: Dimensions.get("screen").height,
  },
  container: {
    flex: 1,
      flexDirection: "column",

  },
  top_bar: {
    flex: 1,
    flexDirection: "row",
    height: 70,
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  top_green: {
    backgroundColor: "#4ecdc4",
    width: 50,
    height: 60,
    width: 60,
  },
  top_red: {
    backgroundColor: "#fc5c65",
    width: 50,
    },
    image_area: {
        backgroundColor: "white",
      flex: 1,
      // marginBottom: 400,
      marginTop: 70,
  },
  image: {resizeMode: "contain" 
      
    }
});
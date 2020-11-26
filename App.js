import { StatusBar } from 'expo-status-bar';
import React from 'react';
import colors from './app/config/colors'
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
// import WelcomeScreen from './app/screens/WelcomeScreen'
import WelcomeScreen from './app/screens/main/WelcomeScreen'
// import ViewImageScreen from './app/screens/main/ViewImageScreen'
import Card from "./app/components/Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    //App root lives here 
      // <WelcomeScreen></WelcomeScreen>
    <View style={{padding: 20, paddingTop: 100, backgroundColor: "#f8f4f4"}} >
      <Card title="Red Chair for sale"
      subtitle="$100"
      image={require('./assets/chair.jpg')}
    />
      {/* <AppButton title="Login" /> */}
    </View>
    
    // <ViewImageScreen/>
    // <SafeAreaView style={{
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center"
    // }}> 
    //   {/* <MaterialCommunityIcons name="email" size="60" color="tomato"/> */}
    //   <TouchableOpacity style={{
    //     backgroundColor: colors.primary,
    //     paddingHorizontal: 150,
    //     paddingVertical: 15,
    //     borderRadius: 100/1
    //   }}> 
    //     <Text style={{color: "white"}}> Login</Text>
    //   </TouchableOpacity>
    // </SafeAreaView>
   
  );
}

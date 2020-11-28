import { StatusBar } from 'expo-status-bar';
import React from 'react';
import colors from './app/config/colors'
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
// import WelcomeScreen from './app/screens/WelcomeScreen'
import WelcomeScreen from './app/screens/main/WelcomeScreen'
// import ViewImageScreen from './app/screens/main/ViewImageScreen'
import Card from "./app/components/Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ItemListScreen from './app/screens/ItemListScreen';
import ListingDetailScreen from './app/screens/main/ListingDetailScreen';
import ViewImageScreen from './app/screens/main/ViewImageScreen';
import MessagesScreen from './app/screens/main/MessagesScreen';
import Screen from './app/screens/Screen';

export default function App() {
  return (
    //App root lives here 
    // <ViewImageScreen />
    // <Screen/>
    <MessagesScreen/>
    // <ItemListScreen/>
  
    
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

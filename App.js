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
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
  return (
<ListingsScreen/>

   
  );
}

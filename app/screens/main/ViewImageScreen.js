import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
export default function ViewImageScreen() {
    return (
        <View style={styles.container}> 
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={ 30}/>
            </View>
            <View style={styles.deleteIcon}></View>
            <Image resizeMode="contain" style={styles.image} source={require("../../../assets/chair.jpg")}/>
        </View>
    )

}

const styles = StyleSheet.create({
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: "#4ecdc4",
        position: "absolute",
        top: 40,
        right: 30
    },
        container: {
            backgroundColor: "#000",
            flex: 1
        },
        image: {
            width: "100%",
            height: "100%"
        }
    });
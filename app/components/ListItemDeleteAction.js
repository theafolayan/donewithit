import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
export default function ListItemDeleteAction({ onPress }) {
    const handleDelete = message => {
        console.log(message)
    }
    return (
      <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
        <View>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={35}
            color="white"
          />
        </View>
      </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        backgroundColor: colors.red,
        alignItems: "center",
        justifyContent: "center"
    }
})


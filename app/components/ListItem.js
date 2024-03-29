import React from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity, } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../config/colors'
import AppText from './AppText'

export default function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            { image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}> {title} </AppText>
              {subTitle && <AppText style={styles.subTitle}> {subTitle} </AppText>}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    padding: 15,
        backgroundColor: colors.white
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight:10,
    },
    title: {
        fontWeight: "500"
    },
    subTitle: {
      color: colors.greyedOut,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center"
    }
})

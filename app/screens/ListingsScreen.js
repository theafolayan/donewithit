import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Card from '../components/Card';
import colors from '../config/colors';
import Screen from './Screen';


const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../../assets/chair.jpg"),
  },
  {
    id: 2,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../../assets/chair.jpg"),
  },

];

export default function ListingsScreen() {
    return (
        <Screen style={styles.screen}> 
        <FlatList data={listings}
          keyExtractor={listing => listing.id.toString()}
          renderItem={({ item }) => <Card
            title={item.title} subtitle={"$" + item.price}
            image={ item.image}/>} />
       </Screen>
    )
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    // backgroundColor: colors.dark
  }
})


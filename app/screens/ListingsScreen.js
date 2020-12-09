import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Card from '../components/Card';
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
  {
    id: 3,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../../assets/chair.jpg"),
  },
  {
    id: 4,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../../assets/chair.jpg"),
  },
  {
    id: 5,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../../assets/chair.jpg"),
  },
];

export default function ListingsScreen() {
    return (
        <Screen> 
        <FlatList data={listings}
          keyExtractor={listing => listing.id.toString()}
          renderItem={({ item }) => <Card
            title={item.title} subtitle={"$" + item.price}
            image={ item.image}/>} />
       </Screen>
    )
}

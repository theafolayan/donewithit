import React from 'react'
import { FlatList, ScrollView } from 'react-native';
import ListItem from '../../components/ListItem';
import { Constants } from "expo-constants";
import Screen from '../Screen';
import ListItemSeperator from '../../components/ListItemSeperator';
// console.log()
const messages = [
  {
    id: 1,
    title: "Hello enquiry",
    description: "lorem ipsum sit dolor amet",
    image: require("../../../assets/chair.jpg"),
  },
  {
    id: 2,
    title: "Hello enquiry",
    description: "lorem ipsum sit dolor amet",
    image: require("../../../assets/chair.jpg"),
  },
  {
    id: 3,
    title: "Hello enquiry",
    description: "lorem ipsum sit dolor amet",
    image: require("../../../assets/chair.jpg"),
  },
  {
    id: 4,
    title: "Hello enquiry",
    description: "lorem ipsum sit dolor amet",
    image: require("../../../assets/chair.jpg"),
  },
  {
    id: 5,
    title: "Hello enquiry",
    description: "lorem ipsum sit dolor amet",
    image: require("../../../assets/chair.jpg"),
  },
  {
    id: 6,
    title: "Hello enquiry",
    description: "lorem ipsum sit dolor amet",
    image: require("../../../assets/chair.jpg"),
  },
  {
    id: 7,
    title: "Hello enquiry",
    description: "lorem ipsum sit dolor amet",
    image: require("../../../assets/chair.jpg"),
  },
  {
    id: 8,
    title: "Hello enquiry",
    description: "lorem ipsum sit dolor amet",
    image: require("../../../assets/chair.jpg"),
  },
];

export default function MessagesScreen() {
    return (
      <Screen>
        <ScrollView>
          <FlatList
            data={messages}
            keyExtractor={(message) => message.id.toString()}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                subTitle={item.description}
                image={item.image}
              />
            )}
            ItemSeparatorComponent={ListItemSeperator}
          />
        </ScrollView>
      </Screen>
    );
}

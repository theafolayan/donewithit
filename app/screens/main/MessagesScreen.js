import React from 'react'
import { FlatList, ScrollView, View } from 'react-native';
import ListItem from '../../components/ListItem';
import Screen from '../Screen';
import ListItemSeperator from '../../components/ListItemSeperator';
import ListItemDeleteAction from '../../components/ListItemDeleteAction';
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
          <FlatList
            data={messages}
            keyExtractor={(message) => message.id.toString()}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log(item.id + " clicked")}
                    renderRightActions={
                        () => <ListItemDeleteAction onPress={() => {
                            console.log(item.id)
                        }}/>
                    }
              />
            )}
            ItemSeparatorComponent={ListItemSeperator}
          />
      </Screen>
    );
}

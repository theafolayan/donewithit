import React, {useState} from 'react'
import { FlatList} from 'react-native';
import ListItem from '../../components/ListItem';
import Screen from '../Screen';
import ListItemSeperator from '../../components/ListItemSeperator';
import ListItemDeleteAction from '../../components/ListItemDeleteAction';
const messagesList = [
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
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(messagesList);
  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id));
  }
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
                    // onPress={() => console.log(item.id + " clicked")}
                    renderRightActions={
                        () => <ListItemDeleteAction onPress={
            ()=>handleDelete(item)
                        }/>
                    }
              />
            )}
            ItemSeparatorComponent={ListItemSeperator}
          />
      </Screen>
    );
}

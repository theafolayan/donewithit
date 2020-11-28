import React from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../../components/ListItem'
const messages = [
    {
        id: 1,
        title: "Hello enquiry",
        description: "lorem ipsum sit dolor amet",
        image: require('../../../assets/chair.jpg')
    },
    {
        id: 2,
        title: "Hello enquiry",
        description: "lorem ipsum sit dolor amet",
        image: require('../../../assets/chair.jpg')
    },
    {
        id: 3,
        title: "Hello enquiry",
        description: "lorem ipsum sit dolor amet",
        image: require('../../../assets/logo-red.png')
    }
]

export default function MessagesScreen() {
    return (
        <SafeAreaView> 
             <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => <ListItem title={item.title} subTitle={item.description}
            image ={item.image}
            />}
        />
       </SafeAreaView>
    )
}

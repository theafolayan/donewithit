import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import colors from "../config/colors";
import Screen from "./Screen";

const menuItems = [
  {
    title: "My listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Oluwaseun Afolayan"
          subTitle="theafolayan@gmail.com"
          image={require("../../assets/chair.jpg")}
        />
          </View>
          <View style={styles.container}>
              <FlatList
                  ItemSeparatorComponent ={ListItemSeperator}
                  data={menuItems}
                  keyExtractor={menuItem => menuItem.title}
                  renderItem={({ item }) => <ListItem title={item.title} IconComponent={ 
                      <Icon name={item.icon.name} backgroundColor={ item.icon.backgroundColor}/>
                  }/>} />
          </View>

          <ListItem title="Log out" IconComponent={ <Icon name= "logout" backgroundColor="#ffe66d"/>}/>
    </Screen>
  );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light,
    }
});

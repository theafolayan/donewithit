import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "../screens/Screen";
import PickerItem from "./PickerItem";

export default function AppPicker({ icon, items, onSelectItem, selectedItem, placeholder }) {
  const [modalVisible, setmodalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setmodalVisible(true);
        }}
      >
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style> {selectedItem ? selectedItem.label : placeholder} </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <View>
            <Button
              title="Close modal"
              onPress={() => {
                setmodalVisible(false);
              }}
                      />
                      <FlatList
                          data={items}
                          keyExtractor={item => item.value.toString()}
                          renderItem={({ item }) => <PickerItem
                              label={item.label}
                              onPress={() => {
                                  setmodalVisible(false);
                                  onSelectItem(item);
                              }}/>} />
          </View>
        </Screen>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: defaultStyles.colors.dark,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

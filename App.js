import React, { useState } from "react";
import Screen from "./app/screens/Screen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screens/auth/LoginScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const categories = [
    {
      label: "Furniture",
      value: 1,
    },
    {
      label: "Clothing",
      value: 2,
    },
    {
      label: "Cameras",
      value: 3,
    },
  ];
  const [category, setCategory] = useState(categories[0]);
  return (
    // <>
    // <LoginScreen/>
    <WelcomeScreen />
    //   <Screen>
    //     <AppPicker
    //       selectedItem={category}
    //       onSelectItem = {(item) => setCategory(item)}
    //       items={categories} placeholder="Category" icon="apps" />
    //     <AppTextInput icon="email" placeholder="Email" />
    //   </Screen>
    // </>
  );
}

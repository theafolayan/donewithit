import React, {useState} from "react";
import Screen from "./app/screens/Screen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

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
    }
  ];
    const [category, setCategory] = useState(categories[0]);
  return (
    <>
      <Screen>
        <AppPicker
          selectedItem={category}
          onSelectItem = {(item) => setCategory(item)}
          items={categories} placeholder="Category" icon="apps" />
        <AppTextInput icon="email" placeholder="Email" />
      </Screen>
    </>
  );
}

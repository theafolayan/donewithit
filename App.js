import React from "react";
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
  return (
    <>
      <Screen>
        <AppPicker items={categories} placeholder="Category" icon="apps" />
        <AppTextInput icon="email" placeholder="Email" />
      </Screen>
    </>
  );
}

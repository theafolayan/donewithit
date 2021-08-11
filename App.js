import React, { useState } from "react";
import Screen from "./app/screens/Screen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screens/auth/LoginScreen";
import WelcomeScreen from "./app/screens/main/WelcomeScreen";

export default function App() {
  return (
    <>
      <LoginScreen />
    </>
  );
}

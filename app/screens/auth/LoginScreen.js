import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppTextInput from "../../components/AppTextInput";
// import styles from '../../config/styles'
import Screen from "../Screen";
import AppButton from "../../components/AppButton";
import { Formik } from "formik";

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image
        source={require("../../../assets/logo-red.png")}
        style={styles.logo}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              placeholder="email"
              icon="email"
              autoCapitalize="none"
              onChangeText={handleChange("email")}
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <AppTextInput
              placeholder="Password"
              icon="lock"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="emailAddress"
              textContentType="password"
              secureTextEntry
              onChangeText={handleChange("password")}
                      />
                      <AppButton
        title="Login"
        onPress={handleSubmit}
      />
          </>
        )}
      </Formik>

      
    </Screen>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    paddingHorizontal: 25,
  },
});

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../../components/AppTextInput";
import Screen from "../Screen";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

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
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
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
            <AppText style={{ color: "red" }}> {errors.email}</AppText>
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
            <AppText style={{ color: "red" }}> {errors.password}</AppText>
            <AppButton title="Login" onPress={handleSubmit} />
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

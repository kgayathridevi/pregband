import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const LogInScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Log In Screen</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button title="Login" onPress={() => navigation.navigate("Home")} />
      <Text>Don't have an account?</Text>
      <a onPress={() => navigation.navigate("Sign")}>Sign Up</a>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({});

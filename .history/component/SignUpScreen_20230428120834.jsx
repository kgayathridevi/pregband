import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sign Up Screen</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Age" />
      <TextInput placeholder="Height" />
      <TextInput placeholder="Weight" />
      <TextInput placeholder="Password" />
      <Button title="Sign Up" onPress={() => navigation.navigate("Log")} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});

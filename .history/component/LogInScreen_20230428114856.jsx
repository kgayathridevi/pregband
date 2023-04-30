import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const LogInScreen = ({ navigation }) => {
  return (
    <View>
      <Text>LogInScreen</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button title="Login" onPress={() => navigation.navigate("Sign")} />
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({});

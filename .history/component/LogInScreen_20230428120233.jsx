import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Text, TextInput, Button, Link, View } from "react-native";

const LogInScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Log In Screen</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button title="Login" onPress={() => navigation.navigate("Home")} />
      <Text>Don't have an account?</Text>
      <Link to={{ screen: "Sign", params: { id: "jane" } }}>
        Go to Jane's profile
      </Link>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({});

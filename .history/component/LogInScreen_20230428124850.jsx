import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";

const LogInScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Log In Screen</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button title="Login" onPress={() => navigation.navigate("Home")} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Sign");
        }}
      >
        <Text>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({});

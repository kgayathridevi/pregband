import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const LogInScreen = ({ navigation }) => {
  return (
    <View>
      <Text>LogInScreen</Text>
      <Button title="click" onPress={() => navigation.navigate("Sign")} />
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({});

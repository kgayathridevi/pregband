import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native";

const SignUpScreen = () => {
  return (
    <View>
      <Text>SignUpScreen</Text>
      <Button title="click" onPress={() => navigation.navigate("Log")} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});

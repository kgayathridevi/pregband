import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SignUpScreen</Text>
      <TextInput 
          placeholder="Email" />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
        />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30px,
    alignItems: 
  },
});

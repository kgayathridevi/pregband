import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SignUpScreen</Text>
      <orm>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
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

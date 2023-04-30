import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <View></View>
        <view>
          <Text>Sign</Text>
          <Text>Up</Text>
        </view>
      </View>
      <View></View>
      <Text>Sign Up Screen</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Age" />
      <TextInput placeholder="Height" />
      <TextInput placeholder="Weight" />
      <TextInput placeholder="Password" />
      <Button title="Sign Up" onPress={() => navigation.navigate("Log")} />
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});

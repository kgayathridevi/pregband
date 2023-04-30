import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import React from "react";
import { Button } from "react-native";
import Ionicons from 

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <View>
          <Ionicons name="arrow-back" color="black" size={30} />
        </View>
        <View>
          <Text>Sign</Text>
          <Text>Up</Text>
        </View>
      </View>
      <View></View>
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

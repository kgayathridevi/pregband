import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import React from "react";
import { Button } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Ionicons name="arrow-back" color="black" size={30} />
        </View>
        <View>
          <Text>Sign</Text>
          <Text>Up</Text>
        </View>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});

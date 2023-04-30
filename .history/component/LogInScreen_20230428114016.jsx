import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const LogInScreen = () => {
  return (
    <View>
      <Text>LogInScreen</Text>
      <Button title="click" onPress={() => navigation.navigate("")} />
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({});

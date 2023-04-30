import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Button } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.btnCont}>
          <Ionicons name="arrow-back" color="black" size={30} />
        </View>
        <View style={styles.titleContain}>
          <Text style={styles.textC}>Sign</Text>
          <Text style={[styles.textC, styles.textC2]}> Up</Text>
        </View>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#E5ECF3",
  },
  headerContainer: {
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnCont: {
    padding: 10,
  },
  titleContain: {
    flexDirection: "row",
    width: "85%",
  },
  textC: {
    fontSize: 40,
  },
  textC2: {
    color: 
  },
});

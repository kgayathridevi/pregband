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
    borderWidth: 2,
    flexDirection: "row",
  },
  btnCont: {},
  //   container: {
  //     // borderWidth: 2,
  //     height: "100%",
  //     backgroundColor: "#E5ECF3",
  //   },
  //   headerContainer: {
  //     // borderWidth: 2,
  //     height: "10%",
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //   },
  //   btnCont: {
  //     justifyContent: "center",
  //     // borderWidth: 2,
  //   },
  //   textC: {
  //     fontSize: 37,
  //   },
  //   textC2: {
  //     color: "#D37F7D",
  //   },
  //   titleContain: {
  //     // borderWidth: 2,
  //     flexDirection: "row",
  //     width: "85%",
  //     alignItems: "center",
  //   },
});

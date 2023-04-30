import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

const LogInScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.btnCont}>
          {/* <Text>back</Text> */}
          <Ionicons name="arrow-back" color="black" size={30} />
        </View>
        <View style={styles.titleContain}>
          <Text style={styles.textC}>Log</Text>
          <Text style={[styles.textC, styles.textC2]}> In</Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <Text>Email</Text>
          <TextInput style={styles.textInp} placeholder="Enter your name" />
        </View>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    height: "100%",
    backgroundColor: "#E5ECF3",
  },
  headerContainer: {
    borderWidth: 2,
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleContain: {
    borderWidth: 2,
    flexDirection: "row",
    width: "85%",
    alignItems: "center",
  },
  btnCont: {
    justifyContent: "center",
    // borderWidth: 2,
  },
  textC: {
    fontSize: 37,
  },
  textC2: {
    color: "#D37F7D",
  },

  mainContainer: {
    borderWidth: 2,
    height: "90%",
  },
  inputContainer: {},
  textInp: {
    borderWidth: 2,
    borderRadius: 20,
    height: 50,
    padding: 5,
  },
});

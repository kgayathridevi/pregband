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
          <Text style={{ fontSize: 20 }}>Email</Text>
          <TextInput style={styles.textInp} placeholder="Enter your name" />

          <Text style={{ fontSize: 20 }}>Password</Text>
          <TextInput style={styles.textInp} placeholder="Enter your password" />

          <View style={{ marginTop: 15, alignItems: "center" }}>
            <TouchableOpacity style={styles.logBtn}>
              <Text>Log In</Text>
            </TouchableOpacity>
          </View>
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
    borderColor: "red",
  },
  inputContainer: {
    borderWidth: 2,
    height: "80%",
    justifyContent: "center",
    padding: 10,
  },
  textInp: {
    borderWidth: 4,
    borderColor: "#D4ADAC",
    borderRadius: 20,
    height: 50,
    paddingHorizontal: 5,
    marginTop: 10,
  },
  logBtn: {
    backgroundColor: "#F9E8E6",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    borderRadius: 15,
  },
});

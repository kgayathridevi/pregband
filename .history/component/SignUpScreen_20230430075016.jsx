import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
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
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 18 }}>Email</Text>
          <TextInput style={styles.textInp} placeholder="Enter your name" />

          <Text style={{ fontSize: 18 }}>Name</Text>
          <TextInput style={styles.textInp} placeholder="Enter your name" />

          <Text style={{ fontSize: 18 }}>Age</Text>
          <TextInput style={styles.textInp} placeholder="Enter your name" />

          <Text style={{ fontSize: 18 }}>Weight</Text>
          <TextInput style={styles.textInp} placeholder="Enter your name" />

          <Text style={{ fontSize: 18 }}>Height</Text>
          <TextInput style={styles.textInp} placeholder="Enter your name" />

          <Text style={{ fontSize: 18 }}>Trimister</Text>
          <TextInput style={styles.textInp} placeholder="Enter your name" />

          <Text style={{ fontSize: 18, marginTop: 15 }}>Password</Text>
          <TextInput style={styles.textInp} placeholder="Enter your password" />

          <View style={{ marginTop: 20, alignItems: "center" }}>
            <TouchableOpacity
              style={styles.logBtn}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ fontSize: 18 }}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Sign")}>
              <Text style={{ textDecorationLine: "underline", marginTop: 15 }}>
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    height: "100%",
    backgroundColor: "#E5ECF3",
    padding: 10,
  },
  headerContainer: {
    // borderWidth: 2,
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleContain: {
    // borderWidth: 2,
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
    // borderWidth: 2,
    height: "80%",
    justifyContent: "center",
    padding: 10,
    position: "relative",
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

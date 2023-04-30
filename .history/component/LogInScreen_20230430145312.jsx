import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import { firebase } from "../firebase";

// Example of using Firebase Auth
firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("User logged in", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error: ${errorCode} - ${errorMessage}`);
  });

// Example of using Firebase Firestore
const db = firebase.firestore();
db.collection("users")
  .add({
    name: "John Doe",
    email: "john@example.com",
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });

const LogInScreen = ({ navigation }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
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
          <Text style={{ fontSize: 18 }}>Email</Text>
          <TextInput style={styles.textInp} placeholder="Enter your name" />

          <Text style={{ fontSize: 18, marginTop: 15 }}>Password</Text>
          <TextInput style={styles.textInp} placeholder="Enter your password" />

          <View style={{ marginTop: 55, alignItems: "center" }}>
            <TouchableOpacity
              style={styles.logBtn}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ fontSize: 18 }}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Sign")}>
              <Text style={{ textDecorationLine: "underline", marginTop: 15 }}>
                Dont have an account? SignUp
              </Text>
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
    // borderWidth: 2,
    height: "90%",
    borderColor: "red",
  },
  inputContainer: {
    // borderWidth: 2,
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

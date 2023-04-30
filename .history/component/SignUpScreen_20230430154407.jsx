import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  useState,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

import { initializeApp, getApps } from "firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import { firebase } from "@firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNjxKweqxDB_kB01P0TMojwLJvSq8P4hw",
  authDomain: "mai-care.firebaseapp.com",
  projectId: "mai-care",
  storageBucket: "mai-care.appspot.com",
  messagingSenderId: "759465747560",
  appId: "1:759465747560:web:5962c5e1a323e84e4987dd",
  measurementId: "G-2SF048WVYF",
};

if (!getApps.length) {
  const firebase = initializeApp(firebaseConfig);
}

const db = firebase.firestore();

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
        <ScrollView style={styles.inputContainer}>
          <Text style={{ fontSize: 18 }}>Email</Text>
          <TextInput style={styles.textInp} placeholder="Enter your name" />

          <Text style={{ fontSize: 18, marginTop: 10 }}>Name</Text>
          <TextInput style={styles.textInp} placeholder="Enter your name" />

          <Text style={{ fontSize: 18, marginTop: 10 }}>Age</Text>
          <TextInput style={styles.textInp} placeholder="Enter your name" />

          <Text style={{ fontSize: 18, marginTop: 10 }}>Weight</Text>
          <TextInput style={styles.textInp} placeholder="Enter your name" />

          <Text style={{ fontSize: 18, marginTop: 10 }}>Height</Text>
          <TextInput style={styles.textInp} placeholder="Enter your name" />

          <Text style={{ fontSize: 18, marginTop: 10 }}>Trimister</Text>
          <TextInput style={styles.textInp} placeholder="Enter your name" />

          <Text style={{ fontSize: 18, marginTop: 10 }}>Password</Text>
          <TextInput style={styles.textInp} placeholder="Enter your password" />

          <View style={{ marginTop: 20, alignItems: "center" }}>
            <TouchableOpacity
              style={styles.logBtn}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ fontSize: 18 }}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Log")}>
              <Text
                style={{
                  textDecorationLine: "underline",
                  marginTop: 15,
                  marginBottom: 20,
                }}
              >
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    height: "90%",
  },
  inputContainer: {
    // borderWidth: 2,
    height: "80%",
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

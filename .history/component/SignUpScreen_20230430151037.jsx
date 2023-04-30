// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
//   useState,
// } from "react-native";
// import React from "react";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { SafeAreaView } from "react-native-safe-area-context";
// import auth from "react-native-firebase/auth";

// const SignUpScreen = ({ navigation }) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.headerContainer}>
//         <View style={styles.btnCont}>
//           <Ionicons name="arrow-back" color="black" size={30} />
//         </View>
//         <View style={styles.titleContain}>
//           <Text style={styles.textC}>Sign</Text>
//           <Text style={[styles.textC, styles.textC2]}> Up</Text>
//         </View>
//       </View>
//       <View style={styles.mainContainer}>
//         <ScrollView style={styles.inputContainer}>
//           <Text style={{ fontSize: 18 }}>Email</Text>
//           <TextInput style={styles.textInp} placeholder="Enter your name" />

//           <Text style={{ fontSize: 18, marginTop: 10 }}>Name</Text>
//           <TextInput style={styles.textInp} placeholder="Enter your name" />

//           <Text style={{ fontSize: 18, marginTop: 10 }}>Age</Text>
//           <TextInput style={styles.textInp} placeholder="Enter your name" />

//           <Text style={{ fontSize: 18, marginTop: 10 }}>Weight</Text>
//           <TextInput style={styles.textInp} placeholder="Enter your name" />

//           <Text style={{ fontSize: 18, marginTop: 10 }}>Height</Text>
//           <TextInput style={styles.textInp} placeholder="Enter your name" />

//           <Text style={{ fontSize: 18, marginTop: 10 }}>Trimister</Text>
//           <TextInput style={styles.textInp} placeholder="Enter your name" />

//           <Text style={{ fontSize: 18, marginTop: 10 }}>Password</Text>
//           <TextInput style={styles.textInp} placeholder="Enter your password" />

//           <View style={{ marginTop: 20, alignItems: "center" }}>
//             <TouchableOpacity
//               style={styles.logBtn}
//               onPress={() => navigation.navigate("Home")}
//             >
//               <Text style={{ fontSize: 18 }}>Sign Up</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate("Log")}>
//               <Text
//                 style={{
//                   textDecorationLine: "underline",
//                   marginTop: 15,
//                   marginBottom: 20,
//                 }}
//               >
//                 Already have an account? Login
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { firebase } from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  // Your Firebase config here
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [trimister, setTrimister] = useState("");

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;

        db.collection("users")
          .doc(user.uid)
          .set({
            name,
            age,
            email,
            weight,
            height,
            trimister,
          })
          .then(() => {
            console.log("User added to Firestore!");
            navigation.navigate("Home");
          })
          .catch((error) => {
            console.error("Error adding user to Firestore: ", error);
          });
      })
      .catch((error) => {
        console.error("Error signing up: ", error);
      });
  };

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
          <TextInput
            style={styles.textInp}
            placeholder="Enter your email"
            onChangeText={setEmail}
            value={email}
          />

          <Text style={{ fontSize: 18, marginTop: 10 }}>Name</Text>
          <TextInput
            style={styles.textInp}
            placeholder="Enter your name"
            onChangeText={setName}
            value={name}
          />

          <Text style={{ fontSize: 18, marginTop: 10 }}>Age</Text>
          <TextInput
            style={styles.textInp}
            placeholder="Enter your age"
            onChangeText={setAge}
            value={age}
          />

          <Text style={{ fontSize: 18, marginTop: 10 }}>Weight</Text>
          <TextInput
            style={styles.textInp}
            placeholder="Enter your weight"
            onChangeText={setWeight}
            value={weight}
          />

          <Text style={{ fontSize: 18, marginTop: 10 }}>Height</Text>
          <TextInput
            style={styles.textInp}
            placeholder="Enter your height"
            onChangeText={setHeight}
            value={height}
          />

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

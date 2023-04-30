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
      <View></View>
    </SafeAreaView>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    height: "100%",
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
    alignItems: "center",
    borderWidth: 2,
  },
  textC: {
    fontSize: 37,
  },
  textC2: {
    color: "#D37F7D",
  },
});

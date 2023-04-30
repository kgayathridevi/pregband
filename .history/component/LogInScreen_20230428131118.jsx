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

const LogInScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text>back</Text>
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
  },
  titleContain: {
    borderWidth: 2,
    flexDirection: "row",
  },
  textC: {
    fontSize: 37,
  },
  textC2: {
    color: "#D37F7D",
  },
});

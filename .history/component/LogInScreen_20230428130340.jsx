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
      {/* <Text>HEllo</Text> */}
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
});

import { StyleSheet, Text, View, Ionicons } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.maincontainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.textC}>Hi,</Text>
          <Text style={[styles.textC, styles.textC2]}> Useless</Text>
        </View>
        <View></View>
      </View>
      {/* <View style={styles.headerContainer}>
        <View style={styles.btnCont}>
          <Ionicons name="arrow-back" color="black" size={30} />
        </View>
        <View style={styles.titleContain}>
          <Text style={styles.textC}>Log</Text>
          <Text style={[styles.textC, styles.textC2]}> In</Text>
        </View>
      </View> */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { height: "100%" },
  maincontainer: {
    marginTop: 10
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: { flexDirection: "row" },
  textC: { fontSize: 37 },
});

import { StyleSheet, Text, View, Ionicons } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <View>
          <Ionicons name="arrow-back" color="black" size={30} />
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

const styles = StyleSheet.create({});

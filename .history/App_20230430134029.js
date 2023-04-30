import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignUpScreen from "./component/SignUpScreen";
import LogInScreen from "./component/LogInScreen";
import Home from "./component/Home";

const admin = require("firebase-admin");
const serviceAccount = require("./backend/mai-care-firebase-adminsdk-sfqxu-962ad593ad.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com",
});

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Log"
          component={LogInScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Sign"
          component={SignUpScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

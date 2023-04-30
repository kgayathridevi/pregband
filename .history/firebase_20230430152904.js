import { firebase } from "@expo-firebase/app";
import { firestore } from "@expo-firebase/firestore";
import { auth } from "@expo-firebase/auth";

// Your Firebase configuration object
const firebaseConfig = {
  // ...
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
firebase.firestore();

// Initialize Firebase Auth
firebase.auth();

// Export the initialized Firebase modules
export { firebase, firestore, auth };

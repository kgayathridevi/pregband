import { firebase } from "@expo-firebase/app";
import { firestore } from "@expo-firebase/firestore";
import { auth } from "@expo-firebase/auth";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCNjxKweqxDB_kB01P0TMojwLJvSq8P4hw",
  authDomain: "mai-care.firebaseapp.com",
  projectId: "mai-care",
  storageBucket: "mai-care.appspot.com",
  messagingSenderId: "759465747560",
  appId: "1:759465747560:web:5962c5e1a323e84e4987dd",
  measurementId: "G-2SF048WVYF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
firebase.firestore();

// Initialize Firebase Auth
firebase.auth();

// Export the initialized Firebase modules
export { firebase, firestore, auth };

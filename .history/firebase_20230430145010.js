import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNjxKweqxDB_kB01P0TMojwLJvSq8P4hw",
  authDomain: "mai-care.firebaseapp.com",
  projectId: "mai-care",
  storageBucket: "mai-care.appspot.com",
  messagingSenderId: "759465747560",
  appId: "1:759465747560:web:5962c5e1a323e84e4987dd",
  measurementId: "G-2SF048WVYF",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

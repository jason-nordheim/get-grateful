import * as firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa_UOsgEBlV5vLRohqfXofi7ODEkJSy3k",
  authDomain: "get-grateful.firebaseapp.com",
  databaseURL: "https://get-grateful.firebaseio.com",
  projectId: "get-grateful",
  storageBucket: "get-grateful.appspot.com",
  messagingSenderId: "980435148971",
  appId: "1:980435148971:web:a0a5eba6f86dacc89957ee",
  measurementId: "G-QBFGNWNBP8",
};

// Initialize Firebase
const gratefulProject = firebase.initializeApp(firebaseConfig);
export const db = gratefulProject.firestore() 
export const auth = gratefulProject.auth() 
export const providers = {
  google: firebase.auth.GoogleAuthProvider
}


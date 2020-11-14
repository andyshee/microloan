
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
import config from "./firebaseConfig"
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
firebase.initializeApp(config);

export var firebaseui = require('firebaseui');



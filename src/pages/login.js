import logo from '../logo.svg';
import '../App.css';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
import config from "../firebaseConfig"
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
firebase.initializeApp(config);

var firebaseui = require('firebaseui');

var ui = new firebaseui.auth.AuthUI(firebase.auth());

// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   ],
// });

function Login() {
  return (
    <div className="App">
      <div id="firebaseui-auth-container">

      </div>
    </div>
  );
}

export default Login;

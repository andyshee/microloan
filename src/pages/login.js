import './login.css'
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

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: "./home",
});

function Login() {
  return (
    <div className="App">
        <div className = "login-container"> 
            <h1>Community Good. Simplified.</h1>
            <div className="platform-info">
                <h2>EverGreen is a platform to earn money by doing community service.</h2>
                <h2>Community members can post tasks that need done in their neighborhood in exchange for rewards.</h2>
            </div>
            <div id="login-button-container">
                <div id="firebaseui-auth-container">
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;

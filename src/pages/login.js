import './login.css'
import '../App.css';
import React, { Component } from 'react';
import { firebaseui } from '../services/firebase/firebase';
import firebase from "firebase/app";
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: "./home",
});


export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="login-container">
          <h1>Community Good. Simplified.</h1>
          <div className="platform-info">
            <h2>EverGreen is a platform to earn money by doing community service.</h2>
            <h2>Community members can post tasks that need done in their neighborhood in exchange for rewards.</h2>
          </div>
          <div id="firebaseui-auth-container">
          </div>
        </div>
      </div>
    );
  }

}


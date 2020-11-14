import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import HomePage from './pages/HomePage';
import api from './services/api/api';
//page imports
import Login from './pages/login'
import Home from './pages/HomePage'
import MyNavbar from './components/navbar';
import firebase from "firebase/app";
import Profile from './pages/Profile'
import VolunteerRequest from './pages/VolunteerRequest';
import Messages from './pages/Messages';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };

    this.handleSignOut = this.handleSignOut.bind(this);
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: user
        })
        console.log(this.state);
      } else {
        console.log('user is not signed in');
      }
    })
    //import api
    //make your call:
    const promise = api.get('/messages');
    // upon a successful call, run a callback
    promise.then((obj) => {
      console.log(obj.data);
      console.log('success')
    })
    promise.catch(err => {
      console.log(err);
    })

    // //working get request
    // var openjobs;
    // openjobs = api.get('openoffers').then(jobs => console.log(jobs));

    api.post('/submit-job-form', { name: "Chris", lname: "Piserchia" })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  handleSignOut() {
    firebase.auth().signOut().then(() => {
      console.log('Sign out successful');
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    // if (this.state.user) return <Profile />
    return (
      <Router>
        <MyNavbar user={this.state.user} signOut={this.handleSignOut} />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route path="/profile">
            <Profile user={this.state.user} />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
<<<<<<< HEAD
        <Route path="/createrequest">
          <VolunteerRequest />
=======
          <Route path="/create-job">
            <VolunteerRequest />
>>>>>>> 4e93b54a30d73d1e3e0fcb0596690b6ad02c54b5
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router >
    );
  }

}



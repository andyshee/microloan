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
import api from './api/api';
//page imports
import Login from './pages/login'
import Home from './pages/HomePage'
import MyNavbar from './components/navbar';

export default class App extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    api.get('')
      .then(res => {
        const text = res.data;
        console.log(text);
      }).catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <Router>
        <MyNavbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router >
    );
  }

}

function Profile() {
  return <p>profile</p>;
}

function Messages() {
  return <p>messages</p>
}


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import HomePage from './pages/HomePage';

//page imports
import Login from './pages/login'
import Home from './pages/HomePage'
import MyNavbar from './components/navbar';

function App() {
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
    </Router>
  );
}

function Profile() {
  return <p>profile</p>;
}

function Messages() {
  return <p>messages</p>
}

export default App;

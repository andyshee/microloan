// routes pages depending on current url 
/*
TEMPLATE FOR CREATING LINKS USING THIS ROUTER
import { Link } from "react-router-dom";
...
<Link to="/signup">
  <button variant="outlined">
    Sign up
  </button>
</Link>

*/

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login'

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/login' component={Login}></Route>
    </Switch>
  );
}

export default Main;
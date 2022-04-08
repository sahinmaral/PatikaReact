import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import NoMatch from './components/NoMatch'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName='nav-active' exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName='nav-active' to="/about">About</NavLink>
              </li>
              <li>
                <NavLink activeClassName='nav-active' to="/users">Users</NavLink>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            <Route path="*" component={NoMatch} />

            {/* <Route path="/user/:id" component={User}>
              <User />
            </Route> */}

          </Switch>
        </div>
      </Router>
    </div>
  );

}


export default App;

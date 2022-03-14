import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './screens/Home';
import NavBar from './components/NavBar'
import Dashboard from './screens/Dashboard';
import Class from './screens/Class';
import Courses from './screens/Courses';
import Main from './screens/Main'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <NavBar />
            <Main />
          </Route>
          <Route exact path="/dashboard">
            <NavBar />
            <Dashboard />
          </Route>
          <Route exact path="/courses">
            <NavBar />
            <Courses />
          </Route>
          <Route exact path='/course/:id'>
            <NavBar />
            <Class />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

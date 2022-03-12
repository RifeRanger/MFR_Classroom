import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './screens/Home';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      {/* <Route path="/navbar" component={NavBar} /> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

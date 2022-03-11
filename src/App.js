import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dashboard">
            <NavBar />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

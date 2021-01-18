import { useState, useEffect } from 'react';
import HomeImage from '../src/components/bOOKit.png'
import "./App.css";
import Home from "../src/components/Home";
import Dashboard from "../src/components/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import SearchPage from './components/SearchPage';
import { GETFromUsers } from './lib/FetchShortcuts';

function App() {
  const [user, setUser] = useState(false);
  const [isFirstLoaded, setIsFirstLoaded] = useState(false);

  //useEffect(() => {
  // fetch(`localhost:3000/api/users/${endpoint}`)
  // .then((res) => {
  //   if (res.ok) {
  //   res.json().then((data) => setUser(data));
  // }}
    // .catch(catchError()); 
  //}, [])

  return (
    <div className="App" style={{ 
      backgroundImage: {HomeImage} 
    }}>
      <Router>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/Home" component={Home}></Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

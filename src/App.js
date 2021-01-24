import { useState, useEffect } from 'react';
import HomeImage from '../src/components/bOOKit.png';
import './App.css';
import Home from '../src/components/Home';
import Dashboard from '../src/components/Dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchPage from './components/SearchPage';
import { GETFromUsers } from './lib/FetchShortcuts';
import ServiceProfile from './components/ServiceProfile';
import Apply from "../src/components/Apply";
import ProfileSettings from "../src/components/ProfileSettings";

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
          backgroundImage: {HomeImage}, backgroundSize:"cover", width:'100%', minHeight:'100%', backgroundRepeat: 'repeat-y'
    
        }} id ="bg">
    <Router>
        <Switch>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route path="/Provider/:id">
            <ServiceProfile />
          </Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Home" component={Dashboard}></Route>
          <Route exact path="/Apply" component={Apply}></Route>
          <Route exact path="/ProfileSettings" component={ProfileSettings}></Route>
          <Route>
            <ul>
            <li>
                <Link to="/ProfileSettings">ProfileSettings</Link>
              </li>
            <li>
                <Link to="/Apply">Apply</Link>
              </li>
              <li>
                <Link to="/Dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

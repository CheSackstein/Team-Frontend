import { useState, useEffect } from "react";
import HomeImage from "../src/components/bOOKit.png";
import "./App.css";
import Home from "../src/components/Home";
import Dashboard from "../src/components/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchPage from "./components/SearchPage";
import { GETFromUsers } from "./lib/FetchShortcuts";
import ServiceProfile from "./components/ServiceProfile";
import Apply from "../src/components/Apply";
import ProfileSettings from "../src/components/ProfileSettings";
import Bookings from "../src/components/Bookings";

function App() {
  const [user, setUser] = useState(null);
  console.log('user: ', user);
  const [isFirstLoaded, setIsFirstLoaded] = useState(false);

useEffect(() => {
  let userBrought = localStorage.getItem('user')
  setUser(userBrought);
}, [])

  return (
    <div className="App">
      <NavBar
        user={user}
      //passUser={user => setUser(user)} 
      />
      <Router>
        <Switch>
          <Route exact path="/search" component={SearchPage} />
          <Route path="/Provider/:id" component={ServiceProfile} />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Home" component={Home}></Route>
          <Route exact path="/Apply" component={Apply}></Route>
          <Route
            exact
            path="/ProfileSettings"
            component={ProfileSettings}
          ></Route>
          <Route exact path="/Bookings" component={Bookings}></Route>
          <Route>
            <ul>
              <li>
                <Link to="/Bookings">Bookings</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
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

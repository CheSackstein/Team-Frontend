import { useState, useEffect } from "react";
import HomeImage from "../src/components/Home/bOOKit.png";
import styles from './App.module.css';
import Home from "../src/components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import SearchPage from "./components/Search/SearchPage";
import { GETFromUsers } from "./lib/FetchShortcuts";
import ServiceProfile from "./components/ServiceProfile/ServiceProfile";
import Apply from "../src/components/Apply/Apply";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import Err500 from "./components/Errors/Err500";
import Err404 from "./components/Errors/Err404";

function App() {
  const [user, setUser] = useState(null);
  console.log('user: ', user);
  const [isFirstLoaded, setIsFirstLoaded] = useState(false);

useEffect(() => {
  let userBrought = localStorage.getItem('user')
  setUser(userBrought);
}, [])

  return (
    <div className={styles.App}>
      <NavBar
        user={user}
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
          <Route path="/err500" component={Err500} />
          <Route component={Err404} />
          <Route>
            <ul>
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

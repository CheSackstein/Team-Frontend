import { useState, useEffect } from "react";
import styles from './App.module.css';
import Home from "../src/components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import SearchPage from "./components/Search/SearchPage";
import Apply from "../src/components/Apply/Apply";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import Err500 from "./components/Errors/Err500";
import Err404 from "./components/Errors/Err404";
import ServicePage from "./components/ServiceProfile/ServicePage"
import { UserContext } from "./lib/UserContext";

function App() {
  const [user, setUser] = useState(null);
  const [isFirstLoaded, setIsFirstLoaded] = useState(false);

  useEffect(() => {
   // let userBrought = localStorage.getItem('user');
  let userBrought = JSON.parse(localStorage.getItem('user'))
  console.log('userBrought: ', userBrought);
    setUser(userBrought);  
    setIsFirstLoaded(true)
}, [])

  return (
    isFirstLoaded && (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser
      }}
    >
      <div className={styles.App}>
            <NavBar
              user={user}
            />
            <Router>
              <Switch>
                <Route exact path="/search" component={SearchPage} />
                <Route path="/Provider/:id" component={ServicePage} />
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
              </Switch>
            </Router>
          </div>
    </UserContext.Provider> 
    )
  );
}

export default App;

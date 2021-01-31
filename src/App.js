import { useState, useEffect } from "react";
import HomeImage from "../src/components/Home/bOOKit.png";
import "./App.css";
import Home from "../src/components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchPage from "./components/SearchPage";
import { auth } from "./lib/FetchShortcuts";
import ServiceProfile from "./components/ServiceProfile";
import Apply from "../src/components/Apply/Apply";
import ProfileSettings from "../src/components/ProfileSettings";

function App() {
  const [user, setUser] = useState(null);
  const [isFirstLoaded, setIsFirstLoaded] = useState(false);

  useEffect(() => {
    // auth().then(user => {
    //   setUser(user)
    // }).then(setIsFirstLoaded(true))
    
  let userBrought = localStorage.getItem('user')
  setUser(userBrought);
  setIsFirstLoaded(true)
}, [])

  return (
    isFirstLoaded && <div className="App">
      <NavBar
        user={user}
      />
      <Router>
        <Switch>
          <Route exact path="/search" component={SearchPage} />
          <Route path="/Provider/:id" component={ServiceProfile} />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Home" component={Home}></Route>
          <Route exact path="/Apply" render={props => {
            if (!user) return <Redirect to='Home' />
            return <Apply />
          }}></Route>
          <Route
            exact
            path="/ProfileSettings"
            user={user}
            render={props => {
              if (user) {
                return <ProfileSettings  />
              } else {
                return <Redirect to='Home' />;
              }
            }}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

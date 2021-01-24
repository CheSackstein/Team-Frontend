import HomeImage from '../src/components/bOOKit.png'
import "./App.css";
import Home from "../src/components/Home";
import Apply from "../src/components/Apply";
import ProfileSettings from "../src/components/ProfileSettings";
import Dashboard from "../src/components/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App"  id ="bg">
      <Router>
        <Switch>
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

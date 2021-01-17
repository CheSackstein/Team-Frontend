import HomeImage from '../src/components/bOOKit.png'
import "./App.css";
import Home from "../src/components/Home";
import Dashboard from "../src/components/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: {HomeImage} 
    }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/Home" component={Home}></Route>
          <Route>
            <ul>
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

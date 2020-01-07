import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Features from "./components/features";
import Pricing from "./components/pricing";
import Dank from "./components/dankmemes";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/dank" component={Dank}>
              <Dank />
            </Route>
            <Route path="/features" component={Features}>
              <Features />
            </Route>
            <Route path="/pricing" component={Pricing}>
              <Pricing />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

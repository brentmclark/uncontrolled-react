import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./index.css";

import BasicForm from './examples/basic-form'
import WithExternalState from './examples/with-external-state'
import WithFetchedData from './examples/with-fetched-data'

const App = props => {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/basic-form">
            <BasicForm />
          </Route>
          <Route path="/with-external-state">
            <WithExternalState />
          </Route>
          <Route path="/with-fetched-data">
            <WithFetchedData />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

function Home() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/basic-form">Basic Form</Link>
        </li>
        <li>
          <Link to="/with-external-state">With External State</Link>
        </li>
        <li>
          <Link to="/with-fetched-data">With Fetched Data</Link>
        </li>
      </ul>
    </nav>
  )
}





export default App;

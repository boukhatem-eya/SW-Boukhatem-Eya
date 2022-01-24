import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import ListPages from "./components/ListPage/ListPages";
import Protected from "./Protected";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login">
            <ListPages />
          </Route>
          <Route exact path="/home">
            <Protected Cmp={Home} />
            {/* <Home /> */}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

import "./App.css";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Todo from "./components/Todo";
import Login from "./components/Login";
import Register from "./components/Register";
import { auth } from "./firebase";
import Details from "./components/Details";
const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar user={user} />
        <Switch>
          <Route exact path="/">
            <Todo user={user} />
          </Route>
          {/* <Route path="/" component={Todo} exact /> */}
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route exact path="/details">
            <Details user={user} />
          </Route>
          {/* <Route path="/details" component={Details} exact /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

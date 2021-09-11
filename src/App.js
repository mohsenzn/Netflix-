import React from "react";
import "./App.scss";
import Home from "./Pages/Home/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Watch from "./Pages/watch/Watch";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            {user ? <Home /> : <Redirect to="/register" />}
          </Route>
          <Route path="/register">
            {!user ? <Register /> : <Redirect to="/" />}
          </Route>
          <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
          {user && (
            <>
              <Route path="/movies">
                <Home type="movies" />
              </Route>
              <Route path="/series">
                <Home type="series" />
              </Route>
              <Route path="/watch">
                <Watch />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </>
  );
};

export default App;

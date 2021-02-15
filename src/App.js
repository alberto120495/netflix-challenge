import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

import { auth } from "./firebase";

import Home from "./screens/Home";
import LoginScreen from "./screens/LoginScreen";
import "./App.css";
import ProfileScreen from "./screens/ProfileScreen";
import Animacion from "./components/Animacion/Animacion";

function App() {
  const user = useSelector(selectUser);
  const [animacion, setAnimacion] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        //setAnimacion(true);
      } else {
        //logged out
        dispatch(logout());
      }
    });
    setTimeout(() => {
      setAnimacion(false);
    }, 5000);

    return unsubscribe; //Clean up
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              {animacion ? <Animacion /> : <Home />}
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;

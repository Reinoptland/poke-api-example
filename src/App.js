import { useState } from "react";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import MyPokemons from "./components/MyPokemons";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/mypokemons">
          <MyPokemons />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/">404 Page Not found, sorry!</Route>
      </Switch>
    </>
  );
}

export default App;

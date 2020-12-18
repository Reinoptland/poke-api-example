import HomePage from "./components/HomePage";
import { useState } from "react";
import MyPokemons from "./components/MyPokemons";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  console.log("BEN IK INGELOGD?", loggedIn);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/mypokemons">My Pokemon</Link>
      </nav>
      <Switch>
        <Route path="/mypokemons">
          {/* ben je ingelogd */}
          <MyPokemons loggedIn={loggedIn} />
        </Route>
        <Route exact path="/">
          {/* inloggen */}
          <HomePage />
        </Route>
        <Route path="/">404 Page Not found, sorry!</Route>
      </Switch>
    </>
  );
}

export default App;

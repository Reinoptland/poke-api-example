import HomePage from "./components/HomePage";
import MyPokemons from "./components/MyPokemons";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/mypokemons">My Pokemon</Link>
      </nav>
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

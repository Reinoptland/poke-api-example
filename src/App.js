import HomePage from "./components/HomePage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/">404 Page Not found, sorry!</Route>
      </Switch>
    </>
  );
}

export default App;

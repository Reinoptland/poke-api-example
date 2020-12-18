import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoggedInContext } from "../../contexts/LoggedInContext";

export default function NavBar() {
  const loggedInData = useContext(LoggedInContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      {loggedInData.loggedIn && <Link to="/mypokemons">My Pokemon</Link>}
      {!loggedInData.loggedIn && (
        <button onClick={() => loggedInData.setLoggedIn(true)}>Inloggen</button>
      )}
    </nav>
  );
}

import React, { useContext } from "react";
import { LoggedInContext } from "../contexts/LoggedInContext";
import { useHistory } from "react-router-dom";
import PokemonCard from "./PokemonCard";

export default function MyPokemons() {
  const loggedInData = useContext(LoggedInContext);
  console.log("WAT KOMT ER UIT DE CONTEXT", loggedInData);

  const history = useHistory();

  if (loggedInData.loggedIn === false) {
    history.push("/");
  }

  return (
    <div>
      <PokemonCard name="rattata" />
      <PokemonCard name="pidgey" />
    </div>
  );
}

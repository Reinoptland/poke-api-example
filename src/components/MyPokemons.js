import React from "react";
import { useHistory } from "react-router-dom";
import PokemonCard from "./PokemonCard";

export default function MyPokemons(props) {
  const history = useHistory();

  if (props.loggedIn === false) {
    history.push("/");
  }

  return (
    <div>
      <PokemonCard name="rattata" />
      <PokemonCard name="pidgey" />
    </div>
  );
}

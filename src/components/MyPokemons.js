import React from "react";
import PokemonCard from "./PokemonCard";

export default function MyPokemons(props) {
  console.log("PROPS IN MYPOKEMONS PAGE:", props);

  if (props.loggedIn === false) {
    return "GO BACK TO HOME PAGE PLEASE";
  }

  return (
    <div>
      <PokemonCard name="rattata" />
      <PokemonCard name="pidgey" />
    </div>
  );
}

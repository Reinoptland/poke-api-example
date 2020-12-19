import React from "react";
import PokemonType from "../Atoms/PokemonType";

export default function PokemonTypes(props) {
  return (
    <div>
      {props.pokemon.types.map((type) => {
        return <PokemonType name={props.pokemon.name} type={type.type} />;
      })}
    </div>
  );
}

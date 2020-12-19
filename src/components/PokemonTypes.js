import React from "react";

export default function PokemonTypes(props) {
  return (
    <div>
      {props.pokemon.types.map((type) => {
        return (
          <button key={props.pokemon.name + type.type.name}>
            {type.type.name}
          </button>
        );
      })}
    </div>
  );
}

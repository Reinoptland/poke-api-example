import React from "react";

export default function PokemonType(props) {
  console.log(props);
  return <button key={props.name + props.type.name}>{props.type.name}</button>;
}

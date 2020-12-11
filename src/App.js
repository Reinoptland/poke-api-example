import { useState, useEffect } from "react";
import axios from "axios";

import PokemonCard from "./components/PokemonCard";

import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    console.log("hallo! Ik ben een effect");
  }, []);

  return (
    <div className="App">
      <PokemonCard name="pikachu" />
      <PokemonCard name="ditto" />
      <PokemonCard name="geodude" />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import axios from "axios";

import PokemonCard from "./components/PokemonCard";

import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    async function getPokemons() {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`
        );
        console.log("DIT KREGEN WE TERUG:", response.data.results);
      } catch (error) {}
    }

    getPokemons();

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

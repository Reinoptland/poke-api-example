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
        setPokemons(response.data.results);
      } catch (error) {
        alert("Oops, the pokemons got away");
      }
    }

    getPokemons();
  }, []);

  return (
    <div className="App">
      {pokemons &&
        pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.name} name={pokemon.name} />;
        })}
    </div>
  );
}

export default App;

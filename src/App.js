import { useState, useEffect } from "react";
import axios from "axios";

import PokemonCard from "./components/PokemonCard";

import "./App.css";

function App() {
  // maken een state aan
  const [pokemons, setPokemons] = useState(null);
  const [pagina, setPagina] = useState(0);

  console.log("WAT IS PAGINA", pagina, setPagina);

  // use effect
  useEffect(() => {
    // async functie definieren
    async function getPokemons() {
      try {
        // data fetchen uit de api, een array met pokemon (namen)
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`
        );

        // de state updaten met de response uit de api
        setPokemons(response.data.results);
      } catch (error) {
        alert("Oops, the pokemons got away");
      }
    }

    // aanroepen
    getPokemons();
  }, []);

  return (
    <div className="App">
      {pokemons &&
        // array met pokemon namen omzetten in PokemonKaartjes
        // we geven de naam door als een "prop"
        pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.name} name={pokemon.name} />;
        })}
    </div>
  );
}

export default App;
